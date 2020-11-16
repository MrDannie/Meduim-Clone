import { Action, createReducer, on } from '@ngrx/store'
import { IAuthState } from 'src/app/auth/types/AuthState.interface'
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/getCurrentUser.actions'
import { login, loginFailureAction, loginSuccessAction } from '../actions/login.actions'
import { register, registerFailureAction, registerSuccessAction } from '../actions/register.actions'

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false
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
  on(
    registerFailureAction, (state, action): IAuthState => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })
  ),
  on(
    login,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null

    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
      
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  )
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
