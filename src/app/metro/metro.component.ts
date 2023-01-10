import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCityPopupComponent } from '../add-city-popup/add-city-popup.component';
import { WeatherAppService } from '../weather-app.service';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {

  constructor(private service:WeatherAppService,private  dialog:  MatDialog) { }
  @Input('appToMetro') cityData:any
  //cities=["Mumbai","Delhi","Chennai","Kolkata"];
  newCity:any
  place=["Bombay","New Delhi","Chennai","Calcutta"]
  showMsg=false;
  ngOnInit(): void {
    // console.log(this.metroCity)
    // this.metroCity.forEach((element: any)=>{
    //   this.searchCity(element)
    // })
   
  }
  searchCity(place:any){
    this.service.getLatLong(place).subscribe(data=>{
      console.log(data.features[0].center);
      
      this.service.getWeather(data.features[0].center[1],data.features[0].center[0]).subscribe(data=>{
        console.log(data);
        if(this.place.indexOf(data.location.name)==-1){
          this.cityData.push(data);
          this.place.push(data.location.name)
        }
        else{
          this.showMsg=true;
          setTimeout(() => {
            this.showMsg=false
          }, 3000);
        }
        
      })
    })
  }
  addCity(){
    const dialogRef=this.dialog.open(AddCityPopupComponent,{ data: {
      message:  "Error!!!"
      }});
      
      dialogRef.afterClosed().subscribe((result)=>{
        
        if(result)
        this.searchCity(result)
      })
  }
  removeCity(data:any){
    const index= this.cityData.indexOf(data);
    if(index>-1){
      this.cityData.splice(index,1);
    }
  }

}
