import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { UiService } from '../../services/ui/ui.service';

import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})

@Injectable()

export class WeatherCardComponent implements OnInit, OnDestroy {

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;
  cityName: string;


  cities: AngularFireList<any[]>;

  constructor(public weather: WeatherService,
    public router: Router,
    public ui: UiService) {

  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.cities = this.weather.getCities();

    // this.weather.getWeatherState('bangalore')
    //   .subscribe((data: string) => {
    //     this.condition = data;
    //   });

    // this.weather.getCurrentTemp('bangalore').subscribe((data: number) => {
    //   this.currentTemp = data;
    // });
    // this.weather.getMinTemp('bangalore').subscribe((data: number) => {
    //   this.minTemp = data;
    // });
    // this.weather.getMaxTemp('bangalore').subscribe((data: number) => {
    //   this.maxTemp = data;
    // });

    // this.weather.getCityName('bangalore').subscribe((data: string) => {
    //   this.cityName = data.name;
    // });

  }

  ngOnDestroy() {

  }

  openDetails(cityName) {
    this.router.navigateByUrl('/details/' + cityName);
  }

}
