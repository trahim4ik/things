import { HttpClient, HttpContext } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { mapType, TypeConstructor } from '@domain/tools';
import { environment } from '@environments/environment';
import { IS_TOKEN_NEEDED } from '@core/auth/interceptors/auth-header.token';


export abstract class BaseApi {

    private _tokenizedContext: HttpContext = new HttpContext().set(IS_TOKEN_NEEDED, true);
    private _apiUrl: string;

    constructor(protected http: HttpClient) {
        this._apiUrl = environment.apiUrl;
    }

    protected httpGet<T>(url: string, ctor: TypeConstructor<T>): Observable<any> {
        return this.http
            .get(`${this._apiUrl}/${url}`, { context: this._tokenizedContext })
            .pipe(map((res: any) => mapType<T>(res, ctor)));
    }

    protected httpPost<T>(url: string, model: any, ctor: TypeConstructor<T>): Observable<any> {
        return this.http
            .post(`${this._apiUrl}/${url}`, model, { context: this._tokenizedContext })
            .pipe(
                map((res: any) => mapType<T>(res, ctor))
            );
    }

    protected httpPut<T>(url: string, model: any, ctor: TypeConstructor<T>): Observable<any> {
        return this.http
            .put(`${this._apiUrl}/${url}`, model, { context: this._tokenizedContext })
            .pipe(
                map((res: any) => mapType<T>(res, ctor))
            );
    }

    protected httpDelete<T>(url: string, ctor: TypeConstructor<T>): Observable<any> {
        return this.http
            .delete(`${this._apiUrl}/api/${url}`, { context: this._tokenizedContext })
            .pipe(
                map((res: any) => mapType<T>(res, ctor))
            );
    }
}