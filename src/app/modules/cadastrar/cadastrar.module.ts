import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastrarComponent } from './cadastrar.component';
import { FormsModule } from '@angular/forms';

export const routes = [
   {
      path: '',
      component: CadastrarComponent
   }
]

@NgModule({
   imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
   exports: [],
   declarations: [CadastrarComponent],
   providers: [],
})
export class CadastrarModule { }
