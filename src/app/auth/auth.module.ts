import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './components/register/register.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducer } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './effects/register.effect'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backend-error-messages.module'
import { LoginEffect } from './effects/login.effects';
import { LoginComponent } from './components/login/login.component'
import { GetCurrentUserEffect } from './effects/getCurrentUser.effect'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    FormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    RouterModule.forChild([
      // {
      //   path: '',
      //   redirectTo: 'register',
      //   pathMatch: 'full',
      // },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
  ],
})
export class AuthModule {}
