import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, map, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-professorform',
  templateUrl: './professorform.component.html',
  styleUrls: ['./professorform.component.css']
})
export class ProfessorformComponent implements OnInit {

  public professorForm: FormGroup;
  public titulo: string = 'Formulário para cadastro de novos Professores';

  separatorKeysCodes: number[] = [ENTER, COMMA];
  disciplinaCtrl = new FormControl('');
  filteredDisciplina: Observable<string[]>;
  disciplinas: string[] = [];
  allDisciplinas: string[] = ['Matemática', 'Português', 'Literatura', 'Redação', 'História','Geografia', 'Física','Química', 'Biologia'];

  @ViewChild('disciplinaInput') disciplinaInput!: ElementRef<HTMLInputElement>

  constructor( private formBuilder: FormBuilder) {
    this.professorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      disciplina: [''],
    });

    this.filteredDisciplina = this.disciplinaCtrl.valueChanges.pipe(
      startWith(null),
      map((disciplina: string | null) => (disciplina ? this._filter(disciplina) : this.allDisciplinas.slice())),
    );
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.disciplinas.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.disciplinaCtrl.setValue(null);
  }

  remove(disciplina: string): void {
    const index = this.disciplinas.indexOf(disciplina);

    if (index >= 0) {
      this.disciplinas.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.disciplinas.push(event.option.viewValue);
    this.disciplinaInput.nativeElement.value = '';
    this.disciplinaCtrl.setValue(null);
  }




  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allDisciplinas.filter(disciplina => disciplina.toLowerCase().includes(filterValue));
  }

}
