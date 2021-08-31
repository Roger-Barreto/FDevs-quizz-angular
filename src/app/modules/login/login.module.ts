import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

export const routes = [
   {
      path: '',
      component: LoginComponent
   }
]

@NgModule({
   imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
   exports: [],
   declarations: [LoginComponent],
   providers: [],
})
export class LoginModule { }
