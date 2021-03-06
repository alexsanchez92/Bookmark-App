import { Component, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Bookmark } from 'src/app/models/bookmark.model';
import { State } from 'src/app/store/bookmark/bookmark.reducer';
import * as BookmarkSelector from 'src/app/store/bookmark/bookmark.selector';

@Component({
  selector: 'app-bookmark-table-ngrx',
  templateUrl: './bookmark-table-ngrx.component.html'
})

export class BookmarkTableNgrxComponent{

	public displayedColumns: string[] = ['name', 'url', 'group', 'actions'];
	public dataSource:Bookmark[];

  	@Output() editEvent = new EventEmitter<string>();
	@Output() deleteEvent = new EventEmitter<string>();

	constructor( private store: Store<State>) {
		this.store.pipe(select(BookmarkSelector.selectAllBookmarks)).subscribe( items =>{
			this.dataSource = items;
			this.groupData();
		}
		);
	}
	
	public edit(bookmark) {
      this.editEvent.emit(bookmark);
	}
	
	public delete(bookmark) {
      this.deleteEvent.emit(bookmark);
	}

	public groupData(){
		this.dataSource = this.groupBy('group', this.dataSource);
	}

	private groupBy(column:string, data: Bookmark[]){
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

		const groups = Object.values(data).reduce(customReducer,{});
		const groupArray = Object.keys(groups).map(key => groups[key]);
		const flatList = groupArray.reduce((a,c)=>{return a.concat(c); },[]);
	
		return flatList.filter((rawLine) => {
			return rawLine.isGroup || 
			  	collapsedGroups.every((group) => rawLine[column]!=group.value);
		});
	}
	  
	public isGroup(index, item): boolean{
		return item.isGroup;
	}

}
