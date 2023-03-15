import { Injectable } from '@angular/core';
import { Aluno } from '../model/aluno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class AlunoService {

constructor( ) { }

alunoList(): Aluno[] {
  return [
    {Id: 1, nome: "Júlio César1", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 2, nome: "Júlio César2", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 3, nome: "Júlio César3", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 4, nome: "Júlio César4", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 5, nome: "Júlio César5", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 6, nome: "Júlio César6", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 7, nome: "Júlio César7", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 8, nome: "Júlio César8", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" }
  ];
};
}

