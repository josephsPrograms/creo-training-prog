import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public people: Person[] | undefined;

  constructor(private personService: PersonService) {}

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
}
