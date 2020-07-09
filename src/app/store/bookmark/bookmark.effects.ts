import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';
import { load, loadSuccess, add, edit, remove } from './bookmark.actions';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Injectable()
export class BookmarkEffects {
    
    constructor(
        private actions$: Actions,
        private service: BookmarkService
    ){}
    
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
                this.service.addBookmark(action.bookmark);
            })
        ), { dispatch: false }
    );

    public edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(edit),
            tap(action => {
                this.service.editBookmark(action.bookmark);
            })
        ), { dispatch: false }
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