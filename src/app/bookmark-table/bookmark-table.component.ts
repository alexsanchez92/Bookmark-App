import { Component, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';

import {MatTable,MatTableDataSource} from '@angular/material/table';

import { ELEMENT_DATA } from 'src/data/bookmark';
import { Bookmark } from 'src/store/bookmark/bookmark.model';

@Component({
  selector: 'app-bookmark-table',
  templateUrl: './bookmark-table.component.html',
  styleUrls: ['./bookmark-table.component.css']
})

export class BookmarkTableComponent implements OnInit{
  
	displayedColumns: string[] = ['name', 'url', 'group', 'actions'];
	dataSource = new MatTableDataSource<Bookmark>(ELEMENT_DATA);
	data:Bookmark[] = ELEMENT_DATA;
	id = ELEMENT_DATA.length+1;

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

		let newBookmark:Bookmark = {
			id: this.id++,
			name: bookmark.name,
			url: bookmark.url,
			group: bookmark.group,
		}
		console.log("ADD "+newBookmark.id);
		
		this.data.push(newBookmark);
		this.groupData();		
		//this.table.renderRows();
	}

	editBookmark(bookmark: Bookmark){
		console.log("EDIT " +bookmark.id);
		this.data = this.data.filter((value,key)=>{
			if(value.id == bookmark.id){
				value.name = bookmark.name;
				value.url = bookmark.url;
				value.group = bookmark.group;
			}
			return true;
		});
		this.groupData();	
		console.log(this.dataSource.data)	
	}
		
	deleteBookmark(bookmark: Bookmark){    
		console.log("DELETE " +bookmark.id);

		//this.data.splice(0,1);
		this.data = this.data.filter((value,key)=>{
			return value.id != bookmark.id;
		});
		
		this.groupData();
		console.log(this.dataSource.data)
	}

	groupBy(column:string,data: Bookmark[]){
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
