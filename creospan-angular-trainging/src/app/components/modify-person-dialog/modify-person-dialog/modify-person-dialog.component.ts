import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-modify-person-dialog',
  templateUrl: './modify-person-dialog.component.html',
  styleUrls: ['./modify-person-dialog.component.css']
})
export class ModifyPersonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModifyPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person,
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
