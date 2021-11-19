import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as BookmarkReducer from './bookmark.reducer';

const { selectEntities, selectAll } = BookmarkReducer.adapter.getSelectors();

export const selectBookmarkState =
  createFeatureSelector<BookmarkReducer.State>('bookmarks');
export const selectBookmarkEntities = createSelector(
  selectBookmarkState,
  selectEntities
);

export const selectAllBookmarks = createSelector(
  selectBookmarkState,
  selectAll
);

export const getNextId = createSelector(
  selectBookmarkState,
  (state: BookmarkReducer.State) => state.nextId
);
