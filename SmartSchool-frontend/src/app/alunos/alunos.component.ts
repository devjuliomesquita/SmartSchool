import { Component, OnInit,  } from '@angular/core';
import { Aluno } from './model/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public titulo:string = 'Lista de Alunos';

  public alunos: Aluno [] = [
    {Id: 1, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 2, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 3, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 4, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 5, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 6, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 7, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 8, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
  ];

  displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone', 'email'];

  constructor() { }

  ngOnInit() {
  
  }

}
