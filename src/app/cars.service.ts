import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  private _getUrl = '/api/cars/';

  constructor(private _http: Http) {}

  getCars() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  getCar(id) {
    return new Promise((resolve, reject) => {
      this._http.get(this._getUrl + id)
        .map((response: Response) => response.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
