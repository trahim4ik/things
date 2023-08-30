import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxesPageComponent } from './pages';

const routes: Routes = [
    { path: '', component: BoxesPageComponent, data: { title: 'Books' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoxesRoutingModule {
    public static pages = [BoxesPageComponent];
}
