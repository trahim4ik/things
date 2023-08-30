import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, ofActionDispatched } from '@ngxs/store';

import { AuthActions } from '@core/auth';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private actions: Actions, private router: Router) { }

    public ngOnInit(): void {
        this.actions.pipe(ofActionDispatched(AuthActions.Logout)).subscribe(() => {
            this.router.navigate(['/login']);
        });
    }
}
