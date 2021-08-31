import { QuizzesService } from './../../../core/services/quizzes.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Dificuldade } from "src/app/shared/models/types/dificuldade";
import { Quizz } from "src/app/shared/models/types/quizz";
import { Subscription } from 'rxjs';

@Component({
   selector: "app-home",
   templateUrl: "./home.component.html",
   styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
   public usuario: string = "Odézio";
   private subscription: Subscription;
   public niveis: Dificuldade[] = [
      {
         texto: "Fácil",
         codigo: 1,
         cor: "#6363DB",
      },
      {
         texto: "Médio",
         codigo: 2,
         cor: "#03AB4F",
      },
      {
         texto: "Difícil",
         codigo: 3,
         cor: "#E8891C",
      },
      {
         texto: "Expert",
         codigo: 4,
         cor: "#CC3750",
      },
   ];

   public quizzes: Quizz[] = [];
   public quizzesOnDisplay: Quizz[] = [];


   constructor(private quizzesService: QuizzesService) {}

   ngOnInit(): void {
     this.subscription = this.quizzesService.getAll().subscribe(
         response => {
            this.quizzes = response.body;
            this.quizzesOnDisplay = this.quizzes;
         }
      )
   }

   filtrar(codigoNivel: string) {
      this.quizzesOnDisplay = this.quizzes.filter(quizz => quizz.nivel = codigoNivel );
   }

   ngOnDestroy(){
      this.subscription.unsubscribe();
   }
}
