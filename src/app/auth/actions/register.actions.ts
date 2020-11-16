import { createAction, props } from '@ngrx/store'
import { IRegisterRequest } from 'src/app/auth/types/RegisterRequest.interface'
import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface'
import { ActionTypes } from '../store/actionTypes'
import { IBackendErrors } from '../types/backendErrors.interface'

export const register = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegisterRequest  }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)
  
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>()
)
