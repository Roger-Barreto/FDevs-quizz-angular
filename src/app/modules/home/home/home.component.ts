import { Component, OnInit } from "@angular/core";
import { Dificuldade } from "src/app/shared/models/types/dificuldade";
import { Quizz } from "src/app/shared/models/types/quizz";

@Component({
   selector: "app-home",
   templateUrl: "./home.component.html",
   styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
   public usuario: string = "Odézio";
   public niveis: Dificuldade[] = [
      {
         texto: "Fácil",
         codigo: "FACIL",
         cor: "#6363DB",
      },
      {
         texto: "Médio",
         codigo: "MEDIO",
         cor: "#03AB4F",
      },
      {
         texto: "Difícil",
         codigo: "DIFICIL",
         cor: "#E8891C",
      },
      {
         texto: "Expert",
         codigo: "DIFICIL",
         cor: "#CC3750",
      },
   ];

   public quizzes: Quizz[] = [
      {
         codigo: 1,
         titulo: "Estrutura Banco de Dados",
         nivel: "DIFICIL",
         imagemUrl: "assets/img/programing.png",
         perguntas: [
            {
               codigo: 1,
               titulo: "O que é uma API RESTFull?",
               alternativas: [
                  {
                     codigo: 1,
                     titulo: "Application Programming Interface",
                     correta: false,
                  },
                  {
                     codigo: 2,
                     titulo:
                        "API que segue os padrões definidos pela arquitetura Rest",
                     correta: true,
                  },
                  {
                     codigo: 3,
                     titulo: "Representational State Transfer",
                     correta: false,
                  },
                  {
                     codigo: 4,
                     titulo:
                        "É o caminho mais conhecido nas transferências de dados",
                     correta: false,
                  },
               ],
            },
         ],
      },
      {
         codigo: 1,
         titulo: `Console App (.Net Core)`,
         nivel: "DIFICIL",
         imagemUrl: "assets/img/group.png",
         perguntas: [
            {
               codigo: 1,
               titulo: "O que é uma API RESTFull?",
               resposta: {
                  codigoAlternativa: 2,
               },
               alternativas: [
                  {
                     codigo: 1,
                     titulo: "Application Programming Interface",
                     correta: false,
                  },
                  {
                     codigo: 2,
                     titulo:
                        "API que segue os padrões definidos pela arquitetura Rest",
                     correta: true,
                  },
                  {
                     codigo: 3,
                     titulo: "Representational State Transfer",
                     correta: false,
                  },
                  {
                     codigo: 4,
                     titulo:
                        "É o caminho mais conhecido nas transferências de dados",
                     correta: false,
                  },
               ],
            },
            {
               codigo: 1,
               titulo: "O que é uma API RESTFull?",
               alternativas: [
                  {
                     codigo: 1,
                     titulo: "Application Programming Interface",
                     correta: false,
                  },
                  {
                     codigo: 2,
                     titulo:
                        "API que segue os padrões definidos pela arquitetura Rest",
                     correta: true,
                  },
                  {
                     codigo: 3,
                     titulo: "Representational State Transfer",
                     correta: false,
                  },
                  {
                     codigo: 4,
                     titulo:
                        "É o caminho mais conhecido nas transferências de dados",
                     correta: false,
                  },
               ],
            },
         ],
      },
   ];

   constructor() {}

   ngOnInit(): void {}

   filtrar(codigoNivel: string) {
      console.log(codigoNivel);
   }
}
