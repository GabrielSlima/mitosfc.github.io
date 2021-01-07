import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactsMenuComponent } from './contacts-menu/contacts-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './team/team.component'

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ContactsMenuComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
