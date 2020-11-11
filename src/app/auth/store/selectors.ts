import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/AppState.interface'
import { IAuthState } from 'src/app/auth/types/AuthState.interface'

export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>(
  'auth'
)

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
)
