import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  constructor(private http:HttpClient) { }
  getAddress(x:number,y:number){
    let lat=x;
    let lon=y;
    let url:string='https://us1.locationiq.com/v1/reverse?key='+environment.getAddressKey+'&lat='+lat+'&lon='+lon+'&format=json' 
    return this.http.get<any>(url);
  }
  getWeather(x:number,y:number){
    let lat=x;
    let lon=y;
    let url='https://api.weatherapi.com/v1/current.json?key='+environment.getWeatherKey+'&q='+lat+','+lon
    return this.http.get<any>(url)
  }
  getLatLong(place:string){
    let url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token='+environment.getLatLongKey
    return this.http.get<any>(url)
  }
  // LoadCurrentWeather(zip: any): Observable<any> {
  //   //return this.http.get("https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&APPID=dabc2b57d81c4493c08ab63bb4d9e326&units=imperial" );
  //   return this.http.get('https://tile.openweathermap.org/map/temp_new/5/0/0.png?appid=dabc2b57d81c4493c08ab63bb4d9e326')
  //   //return this.http.get('https://maps.openweathermap.org/maps/2.0/weather/TA2/3/4/4?appid=5c00d51dd1993bb2691ec168e5254629')
  // }
}
