import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ModifyPersonDialogComponent } from './components/modify-person-dialog/modify-person-dialog/modify-person-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ModifyPersonDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
