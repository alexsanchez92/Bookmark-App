import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookmarkState } from './bookmark.reducer';

const bookmarkFeatureKey = 'bookmarks';

export const getBookmarkState = createFeatureSelector<BookmarkState>(
    bookmarkFeatureKey
);

export const getBookmarksList = createSelector(
	getBookmarkState,
	(state: BookmarkState) => state.bookmarks.list
);

export const getNextId = createSelector(
	getBookmarkState,
	(state: BookmarkState) => state.bookmarks.id
);