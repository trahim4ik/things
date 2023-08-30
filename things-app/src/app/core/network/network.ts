import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BoxesApi } from './apis/boxes.api';
import { MembersApi } from './apis/members.api';


@Injectable()
export class Network {

    public boxesApi: BoxesApi;

    public membersApi: MembersApi;

    public constructor(http: HttpClient) {
        this.boxesApi = new BoxesApi(http);
        this.membersApi = new MembersApi(http);
    }
}