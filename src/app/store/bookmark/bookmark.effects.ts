import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';

import { BookmarkState } from './bookmark.reducer';
import { load, loadSuccess, add, edit, editSuccess, remove } from './bookmark.actions';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Injectable()
export class BookmarkEffects {
    
    private storeBookmarks: BookmarkState;
   
    constructor(
        private actions$: Actions,
        store: Store<{ bookmarks: BookmarkState }>,
        private service: BookmarkService
    ){
        store.select(state => state.bookmarks).subscribe((data: BookmarkState) => this.storeBookmarks = data );
    }
    
    public load$ = createEffect(() =>
        this.actions$.pipe(
            ofType(load),
            concatMap(() => {
                return of(
                    loadSuccess({ payload: this.service.getBookmarks() })
                );
            })
        )
    );

    public add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(add),
            tap(action => {
                this.service.addBookmark(action.bookmark, this.storeBookmarks.bookmarks.id);
            })
        ), { dispatch: false }
    );

    public edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(edit),
            concatMap(action => {
                this.service.editBookmark(action.bookmark);
                return of(
                    editSuccess({ payload: this.service.getBookmarks() })
                );
            })

        )
    );

    public remove$ = createEffect(() =>
        this.actions$.pipe(
            ofType(remove),
            tap(action => {
                this.service.deleteBookmark(action.bookmark.id);
            })
        ), { dispatch: false }
    );
    
};