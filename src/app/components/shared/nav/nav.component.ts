import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { ResposneViewModel } from 'src/app/models/response.model';
import { DepartmentViewModel } from 'src/app/models/department/department.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  departments: DepartmentViewModel[] = [];
  constructor(private _newsService: NewsService) {
    
   }

  ngOnInit(): void {
    this._newsService.getDepartmentsMenu().subscribe(res => {
      let response: ResposneViewModel = new ResposneViewModel();
      response = res as ResposneViewModel;
      if(response.Success){
        this.departments = response.Data;
      }else{
        alert(response.Message);
      }
    }, err => {
      console.log(err);
    })
  }

  getMainMenuDepartments(){
    return this.departments.filter(dept => dept.ShowInMainMenu);
  }

}
