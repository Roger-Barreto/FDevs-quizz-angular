import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from './home/home.component';
import { IndicadorConclusaoComponent } from './indicador-conclusao/indicador-conclusao.component';
import { BotaoNivelComponent } from './botao-nivel/botao-nivel.component';
import { CardQuizzComponent } from './card-quizz/card-quizz.component';

@NgModule({
   declarations: [
    HomeComponent,
    IndicadorConclusaoComponent,
    BotaoNivelComponent,
    CardQuizzComponent,
  ],
   imports: [
     CommonModule,
     HomeRoutingModule
   ],
 })
export class HomeModule {}