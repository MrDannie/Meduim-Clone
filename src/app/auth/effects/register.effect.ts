import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface'

import {
  register,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import { AuthService } from '../services/auth.service'

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )
}
