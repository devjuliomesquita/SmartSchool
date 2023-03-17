import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../model/professor';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private readonly API = './assets/professores.json';

constructor(private httCliente: HttpClient) { }

ProfessorList(){
  return this.httCliente.get<Professor[]>(this.API)
  .pipe(
    first(),
    delay(0),
    tap(professores => console.log(professores))
  );
};
}
