import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

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
    getCenter(id: number): Observable<ICenter>{
        return this.getCenters()
        .map((centers: ICenter[])=> centers.find(c => c.centerId===id));
    } 
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

}
