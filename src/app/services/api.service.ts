import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = environment.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  get(resourcePath: string){
    return this._httpClient.get(this.apiUrl + resourcePath);
  }



}
