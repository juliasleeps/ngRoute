import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2/test2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Test2Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Test2Component],
  exports: [Test2Component]
})
export class AnotherLazyModule { }
