import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';

import { Member } from '@domain/models';
import { BaseApi } from './base.api';


export class MembersApi extends BaseApi {

    private get _members(): Member[] {
        return (JSON.parse(<string>localStorage.getItem('members')) || []) as Member[];
    }

    private set _members(members: Member[]) {
        localStorage.setItem('members', JSON.stringify(members));
    }

    constructor(http: HttpClient) {
        super(http);
    }

    public getMembers(): Observable<Member[]> {
        return of(this._members);
    }

    public register(member: Member): Observable<Member> {

        if (this._members.find(x => x.email === member.email)) {
            return throwError('sddsds');
        }

        this._members = [...this._members, member];

        return of(member);
    }

    public login(reg: any): Observable<{ token: string }> {

        return this.httpPost(`login`, reg, (x: any) => ({ ...x }));
    }

    public logout(): Observable<boolean> {
        return of(true);
    }
}