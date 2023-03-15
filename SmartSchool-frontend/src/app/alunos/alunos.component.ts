import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Aluno } from './model/aluno';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlunoService } from './service/aluno.service';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public alunoForm!:FormGroup;
  public titulo:string = 'Área do Aluno';
  public alunoSelecionado?: Aluno;
  public _alunos: Observable<Aluno[]>;
  public displayedColumns:string[] = ['Id', 'nome', 'sobrenome', 'telefone', 'email', 'acao'];

  constructor(
    private alunoService:AlunoService,
    private fb: FormBuilder,
    public dialog: MatDialog

    )
    {
      this.CriarFormulario();
      this._alunos = this.alunoService.alunoList()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os alunos.');
          return of([])
        })

      );
    }

  ngOnInit(): void {

  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  // alunoList(): void {
  //   this.alunoService.alunoList();
  // }
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


  // Fim do teste de paginação | Voltar depois


}

