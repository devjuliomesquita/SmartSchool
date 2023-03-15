import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Aluno } from './model/aluno';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public alunoForm!:FormGroup;
  public titulo:string = 'Área do Aluno';
  public alunoSelecionado?: Aluno;

  public alunos: Aluno [] = [
    {Id: 1, nome: "Júlio César1", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 2, nome: "Júlio César2", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 3, nome: "Júlio César3", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 4, nome: "Júlio César4", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 5, nome: "Júlio César5", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 6, nome: "Júlio César6", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 7, nome: "Júlio César7", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
    {Id: 8, nome: "Júlio César8", sobrenome: "Mesquita Camilo", telefone: "85 996816053", email: "juliocesarmcamilo@gmail.com" },
  ];
  public displayedColumns:string[] = ['Id', 'nome', 'sobrenome', 'telefone', 'email', 'acao'];
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog) {
    this.CriarFormulario();
  }

  ngOnInit() {
    this.dataAluno.paginator = this.paginator;
  }

  
  CriarFormulario( ){
    this.alunoForm = this.fb.group({
      nome: ['',Validators.required],
      sobrenome: ['',Validators.required],
      telefone: ['',Validators.required],
      email: ['',Validators.required],
    });
  }
  AlunoSelecionado(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno)
    this.displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone', 'email'];
  };
  AlunoDeselecionado(){
    this.alunoSelecionado = undefined;
    this.displayedColumns.push('acao');
  }


  // teste de paginação | voltar depois
  dataAluno = new MatTableDataSource<Aluno>(this.alunos);
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  // Fim do teste de paginação | Voltar depois


}

