import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder
    ) {}

  public people: Person[] | undefined;
  public personInputForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    favoriteColor: ''
  });


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
    }).subscribe(
      (response: Person) => {
        alert('test');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSubmit(): void {
    this.addPerson();
  }

}
