import { Action, createReducer, on } from '@ngrx/store';

import { load, loadSuccess, add, edit, editSuccess, remove } from './bookmark.actions';
import { Bookmarks } from './bookmark.model';

export interface BookmarkState {
    bookmarks: Bookmarks;
}
  
export const initialState: BookmarkState = {
    bookmarks: { list: [], id: 0 }
};

const _bookmarkReducer = createReducer(
    initialState,
    on(load, state => state),

    on( loadSuccess, (state, { payload }) => ({
            ...state,
            bookmarks: { ...state.bookmarks, list: payload, id: payload.length+1 },
        })
    ),
    
    on(add, (state, payload) => {
            let id = state.bookmarks.id;
            const bookmark = Object.assign({}, payload.data, {id: id})
            return {
                ...state,
                bookmarks: {
                    ...state.bookmarks,
                    list: [...state.bookmarks.list, bookmark],
                    id: state.bookmarks.id+1
                }
            };
        }
    ),
    
    on(edit, state => state),
    on(editSuccess, (state, { payload }) => ({
        ...state,
        bookmarks: { ...state.bookmarks, list: payload},
    })
),
        
    on(remove, (state, bookmark) => ({
        ...state,
        bookmarks: {
            ...state.bookmarks,
            list: state.bookmarks.list.filter(item => item.id !== bookmark.id)
        }
    })),

);

export function bookmarkReducer( state: BookmarkState | undefined, action: Action) {
    return _bookmarkReducer(state, action);
}