import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages';

const routes: Routes = [
    {
        path: '', component: MainPageComponent, data: { title: 'Admin' },
        children: [
            { path: 'boxes', loadChildren: () => import('../boxes/boxes.module').then(m => m.BoxesModule) },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
    public static pages = [MainPageComponent];
}
