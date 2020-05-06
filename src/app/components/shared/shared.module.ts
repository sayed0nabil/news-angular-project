import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LayoutComponent, NavComponent],
  imports: [
    CommonModule,RouterModule, HttpClientModule
  ],
  providers: [HttpClientModule],

  exports:[RouterModule, LayoutComponent, HttpClientModule]
})
export class SharedModule { }
