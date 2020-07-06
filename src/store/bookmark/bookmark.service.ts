import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmark, Bookmarks } from './bookmark.model';
import * as BookmarkSelectors from './bookmark.selector';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  
  constructor(private store: Store<Bookmarks>) {}
  
  public getBookmarksList(): Observable<Bookmark[]> {
    return this.store.select(BookmarkSelectors.getBookmarksList);
  }

  public getNextId(): Observable<number> {
    return this.store.select(BookmarkSelectors.getNextId);
  }
  
}