import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { EnsureModuleLoadedOnceGuard } from '@domain/base';
import { Network } from './network';


@NgModule({
    imports: []
})
export class NetworkModule extends EnsureModuleLoadedOnceGuard {

    static forRoot(): ModuleWithProviders<NetworkModule> {
        return {
            ngModule: NetworkModule,
            providers: [Network],
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: NetworkModule,
    ) {
        super(parentModule);
    }
}
