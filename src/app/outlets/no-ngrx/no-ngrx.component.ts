import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogActions } from '../../components/bookmark-dialog/action.types';
import { BookmarkDialogComponent } from '../../components/bookmark-dialog/bookmark-dialog.component';
import { BookmarkTableComponent } from '../../components/bookmark-table/bookmark-table.component';

@Component({
  selector: 'app-no-ngrx',
  templateUrl: './no-ngrx.component.html'
})
export class NoNgrxComponent {
  dialogActions = DialogActions;

  constructor(public dialog: MatDialog) {}

  @ViewChild(BookmarkTableComponent) childTable;

  openDialog(action, bookmark) {
    const dialogRef = this.dialog.open(BookmarkDialogComponent, {
      data: { bookmark: bookmark, action: action }
    });

    dialogRef.afterClosed().subscribe((result) => {
      switch (result.action) {
        case DialogActions.ADD:
          this.childTable.addBookmark(result.data);
          break;
        case DialogActions.EDIT:
          this.childTable.editBookmark(result.data);
          break;
        case DialogActions.DELETE:
          this.childTable.deleteBookmark(result.data);
          break;
      }
    });
  }
}
