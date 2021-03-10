import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { URL }  from '../constants/contants';

//Method to make a service call to the URL - http://api.icndb.com/jokes/random/10'
@Injectable()
export class AppService {
    constructor(private http: Http) {

    }
    //Servce call to call the API
    getChuckJokes(): Observable<any> {
        //Url is fetched from constant file
        const url = URL;
        return this.http.get(url);
    }
}