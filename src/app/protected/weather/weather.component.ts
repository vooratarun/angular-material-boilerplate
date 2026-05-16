import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface ForecastItem {
  day: string;
  icon: string;
  high: number;
  low: number;
}

interface CityWeather {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  condition: string;
  conditionIcon: string;
  updatedAt: Date;
  forecast: ForecastItem[];
}

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  imports: [
    DatePipe,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class WeatherComponent {
  private weatherByCity: CityWeather[] = [
    {
      city: 'San Francisco',
      country: 'USA',
      temperature: 21,
      feelsLike: 20,
      humidity: 62,
      wind: 14,
      condition: 'Partly Cloudy',
      conditionIcon: 'partly_cloudy_day',
      updatedAt: new Date(),
      forecast: [
        { day: 'Mon', icon: 'wb_sunny', high: 22, low: 14 },
        { day: 'Tue', icon: 'cloud', high: 20, low: 13 },
        { day: 'Wed', icon: 'rainy', high: 18, low: 12 },
        { day: 'Thu', icon: 'wb_cloudy', high: 19, low: 13 },
        { day: 'Fri', icon: 'wb_sunny', high: 23, low: 14 }
      ]
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      temperature: 27,
      feelsLike: 30,
      humidity: 73,
      wind: 11,
      condition: 'Humid',
      conditionIcon: 'water_drop',
      updatedAt: new Date(),
      forecast: [
        { day: 'Mon', icon: 'wb_sunny', high: 28, low: 21 },
        { day: 'Tue', icon: 'thunderstorm', high: 25, low: 20 },
        { day: 'Wed', icon: 'rainy', high: 24, low: 19 },
        { day: 'Thu', icon: 'cloud', high: 26, low: 20 },
        { day: 'Fri', icon: 'wb_sunny', high: 29, low: 22 }
      ]
    },
    {
      city: 'London',
      country: 'UK',
      temperature: 15,
      feelsLike: 13,
      humidity: 80,
      wind: 19,
      condition: 'Light Rain',
      conditionIcon: 'rainy',
      updatedAt: new Date(),
      forecast: [
        { day: 'Mon', icon: 'rainy', high: 16, low: 10 },
        { day: 'Tue', icon: 'cloud', high: 17, low: 11 },
        { day: 'Wed', icon: 'rainy', high: 14, low: 9 },
        { day: 'Thu', icon: 'wb_cloudy', high: 15, low: 10 },
        { day: 'Fri', icon: 'wb_sunny', high: 18, low: 11 }
      ]
    }
  ];

  selectedCity = this.weatherByCity[0].city;

  get cities(): string[] {
    return this.weatherByCity.map(entry => entry.city);
  }

  get currentWeather(): CityWeather {
    return this.weatherByCity.find(entry => entry.city === this.selectedCity) ?? this.weatherByCity[0];
  }

  useMyLocation(): void {
    this.selectedCity = this.weatherByCity[0].city;
  }
}

