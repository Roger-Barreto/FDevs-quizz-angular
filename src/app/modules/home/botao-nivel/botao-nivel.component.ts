import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dificuldade } from 'src/app/shared/models/types/dificuldade';


@Component({
  selector: 'home-botao-nivel',
  templateUrl: './botao-nivel.component.html',
  styleUrls: ['./botao-nivel.component.scss']
})
export class BotaoNivelComponent implements OnInit {
  @Input() nivel: Dificuldade;

  @Output() handleClick = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

}
