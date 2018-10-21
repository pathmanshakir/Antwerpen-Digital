import{Component} from '@angular/core';
import {Service1} from '../Services/Service1.service';
import{RootObject} from '../Services/Service1.service';
import{OnInit} from '@angular/core';


@Component({
    
        selector:'app-type-school',
        templateUrl: './type-school.component.html',
        styleUrls: ['./type-school.component.scss']
      
    })
    export class typeComponent implements OnInit{
        TypeOfSchool: RootObject;
      
  lat: number = null;
  lng: number = null;
  zoom: number = 14;

  Icon: any= 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  _locationChosen = false;
        
    
      

        l
      constructor(private Service :Service1){

      }
      getPos(){
        navigator.geolocation.getCurrentPosition((position)=>{
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          //debugger;
          
          
        });
       //debugger;
       this._locationChosen = true;
       
   
      }
      ngOnInit() {
        this.Service.getType()
                .subscribe(result => this.TypeOfSchool = result);
      }
       
     
    
          
 
         }
         
    