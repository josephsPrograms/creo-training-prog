import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "./person";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(`${this.apiServerUrl}/people`);
    }

    public addPerson(person: Person): Observable<Person> {
        return this.http.post<Person>(`${this.apiServerUrl}/add-person`, person);
    }

    public modifyPerson(person: Person): Observable<Person> {
        return this.http.put<Person>(`${this.apiServerUrl}/modify-person`, person);
    }

    public deletePerson(personId: string): Observable<Person> {
        return this.http.delete<Person>(`${this.apiServerUrl}/delete-person/${personId}`);
    }

}