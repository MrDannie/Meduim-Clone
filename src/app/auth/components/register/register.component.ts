import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface'
import { AuthService } from '../../services/auth.service'
import { register } from '../../actions/register.action'
import { isSubmittingSelector } from '../../store/selectors'
import { IRegisterRequest } from '../../types/RegisterRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  SignInForm: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }
  onSubmit() {
    const request: IRegisterRequest = {
      user: this.SignInForm.value,
    }
    this.store.dispatch(register({ request }))
    console.log(this.SignInForm.value)
  }

  initializeForm() {
    this.SignInForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }
}
