import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
@Component({
  selector: 'app-add-city-popup',
  templateUrl: './add-city-popup.component.html',
  styleUrls: ['./add-city-popup.component.css']
})
export class AddCityPopupComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<AddCityPopupComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  city:any;
  public  closeMe() {
      this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  addCity(){
    if(this.city)
    this.dialogRef.close(this.city);
  }

}
