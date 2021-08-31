import { QuizzesService } from "./../../../core/services/quizzes.service";
import { Pergunta } from "./../../../shared/models/types/pergunta";
import { Quizz } from "src/app/shared/models/types/quizz";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
   selector: "app-quizz",
   templateUrl: "./quizz.component.html",
   styleUrls: ["./quizz.component.scss"],
})
export class QuizzComponent implements OnInit, OnDestroy {
   private codigoQuizz: number;
   public quizz: Quizz;
   public perguntaAtual: Pergunta;
   public respostaConfirmada: "acertou" | "errou" = null;
   public fimQuizz: boolean = false;

   private subscriptions: Subscription[] = [];

   constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private quizzesService: QuizzesService
   ) {}

   ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
         this.codigoQuizz = params.codigo;
         const subscription = this.quizzesService
            .getById(params.codigo)
            .subscribe((response) => {
               this.quizz = response.body;
            });
         this.subscriptions.push(subscription);
      });
      const perguntaPerguntaAtual = this.quizz.perguntas.find(
         (pergunta) => !pergunta.resposta
      );
      const indexPerguntaAtual = this.quizz.perguntas.indexOf(
         perguntaPerguntaAtual
      );

      this.perguntaAtual = this.quizz.perguntas[indexPerguntaAtual];
   }

   perguntasRespondidas() {
      return this.quizz.perguntas.filter((pergunta) => pergunta.resposta);
   }

   porcentagemRespondidas() {
      return Math.round(
         (this.perguntasRespondidas().length * 100) /
            this.quizz.perguntas.length
      );
   }

   indexQuestaoAtual(): number {
      return this.quizz.perguntas.indexOf(this.perguntaAtual) + 1;
   }

   selecionarAlternativa(codigo: number) {
      this.perguntaAtual.resposta = {
         codigoAlternativa: codigo,
      };
   }

   pularAlternativa() {
      this.perguntaAtual.resposta = null;
      const indexPerguntaAtual = this.quizz.perguntas.indexOf(
         this.perguntaAtual
      );
      if (indexPerguntaAtual == this.quizz.perguntas.length - 1) {
         if (this.quizz.perguntas.find((p) => !p.resposta)) {
            this.router.navigate(["/home"]);
            return;
         } else {
            this.fimQuizz = true;
            return;
         }
      }

      const proximaPerguntaNaoRespondida = this.quizz.perguntas.find(
         (pergunta) =>
            !pergunta.resposta &&
            this.quizz.perguntas.indexOf(pergunta) > indexPerguntaAtual
      );
      this.perguntaAtual =
         this.quizz.perguntas[
            this.quizz.perguntas.indexOf(proximaPerguntaNaoRespondida)
         ];
   }

   confirmarAlternativa() {
      if (!this.perguntaAtual.resposta) return;

      const subscription = this.quizzesService
         .responderPergunta({
            codigoPergunta: this.perguntaAtual.codigo,
            codigoAlternativa: this.perguntaAtual.resposta.codigoAlternativa,
         })
         .subscribe();
      this.subscriptions.push(subscription);

      let acertou: boolean = false;
      this.perguntaAtual.alternativas.forEach((alternativa) => {
         if (
            alternativa.codigo == this.perguntaAtual.resposta.codigoAlternativa
         )
            acertou = alternativa.correta;
      });

      this.respostaConfirmada = acertou ? "acertou" : "errou";
   }

   avancar() {
      this.respostaConfirmada = null;
      this.pularAlternativa();
   }

   perguntasCorretas(): Pergunta[] {
      return this.quizz.perguntas.filter(
         (pergunta) =>
            pergunta.resposta.codigoAlternativa ==
            pergunta.alternativas.find((a) => a.correta).codigo
      );
   }

   ngOnDestroy() {
      if (this.subscriptions.length > 0)
         this.subscriptions.forEach((s) => s.unsubscribe());
   }
}
