import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bookmark } from 'src/app/models/bookmark.model';

@Component({
  selector: 'bookmark-dialog.component',
  templateUrl: './bookmark-dialog.component.html'
})

export class BookmarkDialogComponent implements OnInit {

	public action:string;
	public bookmark:Bookmark;
	public local_data:any;

	public bookmarkForm: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<BookmarkDialogComponent>,
		//@Optional() is used to prevent error if no data is passed
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Bookmark) {

		this.local_data = {...data};
		this.action = this.local_data?.action;
		this.bookmark = Object.assign({},this.local_data.bookmark);
	}

	ngOnInit() {
		this.bookmarkForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			url: new FormControl('', [Validators.required]),
			group: new FormControl('', [Validators.required])
		});
	}
  
	public hasError = (controlName: string, errorName: string) =>{
		return this.bookmarkForm.controls[controlName].hasError(errorName);
	  }

	public submitForm = (bookmark: Bookmark, action: string) => {
		this.actionBookmark(bookmark, action);
	}

	private actionBookmark(bookmark: Bookmark, action: string){
		this.dialogRef.close({action: action, data: bookmark});
	}
	
	public closeDialog(){
		this.dialogRef.close({action:'cancel'});
	}

}