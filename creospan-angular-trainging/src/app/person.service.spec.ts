import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { PersonService } from "./person.service";
import { environment } from "src/environments/environment";

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

    it('should retrieve all people vie GET', () => {
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
});