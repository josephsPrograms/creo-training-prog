import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ModifyPersonDialogComponent } from './components/modify-person-dialog/modify-person-dialog/modify-person-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) {}

  public people: Person[] | undefined;
  public personInputForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    favoriteColor: ''
  });

  private personToModify: Person | undefined;


  ngOnInit(): void {
    this.getPeople();
  }

  public getPeople(): void {
    this.personService.getPeople().subscribe(
      (response: Person[]) => {
        this.people = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addPerson(): void {
    this.personService.addPerson({
      firstName: this.personInputForm.controls['firstName'].value,
      lastName: this.personInputForm.controls['lastName'].value,
      favoriteColor: this.personInputForm.controls['favoriteColor'].value,
      id: ""
    }).subscribe(
      (response: Person) => {
        alert('success');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public modifyPerson(person: Person): void {
    this.personService.modifyPerson({...person})
    .subscribe(
      (response: any) => {
        alert("success");
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
      }
    );
  }

  public onSubmit(): void {
    this.addPerson();
  }

  public openDialog(chosenPerson: Person): void {
    const dialogRef = this.dialog.open(
      ModifyPersonDialogComponent,
      {
        width: '500px',
        data: {...chosenPerson}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.personToModify = result;
        this.modifyPerson({
          firstName: result.firstName,
          lastName: result.lastName,
          favoriteColor: result.favoriteColor,
          id: result.id
        });
      }
    });

  }

}
