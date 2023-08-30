import { Member } from "@domain/models";

export namespace AuthActions {

    export class Login {
        static readonly type = '[Auth] Login';
        constructor(public payload: { email: string; password: string }) { }
    }

    export class Register {
        static readonly type = '[Auth] Register a new member';
        constructor(public payload: Member) { }
    }

    export class Logout {
        static readonly type = '[Auth] Logout';
    }
}
