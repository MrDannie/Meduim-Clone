import { Action, createReducer, on } from '@ngrx/store'
import { flatMap } from 'rxjs/operators'
import { IAuthState } from 'src/app/auth/types/AuthState.interface'
import { register, registerFailureAction, registerSuccessAction } from '../actions/register.action'

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    register,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null, //TODO:
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(registerFailureAction, (state, action): IAuthState => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: false,
    validationErrors: action.errors
  }))
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
