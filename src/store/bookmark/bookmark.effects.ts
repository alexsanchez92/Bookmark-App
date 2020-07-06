import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Actions, createEffect, ofType, act, Effect } from '@ngrx/effects';
import { Observable, of, throwError, EMPTY } from 'rxjs';
import { tap, concatMap, withLatestFrom, map, mergeMap, switchMap } from 'rxjs/operators';

import { BookmarkState } from './bookmark.reducer';
import { load, loadSuccess, add, edit, editSuccess, remove } from './bookmark.actions';
import { BookmarkService } from './bookmark.service';
import { ELEMENT_DATA } from 'src/data/bookmark';
import * as BookmarkSelectors from './bookmark.selector';

@Injectable()
export class BookmarkEffects {
    
    private storeKey = 'bookmarkList';
    storeBookmarks: BookmarkState;
   
    constructor(
        private actions$: Actions,
        private store: Store<{ bookmarks: BookmarkState }>,
        private service: BookmarkService
    ){
        store.select(state => state.bookmarks).subscribe((data: BookmarkState) => this.storeBookmarks = data );
    }
    
    load$ = createEffect(() =>
        this.actions$.pipe(
            ofType(load),
            concatMap(() => {
                console.log("LOAD EFFECT");
                
                let bookmarkList = JSON.parse( window.localStorage.getItem(this.storeKey) );
                
                if (!bookmarkList) {
                    bookmarkList = ELEMENT_DATA;
                    window.localStorage.setItem( this.storeKey, JSON.stringify(bookmarkList) );
                }

                return of(
                    loadSuccess({ payload: bookmarkList })
                );
            })
        )
    );

    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(add),
            tap(action => {
                console.log("ADD EFFECT" + JSON.stringify(action.data));

                //let id = this.service.getNextId();
                const bookmarkInsert = Object.assign({}, action.data, {id: this.storeBookmarks.bookmarks.id})
                let bookmarkList = JSON.parse( window.localStorage.getItem(this.storeKey) );
                bookmarkList.push(bookmarkInsert);
                window.localStorage.setItem( this.storeKey, JSON.stringify(bookmarkList) );
            })
        ), { dispatch: false }
    );

    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(edit),
            concatMap(action => {
                console.log("EDIT EFFECT" + JSON.stringify(action));

                let bookmarkList = JSON.parse( window.localStorage.getItem(this.storeKey) );
                bookmarkList = bookmarkList.filter((value,key)=>{
                    if(value.id == action.id){
                        value.name = action.name;
                        value.url = action.url;
                        value.group = action.group;
                    }
                    return true;
                })
                window.localStorage.setItem( this.storeKey, JSON.stringify(bookmarkList) );

                return of(
                    editSuccess({ payload: bookmarkList })
                );
            })

        )
    );

    remove$ = createEffect(() =>
        this.actions$.pipe(
            ofType(remove),
            tap(bookmark => {
                console.log("DELETE EFFECT"+JSON.stringify(bookmark))
                let bookmarkList = JSON.parse( window.localStorage.getItem(this.storeKey) );
                bookmarkList = bookmarkList.filter(item => item.id !== bookmark.id);
                window.localStorage.setItem( this.storeKey, JSON.stringify(bookmarkList) );
            })
        ), { dispatch: false }
    );
    
};