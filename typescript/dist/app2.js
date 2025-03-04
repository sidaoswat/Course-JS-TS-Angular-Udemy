"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
/*class Carro {

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }

}*/
/*
let carroA = new Carro('Mustang',4);
carroA.acelerar();
carroA.acelerar();
console.log(carroA)*/
/*
class Concessionaria {

    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
}*/
/*
let concessionaria = new Concessionaria('Rua A','Opala 3.0');
console.log(concessionaria);*/
/*
class Pessoa {

    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome: string, carroPreferido: string, carro: Carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}*/
/*
let pesssoa = new Pessoa('Sidão', 'Inpala 67', 'Opala 3.0');
console.log(pesssoa);
console.log(pesssoa.dizerCarroPreferido());*/
/* --- criar carros --- */
var carroA = new Carro_1.Carro('Mustang GT', 4);
var carroB = new Carro_1.Carro('Inpala 67', 2);
var carroC = new Carro_1.Carro('Fiat 147', 4);
/* --- montar a lista de carros da concessionária --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Rua Dos Padres', listaDeCarros);
/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
var cliente = new Pessoa_1.Pessoa('Sidão', 'Opala 3.0 Alcool', carroA);
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comparar Carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
