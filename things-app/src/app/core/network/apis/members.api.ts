import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { BaseApi } from './base.api';
import { Member } from '@domain/models';


export class MembersApi extends BaseApi {

    constructor(http: HttpClient) {
        super(http);
    }

    public getMembers(): Observable<Member[]> {
        return this.httpGet(`members`, (x: any) => ({ ...x }));
    }

    public register(member: Member): Observable<any[]> {
        return this.httpPost(`register`, member, (x: any) => ({ ...x }));
    }

    public login(reg: any): Observable<{ token: string }> {
        return this.httpPost(`login`, reg, (x: any) => ({ ...x }));
    }

    public logout(): Observable<boolean> {
        return of(true);
    }
}