import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxesRoutingModule } from './boxes-routing.module';


@NgModule({
    declarations: [
        BoxesRoutingModule.pages,
    ],
    imports: [
        CommonModule,
        BoxesRoutingModule
    ]
})
export class BoxesModule { }
