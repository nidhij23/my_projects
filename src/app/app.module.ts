import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailsComponent } from './mails/mails.component';
import { SortingComponent } from './sorting/sorting.component';
import {AppRoutingModule} from './app-routing.module';
import { SortingPipe } from './sorting.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MailsComponent,
    SortingComponent,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
