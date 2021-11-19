import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { Bookmark } from 'src/app/models/bookmark.model';
import * as BookmarkActions from 'src/app/store/bookmark/bookmark.actions';
import { State } from 'src/app/store/bookmark/bookmark.reducer';
import * as BookmarkSelector from 'src/app/store/bookmark/bookmark.selector';
import { DialogActions } from '../../components/bookmark-dialog/action.types';
import { BookmarkDialogComponent } from '../../components/bookmark-dialog/bookmark-dialog.component';
import { BookmarkTableNgrxComponent } from '../../components/bookmark-table-ngrx/bookmark-table-ngrx.component';

@Component({
  selector: 'app-with-ngrx',
  templateUrl: './with-ngrx.component.html'
})
export class WithNgrxComponent implements OnInit {
  @ViewChild(BookmarkTableNgrxComponent) childTableNgrx;

  model$: Observable<{ nextId: number }>;

  nextId$ = this.store.pipe(select(BookmarkSelector.getNextId));
  dialogAction$: Subject<{
    action: DialogActions;
    bookmark: Bookmark;
    nextId: number;
  }> = new Subject();

  dialogActions = DialogActions;

  constructor(
    public dialog: MatDialog,
    private store: Store<{ bookmarks: State }>
  ) {}

  ngOnInit() {
    this.store.dispatch(BookmarkActions.load());

    this.model$ = combineLatest([
      this.nextId$,
      this.dialogAction$.pipe(
        switchMap(({ action, bookmark, nextId }) =>
          this.openDialog(action, bookmark, nextId)
        ),
        startWith(null)
      )
    ]).pipe(map(([nextId, _]) => ({ nextId })));
  }

  openDialog(action: DialogActions, bookmark: Bookmark = null, nextId: number) {
    if (action === DialogActions.ADD) {
      bookmark = {
        ...bookmark,
        id: nextId
      };
    }

    return this.dialog
      .open(BookmarkDialogComponent, {
        data: { bookmark: bookmark, action: action }
      })
      .afterClosed()
      .pipe(
        tap((result) => {
          //Prevent ESC key
          if (result) {
            switch (result.action) {
              case DialogActions.ADD:
                this.store.dispatch(BookmarkActions.add(result.data));
                break;
              case DialogActions.EDIT:
                this.store.dispatch(BookmarkActions.edit(result.data));
                break;
              case DialogActions.DELETE:
                this.store.dispatch(BookmarkActions.remove(result.data));
                break;
            }
          }
        })
      );
  }
}
