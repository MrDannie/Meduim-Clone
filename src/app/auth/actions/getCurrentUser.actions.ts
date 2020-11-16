import { createAction, props } from '@ngrx/store';
import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface';
import { ActionTypes } from '../store/actionTypes';



export const getCurrentUserAction = createAction(
	ActionTypes.GET_CURRENT_USER
	)

export const getCurrentUserSuccessAction = createAction(
	ActionTypes.GET_CURRENT_USER_SUCCESS,
	props<{currentUser: ICurrentUser}>()
)

export const getCurrentUserFailureAction = createAction(
	ActionTypes.GET_CURRENT_USER_FAILURE
)