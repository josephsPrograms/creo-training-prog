import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { PersonService } from "./person.service";
import { environment } from "src/environments/environment";
import { Person } from "./person";
import { HttpResponse } from "@angular/common/http";

describe("Person Service", () => {
    const serverUrl = environment.apiBaseUrl;
    let personService: PersonService,
        httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                PersonService
            ]
        }).compileComponents();

        personService = TestBed.get(PersonService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should retrieve all people via GET', () => {
        const mockPeople = [
            {
                id: "1",
                firstName: "joseph",
                lastName: "starr",
                favoriteColor: "blue"
            },
            {
                id: "2",
                firstName: "anna",
                lastName: "smith",
                favoriteColor: "pink"
            },
            {
                id: "3",
                firstName: "abigail",
                lastName: "harris",
                favoriteColor: "red"
            },
        ];

        personService.getPeople().subscribe((people: string | any[]) => {
            expect(people.length).toBe(3);
            expect(people).toEqual(mockPeople);
        });

        const request = httpMock.expectOne(`${serverUrl}/people`);

        expect(request.request.method).toBe('GET');

        request.flush(mockPeople);

    });

    it("should add person when POST is called", () => {
        const mockPersonToAdd = {
            id: "1",
            firstName: "joseph",
            lastName: "starr",
            favoriteColor: "blue"
        };

        personService.addPerson(mockPersonToAdd).subscribe((person: Person) => {
            expect(person).toEqual(mockPersonToAdd);
        });

        const request = httpMock.expectOne(`${serverUrl}/add-person`);

        expect(request.request.method).toBe('POST');
        expect(request.request.body).toEqual(mockPersonToAdd);

        const expectedResponse = new HttpResponse({ status: 201, statusText: 'Success', body: mockPersonToAdd });
        request.event(expectedResponse);

        request.flush(mockPersonToAdd);
    });

    it("should modify person when PUT is called", () => {
        const mockPersonToModify = {
            id: "1",
            firstName: "joseph",
            lastName: "starr",
            favoriteColor: "blue"
        };

        personService.modifyPerson(mockPersonToModify).subscribe((person: Person) => {
            expect(person).toEqual(mockPersonToModify);
        });

        const request = httpMock.expectOne(`${serverUrl}/modify-person`);
        expect(request.request.method).toEqual("PUT");
        expect(request.request.body).toEqual(mockPersonToModify);

        const expectedResponse = new HttpResponse({ status: 201, statusText: 'Success', body: mockPersonToModify });
        request.event(expectedResponse);

        request.flush(mockPersonToModify);
    });

    it("should delete person when DELETE is called", async () => {
        const personId = "1";

        personService.deletePerson("1").subscribe(response => {
            expect(response).not.toBeNull();
        });

        const request = httpMock.expectOne(`${serverUrl}/delete-person/${personId}`);

        expect(request.request.method).toBe("DELETE");
    });
});