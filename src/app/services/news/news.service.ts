import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _apiService: ApiService) { }

  getDepartmentsMenu(){
    return this._apiService.get("/Department/GetMenu");
  }

}
