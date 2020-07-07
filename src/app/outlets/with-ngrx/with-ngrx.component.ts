import { Component, ViewChild, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { load, add, edit, remove } from 'src/app/store/bookmark/bookmark.actions';
import  {MatDialog} from '@angular/material/dialog';
import {BookmarkDialogComponent} from '../../components/bookmark-dialog/bookmark-dialog.component';
import {BookmarkTableNgrxComponent} from '../../components/bookmark-table-ngrx/bookmark-table-ngrx.component';
import { BookmarkState } from 'src/app/store/bookmark/bookmark.reducer';

@Component({
  selector: 'app-with-ngrx',
  templateUrl: './with-ngrx.component.html'
})

export class WithNgrxComponent implements OnInit {  
	
	constructor( public dialog: MatDialog, private store: Store<{ bookmarks: BookmarkState }>) {
		this.store.pipe(select('bookmarks'));
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
					this.store.dispatch(add({bookmark: result.data}));
					this.childTableNgrx.groupData();
					break;
				case 'edit':
					this.store.dispatch(edit({bookmark: result.data}));
					this.childTableNgrx.groupData();
					break;
				case 'delete':
					this.store.dispatch(remove({bookmark: result.data}));
					this.childTableNgrx.groupData();
					break;
			}

		});
	}

}
