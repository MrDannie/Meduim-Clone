import { createAction, props } from '@ngrx/store';
import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface';
import { ActionTypes } from '../store/actionTypes';
import { IBackendErrors } from '../types/backendErrors.interface';
import { ILoginRequest } from '../types/loginRequest.interface';


export const login = createAction(
	ActionTypes.LOGIN,
	props<{request: ILoginRequest}>()
)

export const loginSuccessAction = createAction(
	ActionTypes.LOGIN_SUCCESS,
	props<{currentUser: ICurrentUser}>()
)

export const loginFailureAction = createAction(
	ActionTypes.LOGIN_FAILURE,
	props<{errors: IBackendErrors}>()
)