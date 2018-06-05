import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//fireBase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { environment } from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {UiService} from './services/ui/ui.service';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {WeatherService} from './services/weather/weather.service';

import {DetailsComponent} from './pages/details/details.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, 
                  AngularFireModule.initializeApp(environment.firebase),
                  AngularFireDatabaseModule],
  declarations: [ AppComponent, HomeComponent, WeatherCardComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UiService, WeatherService],
})

export class AppModule {

 }