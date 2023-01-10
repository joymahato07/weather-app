import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  constructor(private http:HttpClient) { }
  getAddress(x:number,y:number){
    let lat=x;
    let lon=y;
    let url:string='https://us1.locationiq.com/v1/reverse?key=pk.0f7263eabd81906c1a516331a676380d&lat='+lat+'&lon='+lon+'&format=json' 
    return this.http.get<any>(url);
  }
  getWeather(x:number,y:number){
    let lat=x;
    let lon=y;
    let url='http://api.weatherapi.com/v1/current.json?key=ff9401f40834465fb90152656222812&q='+lat+','+lon
    return this.http.get<any>(url)
  }
  getLatLong(place:string){
    let url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1Ijoiam95bWFoYXRvIiwiYSI6ImNsY2Z6N3Q0ajA5bHIzbnF1ZzQzeHlmbm0ifQ.B-9Pff1vBNTrqVkyBehiqQ'
    return this.http.get<any>(url)
  }
  LoadCurrentWeather(zip: any): Observable<any> {
    //return this.http.get("https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&APPID=dabc2b57d81c4493c08ab63bb4d9e326&units=imperial" );
    return this.http.get('https://tile.openweathermap.org/map/temp_new/5/0/0.png?appid=dabc2b57d81c4493c08ab63bb4d9e326')
    //return this.http.get('http://maps.openweathermap.org/maps/2.0/weather/TA2/3/4/4?appid=7405030836b576d3ec455fb29578099d')
  }
}
