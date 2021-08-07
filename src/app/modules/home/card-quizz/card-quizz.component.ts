import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quizz } from 'src/app/shared/models/types/quizz';

@Component({
  selector: 'home-card-quizz',
  templateUrl: './card-quizz.component.html',
  styleUrls: ['./card-quizz.component.scss']
})
export class CardQuizzComponent implements OnInit {
  @Input() quizz: Quizz;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  perguntasRespondidas(){
    return this.quizz.perguntas.filter(
        pergunta => pergunta.resposta
      );
  }

  porcentagemRespondidas(){
    return Math.round(this.perguntasRespondidas().length*100/this.quizz.perguntas.length);
  }

  abrirQuizz(){
    this.router.navigate(['quizzes', this.quizz.codigo]);
  }
}
