import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { MatmoduleModule } from './matmodule/matmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormdetailComponent,
    ContactsComponent,
    EventsComponent,AboutComponent, EditComponent, ConfirmComponent, HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatmoduleModule,FormsModule,MatSliderModule,
     BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
