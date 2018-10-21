import{Component} from '@angular/core';
import {ToiletService} from '../Services/Toilet.service';
import{ItoiletData} from '../Services/Toilet.service';
import{OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import{FilterPipe} from '../filter.pipe'


@Component({
    
        selector:'app-PublicToilet',
        templateUrl: './PublicToilet.component.html',
        styleUrls: ['./PublicToilet.component.scss'],
     
      
    })
    export class ToiletComponent implements OnInit{
        Toilets: ItoiletData;
    
        
        players =[{name : "gerrard", position: "Midfield"},{name : "Torres", position: "Forward"}]
        
        search = 2020;
        
        constructor(private Service :ToiletService){
          
        }
        ngOnInit() {
          this.Service.getType()
          .subscribe(result => this.Toilets = result);
                  
      }
      
       
         }
         
    