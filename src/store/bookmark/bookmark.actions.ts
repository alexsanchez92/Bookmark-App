import { createAction, props } from '@ngrx/store';
import { Bookmark } from './bookmark.model';

export const load = createAction(
	'[Bookmark] Load'
);

export const loadSuccess = createAction(
	'[Bookmark] Load success',
	props<{payload: Bookmark[]}>()
);

export const add = createAction(
	'[Bookmark] Add',
	props<{ data: Bookmark }>()
);

export const edit = createAction(
	'[Bookmark] Edit',
	props<Bookmark>()
);
export const editSuccess = createAction(
	'[Bookmark] Load success',
	props<{payload: Bookmark[]}>()
);

export const remove = createAction(
  	'[Bookmark] Remove',
	props<Bookmark>()
);
