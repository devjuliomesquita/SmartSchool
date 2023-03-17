import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alunoProfessor-dialog',
  templateUrl: './alunoProfessor-dialog.component.html',
  styleUrls: ['./alunoProfessor-dialog.component.css']
})
export class AlunoProfessorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
