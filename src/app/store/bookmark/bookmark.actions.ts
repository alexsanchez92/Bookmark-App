import { createAction, props } from '@ngrx/store';
import { Bookmark } from '../../models/bookmark.model';

export const load = createAction(
	'[Bookmark] Load'
);

export const loadSuccess = createAction(
	'[Bookmark] Load success',
	props<{ payload: Bookmark[] }>()
);

export const add = createAction(
	'[Bookmark] Add',
	props<{ bookmark: Bookmark }>()
);

export const edit = createAction(
	'[Bookmark] Edit',
	props<{ bookmark: Bookmark }>()
);

export const remove = createAction(
  	'[Bookmark] Remove',
	props<{ bookmark: Bookmark }>()
);
