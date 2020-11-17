import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from './persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	
	constructor(private persistenceService: PersistenceService) { }
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		const Token = this.persistenceService.get('AuthToken')
		request = request.clone({
			setHeaders: {
				Authorization: Token ? `Token ${Token}` : ''
			}
		})

		return next.handle(request);
	}

}