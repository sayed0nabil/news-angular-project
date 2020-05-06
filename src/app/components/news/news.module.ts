import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DepartmentComponent } from './department/department.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'dept/:id', component: DepartmentComponent},
  {path:'',component:HomeComponent},

]

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
