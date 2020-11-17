import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface'
import { environment } from 'src/environments/environment'
import { IAuthResponse } from '../types/authResponse.interface'
import { ILoginRequest } from '../types/loginRequest.interface'
import { IRegisterRequest } from '../types/RegisterRequest.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user
  }

  register(userData: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http.post<IAuthResponse>(url, userData).pipe(
      map(this.getUser)
    )
  }

  login(loginData: ILoginRequest): Observable<ICurrentUser>{
    const url = environment.apiUrl + '/users/login'
    return this.http.post<IAuthResponse>(url, loginData).pipe(
      map(this.getUser)
    )
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user'
    return this.http.get<IAuthResponse>(url).pipe(
      map(this.getUser)
    )
  }
}
