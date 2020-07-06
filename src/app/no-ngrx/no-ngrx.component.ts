import { Component, ViewChild, OnInit } from '@angular/core';

import  {MatDialog} from '@angular/material/dialog';
import {BookmarkDialogComponent} from '../bookmark-dialog/bookmark-dialog.component';
import {BookmarkTableComponent} from '../bookmark-table/bookmark-table.component';

@Component({
  selector: 'app-no-ngrx',
  templateUrl: './no-ngrx.component.html',
  styleUrls: ['./no-ngrx.component.css']
})
export class NoNgrxComponent{

	constructor( public dialog: MatDialog) {}

	@ViewChild(BookmarkTableComponent) childTable;

	openDialog(action, bookmark) {
		
		const dialogRef = this.dialog.open(BookmarkDialogComponent, {
			data: {bookmark: bookmark, action: action}
		});
	
		dialogRef.afterClosed().subscribe(result => {

			console.log("DIALOG AFTER "+result.action)

			switch(result.action){
				case 'create':
					this.childTable.addBookmark(result.data);
					break;
				case 'edit':
					this.childTable.editBookmark(result.data);
					break;
				case 'delete':
					this.childTable.deleteBookmark(result.data);
					break;
			}

		});
	}

}
