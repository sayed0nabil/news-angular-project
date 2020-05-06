import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';


const routes: Routes = [
  {
    path: 'news', 
    component:LayoutComponent,
    loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule)
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
