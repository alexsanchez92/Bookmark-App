import { Component, ViewChild, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { load, add, edit, remove } from 'src/store/bookmark/bookmark.actions';

import  {MatDialog} from '@angular/material/dialog';
import {BookmarkDialogComponent} from '../bookmark-dialog/bookmark-dialog.component';
import {BookmarkTableNgrxComponent} from '../bookmark-table-ngrx/bookmark-table-ngrx.component';

import { BookmarkState } from 'src/store/bookmark/bookmark.reducer';

@Component({
  selector: 'app-with-ngrx',
  templateUrl: './with-ngrx.component.html',
  styleUrls: ['./with-ngrx.component.css']
})
export class WithNgrxComponent implements OnInit {  
	
	bookmarks$: Observable<BookmarkState>;

	constructor( public dialog: MatDialog, private store: Store<{ bookmarks: BookmarkState }>) {
		this.bookmarks$ = this.store.pipe(select('bookmarks'));
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

			console.log("DIALOG afterClosed "+result.action)

			switch(result.action){
				case 'create':
					this.store.dispatch(add({data: result.data}));
					this.childTableNgrx.groupData();
					break;
				case 'edit':
					this.store.dispatch(edit(result.data));
					this.childTableNgrx.groupData();
					break;
				case 'delete':
					this.store.dispatch(remove(result.data));
					this.childTableNgrx.groupData();
					break;
			}

		});
	}

}
