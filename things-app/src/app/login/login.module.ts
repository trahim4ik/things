import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginMaterialModule } from './login-material.module';


@NgModule({
    declarations: [
        LoginRoutingModule.pages,
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        LoginMaterialModule,
        ReactiveFormsModule,
    ]
})
export class LoginModule { }
