import { Component, OnInit } from '@angular/core';
import { Professor } from './model/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo:string = 'Lista de Professores';

  public professores: Professor[] = [
    {Id: 1, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Matemática" },
    {Id: 2, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Português" },
    {Id: 3, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Física" },
    {Id: 4, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Química" },
    {Id: 5, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Geografia" },
    {Id: 6, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "História" },
    {Id: 7, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Programação" },
    {Id: 8, nome: "Júlio César", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com", disciplina: "Biologia" },
  ];

  displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone', 'email', 'disciplina', 'acao'];

  constructor() { }

  ngOnInit() {
  }

}
