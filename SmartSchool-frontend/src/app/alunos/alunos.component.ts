import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from './model/aluno';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlunoService } from './service/aluno.service';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import { CursoDialogComponent } from '../curso-dialog/curso-dialog.component';
import { AlunoProfessorDialogComponent } from '../alunoProfessor-dialog/alunoProfessor-dialog.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public alunoFormDetalhes!: FormGroup;
  public titulo: string = 'Área do Aluno';
  public alunoSelecionado?: Aluno;
  public _alunos: Observable<Aluno[]>;
  public displayedColumns: string[] = [
    'Id',
    'nome',
    'sobrenome',
    'telefone',
    'email',
    'acao',
  ];

  constructor(
    private alunoService: AlunoService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.CriarFormulario();
    this._alunos = this.alunoService.alunoList().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os alunos.');
        return of([]);
      })
    );

  }

  onAdd() {
    this.router.navigate(['form'], { relativeTo: this.route });
    // console.log('teste');
  }

  ngOnInit(): void {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  onCancel(aluno: Aluno){
    this.dialog.open(CancelDialogComponent,{
      data: aluno.nome
    });
  }
  onCurso():void{
    this.dialog.open(CursoDialogComponent);
  }
  onAlunoProfessor():void {
    this.dialog.open(AlunoProfessorDialogComponent);
  }
  CriarFormulario() {
    this.alunoFormDetalhes = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  AlunoSelecionado(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoFormDetalhes.patchValue(aluno);
    this.displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone','acao'];
  }
  AlunoDeselecionado() {
    this.alunoSelecionado = undefined;
    this.displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone', 'email','acao'];
  }

  // teste de paginação | voltar depois

  // Fim do teste de paginação | Voltar depois
}
