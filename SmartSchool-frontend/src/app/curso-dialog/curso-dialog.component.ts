import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css']
})
export class CursoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
