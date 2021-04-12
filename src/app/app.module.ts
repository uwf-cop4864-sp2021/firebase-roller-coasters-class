import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsaListComponent } from './coasters/usa-list/usa-list.component';
import { EuropeListComponent } from './coasters/europe-list/europe-list.component';
import { AsiaListComponent } from './coasters/asia-list/asia-list.component';
import { HomeComponent } from './coasters/home/home.component';
import {environment as env} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CreateCoasterComponent } from './create-coaster/create-coaster.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsaListComponent,
    EuropeListComponent,
    AsiaListComponent,
    HomeComponent,
    CreateCoasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
