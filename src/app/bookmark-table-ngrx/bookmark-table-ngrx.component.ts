import { Component, ViewChild, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {MatTable,MatTableDataSource} from '@angular/material/table';
import { Bookmark } from 'src/store/bookmark/bookmark.model';

@Component({
  selector: 'app-bookmark-table-ngrx',
  templateUrl: './bookmark-table-ngrx.component.html',
  styleUrls: ['./bookmark-table-ngrx.component.css']
})

export class BookmarkTableNgrxComponent implements OnInit{

	@Input() data: Bookmark[];
  
	displayedColumns: string[] = ['name', 'url', 'group', 'actions'];
	dataSource = new MatTableDataSource<Bookmark>();

  	@Output() editEvent = new EventEmitter<string>();
  	@Output() deleteEvent = new EventEmitter<string>();
	
	ngOnInit(){
		this.dataSource.data = this.data;
		this.groupData();
	}
	
	edit(bookmark) {
      this.editEvent.emit(bookmark);
	}
	
	delete(bookmark) {
      this.deleteEvent.emit(bookmark);
	}

	groupData(){
		console.log(this.data)
		this.dataSource.data = this.groupBy('group', this.data);
	}

	groupBy(column:string, data: Bookmark[]){
		if(!column) return data;

		let collapsedGroups = [];

		const customReducer = (accumulator, currentValue) => {
			let currentGroup = currentValue[column];
			if(!accumulator[currentGroup])
			accumulator[currentGroup] = [{
				groupName: `${column} ${currentValue[column]}`,
				value: currentValue[column], 
				isGroup: true
			}];
			accumulator[currentGroup].push(currentValue);
		
			return accumulator;
		}

		let groups = data.reduce(customReducer,{});
		let groupArray = Object.keys(groups).map(key => groups[key]);
		let flatList = groupArray.reduce((a,c)=>{return a.concat(c); },[]);
	
		return flatList.filter((rawLine) => {
			return rawLine.isGroup || 
			  	collapsedGroups.every((group) => rawLine[column]!=group.value);
		  });
	}
	  
	isGroup(index, item): boolean{
		return item.isGroup;
	}

}
