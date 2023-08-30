import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { IS_TOKEN_NEEDED } from './auth-header.token';
import { AuthState } from '../store/auth.state';


@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {

    constructor(private _store: Store) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.context.get(IS_TOKEN_NEEDED) === true) {
            req = this.addAuthorizationHeader(req);
        }

        return next.handle(req);
    }

    private addAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
        const token = this._store.selectSnapshot(AuthState.token);

        if (token) {
            return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }

        return req;
    }
}