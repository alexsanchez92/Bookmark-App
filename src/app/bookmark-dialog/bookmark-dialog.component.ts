import { Component, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';

import { Bookmark } from 'src/store/bookmark/bookmark.model';

@Component({
  selector: 'bookmark-dialog.component',
  templateUrl: './bookmark-dialog.component.html',
  styleUrls: ['./bookmark-dialog.component.css']
})

export class BookmarkDialogComponent {

	action:string;
	bookmark:Bookmark;
	local_data:any;

	constructor(
		public dialogRef: MatDialogRef<BookmarkDialogComponent>,
		//@Optional() is used to prevent error if no data is passed
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Bookmark) {

		console.log(data);
		this.local_data = {...data};
		this.action = this.local_data.action;
		this.bookmark = Object.assign({},this.local_data.bookmark);
	}

	onSubmit(bookmark: Bookmark, action: string){
		this.dialogRef.close({action: action, data: bookmark});
	}
	
	closeDialog(){
		this.dialogRef.close({action:'cancel'});
	}

}