import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthActions } from '@core/auth';
import { Member } from '@domain/models';
import { Store } from '@ngxs/store';

interface LoginForm {
    email: FormControl<string>;
    password: FormControl<string>;
}

interface RegisterForm {
    email: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    password: FormControl<string>;
}

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    public loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
        email: new FormControl<string>('', { nonNullable: true }),
        password: new FormControl<string>('', { nonNullable: true }),
    });

    public registerForm: FormGroup<RegisterForm> = new FormGroup<RegisterForm>({
        email: new FormControl<string>('', { nonNullable: true }),
        firstName: new FormControl<string>('', { nonNullable: true }),
        lastName: new FormControl<string>('', { nonNullable: true }),
        password: new FormControl<string>('', { nonNullable: true }),
    });

    constructor(private _fb: FormBuilder, private _store: Store) { }

    public ngOnInit(): void {
    }

    public onRegister(): void {
        this._store.dispatch(new AuthActions.Register({ ...this.registerForm.value } as Member))
            .subscribe(res => {
                console.log(res);
            });
    }

    public onLogin(): void {
        this._store.dispatch(new AuthActions.Login(this.loginForm.value as any));
    }
}
