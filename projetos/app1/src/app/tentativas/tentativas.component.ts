import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() { }

  ngOnChanges(): void {
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
    //console.log('tentativas recebidas do painel: ', this.tentativas);
  }

  ngOnInit(): void {
    
  }

}
