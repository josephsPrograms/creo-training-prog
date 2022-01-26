import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPersonDialogComponent } from './modify-person-dialog.component';

describe('ModifyPersonDialogComponent', () => {
  let component: ModifyPersonDialogComponent;
  let fixture: ComponentFixture<ModifyPersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPersonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
