import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch } from '@ngxs/store/operators';
import { tap } from 'rxjs';

import { Network } from '@core/network';
import { Member } from '@domain/models';

import { AuthStateModel } from './auth-state.model';
import { AuthActions } from './actions';


@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token: null,
        username: null,
        members: [],
    }
})
@Injectable()
export class AuthState {

    @Selector()
    static token(state: AuthStateModel): string | null {
        return state.token;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
        return !!state.token;
    }

    @Selector()
    static members(state: AuthStateModel): Member[] {
        return state.members;
    }

    constructor(private _network: Network) { }

    @Action(AuthActions.Login)
    onLogin(ctx: StateContext<AuthStateModel>, action: AuthActions.Login) {
        return this._network.membersApi.login(action.payload).pipe(
            tap(({ token }) => {
                ctx.patchState({ token, username: action.payload.email });
            })
        );
    }

    @Action(AuthActions.Logout)
    onLogout(ctx: StateContext<AuthStateModel>) {
        return this._network.membersApi.logout().pipe(
            tap(() => {
                ctx.patchState({
                    token: null,
                    username: null
                });
            })
        );
    }

    @Action(AuthActions.Register)
    onRegister(ctx: StateContext<AuthStateModel>, { payload }: AuthActions.Register) {
        return this._network.membersApi.register(payload).pipe(
            tap(() => {
                ctx.setState(
                    patch<AuthStateModel>({
                        members: append<Member>([payload])
                    })
                );
            })
        );
    }
}