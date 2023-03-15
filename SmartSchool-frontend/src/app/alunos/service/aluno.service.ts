import { Injectable } from '@angular/core';
import { Aluno } from '../model/aluno';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AlunoService {
private readonly API = './assets/alunos.json';
constructor( private httpCliente: HttpClient ) { }

alunoList() {
  return this.httpCliente.get<Aluno[]>(this.API)
  .pipe(
    tap(alunos => console.log(alunos))
  );
};
}

