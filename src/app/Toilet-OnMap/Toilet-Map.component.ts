import{Component} from '@angular/core';
import {ToiletService} from '../Services/Toilet.service';
import{ItoiletData} from '../Services/Toilet.service';
import{OnInit} from '@angular/core';




@Component({
    
        selector:'app-Toilet-Map',
        templateUrl: './Toilet-Map.component.html',
        styleUrls: ['./Toilet-Map.component.scss'],
     
      
    })
    export class ToiletMap implements OnInit{
        Toilets: ItoiletData;
  
       lat: number = null;
       lng: number = null;
       zoom: number = 14;
       _locationChosen = false;
       Icon: any= 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

      constructor(private Service :ToiletService){
   
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
                .subscribe(result => this.Toilets = result);
                debugger
           
                
      }

   
      
         }
         