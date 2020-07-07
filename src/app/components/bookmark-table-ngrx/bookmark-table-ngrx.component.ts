import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkState } from 'src/app/store/bookmark/bookmark.reducer';

@Component({
  selector: 'app-bookmark-table-ngrx',
  templateUrl: './bookmark-table-ngrx.component.html'
})

export class BookmarkTableNgrxComponent implements OnInit{

	public bookmarks$: Observable<BookmarkState>;
	public displayedColumns: string[] = ['name', 'url', 'group', 'actions'];
	public dataSource = new MatTableDataSource<Bookmark>();

  	@Output() editEvent = new EventEmitter<string>();
	@Output() deleteEvent = new EventEmitter<string>();

	constructor( private store: Store<{ bookmarks: BookmarkState }>) {
		this.bookmarks$ = this.store.pipe(select('bookmarks'));
		this.bookmarks$.subscribe( item =>{
			this.dataSource.data = item.bookmarks.list;
		});
	}
	
	ngOnInit(){
		this.groupData();
	}
	
	public edit(bookmark) {
      this.editEvent.emit(bookmark);
	}
	
	public delete(bookmark) {
      this.deleteEvent.emit(bookmark);
	}

	public groupData(){
		this.dataSource.data = this.groupBy('group', this.dataSource.data);
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

		const groups = data.reduce(customReducer,{});
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
