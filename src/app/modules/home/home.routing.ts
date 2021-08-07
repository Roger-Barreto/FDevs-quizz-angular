import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

export const routes = [
   {
      path:'',
      component: HomeComponent,
   }
]

@NgModule({
   declarations: [],
   imports: [
     CommonModule,
     RouterModule.forChild(routes),
   ],
 })
export class HomeRoutingModule {}