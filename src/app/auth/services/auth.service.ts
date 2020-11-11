import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface'
import { environment } from 'src/environments/environment'
import { IAuthResponse } from '../types/authResponse.interface'
import { IRegisterRequest } from '../types/RegisterRequest.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(userData: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http.post<IAuthResponse>(url, userData).pipe(
      map((response: IAuthResponse) => {
        return response.user
      })
    )
  }
}
