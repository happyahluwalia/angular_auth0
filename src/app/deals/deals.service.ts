import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DealsService {
  private privateDealsUrl = 'http://localhost:3000/api/deals/private';
  private publicDealsUrl = 'http://localhost:3000/api/deals/public';

  constructor(private http: Http) { }
  
  public getPublicDeals(){
    return this.http.get(this.privateDealsUrl)
          .map(response => response.json())
          .catch((error: Response ) => {
            throw Observable.throw(error.json());
          });
  }

  public getPrivateDeals(){
    return Observable.throw('error');
  }
}
