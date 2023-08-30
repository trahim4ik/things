import { Component, OnInit } from '@angular/core';
import { Network } from '@core/network';

@Component({
    selector: 'boxes-page',
    templateUrl: './boxes-page.component.html',
    styleUrls: ['./boxes-page.component.scss']
})
export class BoxesPageComponent implements OnInit {

    public boxes: any[] = [];

    constructor(private network: Network){}
    
    public ngOnInit(): void {
        this.network.boxesApi.getBooks()
            .subscribe(boxes => {
                this.boxes = boxes;
            });
    }
}
