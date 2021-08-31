import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuizzComponent } from "./quizz/quizz.component";

export const routes = [
   {
      path:'',
      component: QuizzComponent,
   }
]

@NgModule({
   declarations: [],
   imports: [
     CommonModule,
     RouterModule.forChild(routes),
   ],
 })
export class QuizzRoutingModule {}