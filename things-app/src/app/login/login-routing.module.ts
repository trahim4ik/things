import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages';

const routes: Routes = [
    { path: '', component: LoginPageComponent, data: { title: 'Login' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
    public static pages = [LoginPageComponent];
}
