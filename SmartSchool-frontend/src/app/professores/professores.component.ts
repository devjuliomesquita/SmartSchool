import { Component, OnInit } from '@angular/core';
import { Professor } from './model/professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, of } from 'rxjs';
import { ProfessorService } from './service/professor.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public professorFormDetalhes!: FormGroup;
  public titulo:string = 'Área do Professor';
  public _professor: Observable<Professor[]>;
  public professorSelecionado?:Professor;
  displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone', 'email', 'disciplina', 'acao'];


  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.CriarFormulario();
    this._professor = this.professorService.ProfessorList().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar lista de professores.');
        return of([]);
      })
    );
  }

  ngOnInit() {
  }

  ProfessorSelecionado(professor: Professor){
    this.professorSelecionado = professor;
    this.professorFormDetalhes.patchValue(professor);
    this.displayedColumns = ['Id', 'nome', 'sobrenome', 'telefone'];
  }
  ProfessorDeselecionado():void{
    this.professorSelecionado = undefined;
    this.displayedColumns.push('email', 'disciplina', 'acao');
  }
  CriarFormulario(){
    this.professorFormDetalhes = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      disciplina: ['', Validators.required],
    });
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  onAdd() {
    this.router.navigate(['form'], { relativeTo: this.route });
    // console.log('teste');
  }
}
