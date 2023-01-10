import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherAppService } from '../weather-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tab:any='home';

  constructor(private service:WeatherAppService) { }
  @Output() headerToApp = new EventEmitter<any>();
  public lat: any;
  public lng: any;
  place=''
  ngOnInit(): void {
    this.getLocation();
    

  }
  address:any;
  city:string=''
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lat);
          // this.service.getAddress(this.lat,this.lng).subscribe(data=>{
          //   console.log(data);
          //   this.address=data.display_name.split(',')[0]
          // })
          this.service.getWeather(this.lat,this.lng).subscribe(data=>{
            console.log(data);
            let data1={data:data,tab:this.tab}
            this.city=data.location.name
            this.headerToApp.emit(data1)
            
          })
          
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  searchCity(){
    this.tab='home'
    this.service.getLatLong(this.place).subscribe(data=>{
      console.log(data.features[0].center);
      this.lat=data.features[0].center[1];
      this.lng=data.features[0].center[0];
      this.service.getWeather(data.features[0].center[1],data.features[0].center[0]).subscribe(data=>{
        console.log(data);
        let data1={data:data,tab:this.tab}
        this.city=data.location.name
        this.headerToApp.emit(data1)
        
      })
    })
  }
  tabChange(tab:any){
    this.tab=tab;
    if(tab=='home')this.getLocation()
    this.service.getWeather(this.lat,this.lng).subscribe(data=>{
      console.log(data);
      let data1={data:data,tab:this.tab}
      this.city=data.location.name
      this.headerToApp.emit(data1)
      
    })

  }
 
}
