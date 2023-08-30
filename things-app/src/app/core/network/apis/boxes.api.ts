import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseApi } from './base.api';


export class BoxesApi extends BaseApi {

    constructor(http: HttpClient) {
        super(http);
    }

    public getBooks(): Observable<any[]> {
        return this.httpGet(`boxes`, (x: any) => ({ ...x }));
    }
}