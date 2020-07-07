import { Component, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { ELEMENT_DATA } from 'src/data/bookmark';
import { Bookmark } from 'src/app/models/bookmark.model';

@Component({
  selector: 'app-bookmark-table',
  templateUrl: './bookmark-table.component.html'
})

export class BookmarkTableComponent implements OnInit{
  
	public displayedColumns: string[] = ['name', 'url', 'group', 'actions'];
	public dataSource = new MatTableDataSource<Bookmark>(ELEMENT_DATA);
	public data:Bookmark[] = ELEMENT_DATA;
	public id = ELEMENT_DATA.length+1;

  	@Output() editEvent = new EventEmitter<string>();
  	@Output() deleteEvent = new EventEmitter<string>();
	
	ngOnInit(){
		this.groupData();
	}

	groupData(){
		this.dataSource.data = this.groupBy('group', this.data);
	}
	
	edit(bookmark) {
      this.editEvent.emit(bookmark);
	}
	
	delete(bookmark) {
      this.deleteEvent.emit(bookmark);
	}

	addBookmark(bookmark: Bookmark){    

		const newBookmark:Bookmark = {
			id: this.id++,
			name: bookmark.name,
			url: bookmark.url,
			group: bookmark.group,
		}
		
		this.data.push(newBookmark);
		this.groupData();		
	}

	editBookmark(bookmark: Bookmark){
		this.data = this.data.filter((value,key)=>{
			if(value.id == bookmark.id){
				value.name = bookmark.name;
				value.url = bookmark.url;
				value.group = bookmark.group;
			}
			return true;
		});
		this.groupData();	
	}
		
	deleteBookmark(bookmark: Bookmark){    
		this.data = this.data.filter((value,key)=>{
			return value.id != bookmark.id;
		});
		
		this.groupData();
	}

	groupBy(column:string,data: Bookmark[]){
		if(!column) return data;

		const collapsedGroups = [];

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

		const groups = data.reduce(customReducer,{});
		const groupArray = Object.keys(groups).map(key => groups[key]);
		const flatList = groupArray.reduce((a,c)=>{return a.concat(c); },[]);
	
		return flatList.filter((rawLine) => {
			return rawLine.isGroup || 
			  	collapsedGroups.every((group) => rawLine[column]!=group.value);
		  });
	}
	  
	isGroup(index, item): boolean{
		return item.isGroup;
	}

}
