import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { WeatherAppService } from './weather-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:WeatherAppService){}
  metroCity:any=["Mumbai","Delhi","Chennai","Kolkata"];

  ngOnInit(): void {
    this.metroCity.forEach((element: any)=>{
      this.searchCity(element)
    })
    //this.getLive()
  }
  title = 'weather-app';
  tab='home';
  cityData:any=[]
  
  weatherData:any
  headerToApp(data:any){
    this.weatherData=data
    this.tab=data.tab;
    console.log(data,this.metroCity)
  }
  searchCity(place:any){
    this.service.getLatLong(place).subscribe(data=>{
      console.log(data.features[0].center);
      
      this.service.getWeather(data.features[0].center[1],data.features[0].center[0]).subscribe(data=>{
        console.log(data);
        this.cityData.push(data);
      })
    })
  }
  // getLive(){
  //   this.service.LoadCurrentWeather(10001).subscribe(data=>{
  //     console.log(data)
  //   })
  // }
}
