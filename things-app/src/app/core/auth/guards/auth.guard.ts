import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthState } from '../store/auth.state';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store) { }

    public canActivate() {
        return this.store.selectSnapshot(AuthState.isAuthenticated);
    }
}