import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSwitchComponent } from './components';
import { MainRoutingModule } from './main-routing.module';
import { MainMaterialModule } from './main-material.module';


@NgModule({
    declarations: [
        MainRoutingModule.pages,
        ThemeSwitchComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MainMaterialModule,
    ]
})
export class MainModule { }
