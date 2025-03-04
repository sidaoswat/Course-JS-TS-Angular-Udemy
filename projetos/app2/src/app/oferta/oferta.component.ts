import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { OfertasService } from "../ofertas.service";
import { CarrinhoService } from "../carrinho.service";

import { Oferta } from "../shared/oferta.model";


//import { Observable, Observer, Subscription } from 'rxjs';
//import {interval} from "rxjs";

@Component({
  selector: 'xyz-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  /*
  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;
  */

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametros: any) => {
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
      });
    });
    /*
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
    */

    /*Teste com Observables*/
    /*  
    this.tempoObservableSubscription = interval(2000).subscribe((intervalo: number) => {
      console.log(intervalo);
    });

    //Observable (Observável)
    let meuObervableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.error('algum erro foi encontrado na stream de eventos');
      observer.complete();
    });

    //Observable (obervador)
    this.meuObservableTesteSubscription = meuObervableTeste.subscribe(
      (resultado: number) => console.log(resultado+10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    );

    
    let tempo = interval(2000).subscribe((intervalo: number) => {
      console.log(intervalo);
    });
    */
    /*this.route.params.subscribe(
      (parametro: any) => {
        console.log(parametro);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('Processamento foi classificado como concluído');
      } 
    )*/ //base de implementação simples de Observable
    
      //console.log('ID :'+this.route.snapshot.params['id']);//snapshot
    /*this.route.params.subscribe((parametro: any) => {
      console.log(parametro);
    })*///subscribe
    
  }

  public adicinarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
    console.log(this.carrinhoService.exibirItens());
  }

  ngOnDestroy(): void {
    /*this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();*/
  }

}
