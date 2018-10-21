import{Component} from '@angular/core';
import {ToiletService} from '../Services/Toilet.service';
import{ItoiletData} from '../Services/Toilet.service';
import{OnInit} from '@angular/core';




@Component({
    
        selector:'app-Near-Toilets',
        templateUrl: './Near-Toilets.component.html',
        styleUrls: ['./Near-Toilets.component.scss'],
     
      
    })
    export class Nearby implements OnInit{
        Toilets: ItoiletData;
  
       lat: number = null;
       lng: number = null;
       zoom: number = 16;
       
    

       _locationChosen = false;
       Icon: any= 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

      constructor(private Service :ToiletService){

      }
      getPos(){
        navigator.geolocation.getCurrentPosition((position)=>{
            debugger
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
                
           
                
      }

   
      
         }
         