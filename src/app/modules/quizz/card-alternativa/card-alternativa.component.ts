import { Alternativa } from '../../../shared/models/types/alternativa';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-alternativa',
  templateUrl: './card-alternativa.component.html',
  styleUrls: ['./card-alternativa.component.scss']
})
export class CardAlternativaComponent implements OnInit {
  @Input() alternativa: Alternativa
  @Input() selecionada: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
