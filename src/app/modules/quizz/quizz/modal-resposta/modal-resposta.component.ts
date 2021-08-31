import { Pergunta } from './../../../../shared/models/types/pergunta';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-resposta',
  templateUrl: './modal-resposta.component.html',
  styleUrls: ['./modal-resposta.component.scss']
})
export class ModalRespostaComponent implements OnInit {
  @Input() resposta: 'acertou' | 'errou';
  @Input() pergunta: Pergunta;
  @Output() avancar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  alternativaCorreta(): string{
    return this.pergunta.alternativas.find(alternativa => alternativa.correta).titulo;
 }
}
