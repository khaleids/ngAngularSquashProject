import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ICenter } from './center';

@Injectable()
export class CenterService{
    private _centerUrl ='./api/centers/centers.json';

    constructor ( private _http: HttpClient){}

    getCenters():Observable<ICenter[]>{
        return this._http.get<ICenter[]>(this._centerUrl)
        .do(data => console.log('All'+JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
