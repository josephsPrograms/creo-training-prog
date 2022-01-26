import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ModifyPersonDialogComponent } from './components/modify-person-dialog/modify-person-dialog/modify-person-dialog.component';

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
    ReactiveFormsModule 
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
