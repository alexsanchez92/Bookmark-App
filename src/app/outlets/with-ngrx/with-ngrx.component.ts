import { Component, ViewChild, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { load, add, edit, remove } from 'src/app/store/bookmark/bookmark.actions';
import  {MatDialog} from '@angular/material/dialog';
import {BookmarkDialogComponent} from '../../components/bookmark-dialog/bookmark-dialog.component';
import {BookmarkTableNgrxComponent} from '../../components/bookmark-table-ngrx/bookmark-table-ngrx.component';
import * as BookmarkSelector from 'src/app/store/bookmark/bookmark.selector';
import {State} from 'src/app/store/bookmark/bookmark.reducer';

@Component({
  selector: 'app-with-ngrx',
  templateUrl: './with-ngrx.component.html'
})

export class WithNgrxComponent implements OnInit {  
	
	public nextId;

	constructor( public dialog: MatDialog, private store: Store<{ bookmarks: State }>) {
		this.store.pipe(select(BookmarkSelector.selectBookmarkState));
		this.store.pipe(select(BookmarkSelector.getNextId)).subscribe( nextId =>{
				this.nextId = nextId;
			}
		);
	}

	ngOnInit(){
		this.store.dispatch(load());
	}

	@ViewChild(BookmarkTableNgrxComponent) childTableNgrx;

	openDialog(action, bookmark) {

		const dialogRef = this.dialog.open(BookmarkDialogComponent, {
			data: {bookmark: bookmark, action: action}
		});
	
		dialogRef.afterClosed().subscribe(result => {

			switch(result.action){
				case 'create':
					const bookmarkInsert = Object.assign({}, result.data, {id: this.nextId});
					this.store.dispatch(add({bookmark: bookmarkInsert}));
					//this.childTableNgrx.groupData();
					break;
				case 'edit':
					this.store.dispatch(edit({bookmark: result.data}));
					//this.childTableNgrx.groupData();
					break;
				case 'delete':
					this.store.dispatch(remove({bookmark: result.data}));
					//this.childTableNgrx.groupData();
					break;
			}
		});
	}
}
