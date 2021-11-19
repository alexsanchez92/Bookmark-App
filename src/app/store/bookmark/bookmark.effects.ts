import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { add, edit, load, loadSuccess, remove } from './bookmark.actions';

@Injectable()
export class BookmarkEffects {
  constructor(private actions$: Actions, private service: BookmarkService) {}

  public load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      switchMap(() => of(loadSuccess({ payload: this.service.getBookmarks() })))
    )
  );

  public add$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(add),
        tap((bookmark) => {
          this.service.addBookmark(bookmark);
        })
      ),
    { dispatch: false }
  );

  public edit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(edit),
        tap((bookmark) => {
          this.service.editBookmark(bookmark);
        })
      ),
    { dispatch: false }
  );

  public remove$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(remove),
        tap((bookmark) => {
          this.service.deleteBookmark(bookmark.id);
        })
      ),
    { dispatch: false }
  );
}
