import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunosform',
  templateUrl: './alunosform.component.html',
  styleUrls: ['./alunosform.component.css']
})
export class AlunosformComponent implements OnInit {

  alunoForm: FormGroup;
  constructor( private formBuilder: FormBuilder) {
    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

}
