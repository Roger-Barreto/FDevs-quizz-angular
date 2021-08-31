import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardAlternativaComponent } from "./card-alternativa/card-alternativa.component";
import { QuizzRoutingModule } from "./quizz.routing";
import { QuizzComponent } from "./quizz/quizz.component";
import { ModalRespostaComponent } from './quizz/modal-resposta/modal-resposta.component';

@NgModule({
   declarations: [
    CardAlternativaComponent,
    QuizzComponent,
    ModalRespostaComponent,
  ],
   imports: [
     CommonModule,
     QuizzRoutingModule,
     RouterModule
   ],
 })
export class QuizzModule {}