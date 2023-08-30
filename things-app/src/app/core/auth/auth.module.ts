import { APP_INITIALIZER, Injector, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from '@domain/base';
import { AuthHeadersInterceptor } from './interceptors';
import { AuthGuard } from './guards/auth.guard';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from './store/auth.state';

export function startRedirection(injector: Injector): () => Promise<any> {
    return () => {
        return new Promise<any>((resolve, reject) => {
            const router = injector.get(Router);
            const store = injector.get(Store);

            if (store.selectSnapshot(AuthState.isAuthenticated)) {
                router.navigate(['admin']);
            } else {
                router.navigate(['login']);
            }

            resolve(true);
        });
    };
}


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class AuthModule extends EnsureModuleLoadedOnceGuard {
    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
                AuthGuard,
                { provide: APP_INITIALIZER, useFactory: startRedirection, deps: [Injector], multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true },
            ],
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: AuthModule,
    ) {
        super(parentModule);
    }
}
