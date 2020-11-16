import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { PersistenceService } from 'src/app/shared/services/persistence.service'
import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface'

import {
  login,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.actions'
import { AuthService } from '../services/auth.service'

@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions, private authService: AuthService, private persistenceService: PersistenceService, private router: Router) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('AuthToken', currentUser.token)
            return loginSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  		redirectAfterLogin$  = createEffect(()=> 
        this.actions$.pipe(
          ofType(loginSuccessAction),
          tap(
            () => {
              this.router.navigateByUrl('/')
            }
          )
        ), {dispatch: false}
      )

}
