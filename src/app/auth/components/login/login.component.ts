import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { isSubmittingSelector, validationErrors } from '../../store/selectors'
import { IBackendErrors } from '../../types/backendErrors.interface'
import { ILoginRequest } from '../../types/loginRequest.interface'
import { login, loginSuccessAction } from '../../actions/login.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues() 
  }
  onSubmit() {
    const request: ILoginRequest = {
      user: this.loginForm.value
    }
    this.store.dispatch(login({ request }))
    console.log(this.loginForm.value)
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrors))
  }
}
