import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnectComponent } from './connect/connect.component';
import { ClassComponent }  from './class/class.component';

const classRoutes: Routes = [
  { path: 'connect',  component: ConnectComponent },
  { path: 'class/:id', component: ClassComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(classRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClassMemberRoutingModule { }
