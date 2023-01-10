import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  @Input('appToBody') weatherData:any 
  city:any
  
  ngOnInit(): void {
    // this.city=this.weatherData.location.name;
    console.log(this.weatherData)
    
    
  }
  
}
