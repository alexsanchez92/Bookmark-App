import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Bookmark } from '../../models/bookmark.model';
import * as BookmarkActions from './bookmark.actions';

export interface State extends EntityState<Bookmark> {
  nextId: number;
}

export const adapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();

export const initialState: State = adapter.getInitialState({
  nextId: 1
});

const _bookmarkReducer = createReducer(
  initialState,

  on(BookmarkActions.load, (state) => state),
  on(BookmarkActions.loadSuccess, (state, { payload }) => {
    return adapter.setAll(payload, {
      ...state,
      nextId: payload.length ? payload[payload.length - 1].id + 1 : 1
    });
  }),

  on(BookmarkActions.add, (state, bookmark) => {
    return adapter.addOne(bookmark, {
      ...state,
      nextId: state.nextId + 1
    });
  }),

  on(BookmarkActions.edit, (state, bookmark) => {
    return adapter.upsertOne(bookmark, state);
  }),

  on(BookmarkActions.remove, (state, bookmark) => {
    return adapter.removeOne(bookmark.id, state);
  })
);

export function bookmarkReducer(state: State | undefined, action: Action) {
  return _bookmarkReducer(state, action);
}
