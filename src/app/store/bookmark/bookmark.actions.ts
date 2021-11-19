import { createAction, props } from '@ngrx/store';
import { Bookmark } from '../../models/bookmark.model';

const bookmarkText = '[Bookmark]';

export const load = createAction(`${bookmarkText}  Load`);

export const loadSuccess = createAction(
  `${bookmarkText}  Load success`,
  props<{ payload: Bookmark[] }>()
);

export const add = createAction(`${bookmarkText}  Add`, props<Bookmark>());

export const edit = createAction(`${bookmarkText}  Edit`, props<Bookmark>());

export const remove = createAction(
  `${bookmarkText}  Remove`,
  props<Bookmark>()
);
