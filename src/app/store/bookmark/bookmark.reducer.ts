import { Action, createReducer, on } from '@ngrx/store';
import { load, loadSuccess, add, edit, editSuccess, remove } from './bookmark.actions';
import { Bookmarks } from '../../models/bookmark.model';

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
            bookmarks: { ...state.bookmarks, list: payload, id: payload[payload.length-1].id },
        })
    ),
    
    on(add, (state, data) => {
            const bookmark = Object.assign({}, data.bookmark, {id: state.bookmarks.id+1})
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
        
    on(remove, (state, data) => ({
        ...state,
        bookmarks: {
            ...state.bookmarks,
            list: state.bookmarks.list.filter(item => item.id !== data.bookmark.id)
        }
    })),

);

export function bookmarkReducer( state: BookmarkState | undefined, action: Action) {
    return _bookmarkReducer(state, action);
}