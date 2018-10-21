import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { homeComponent } from './home/home.component';
import {Service1} from './Services/Service1.service'
import {ToiletService} from './Services/Toilet.service'
import { HttpClientModule } from '@angular/common/http';
import {typeComponent} from './type-school/type-school.component';
import { AgmCoreModule } from '@agm/core';
import {ToiletComponent} from './Public-Toilets/PublicToilet.component';
import {ToiletMap} from './Toilet-OnMap/Toilet-Map.component';
import {Nearby} from './Near_Toilets/Near-Toilets.component';
import {MatTableModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import { ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

//import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    homeComponent,
    typeComponent,
    ToiletComponent,
    FilterPipe,
    ToiletMap,
    Nearby
 
    
  
    ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule,

  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcDz0Ed2qFpCUJSVaLYySphgU3ICD69fM'}),
      
    MDBBootstrapModule.forRoot(),
    
    RouterModule.forRoot([
  
      { path: 'home', component: homeComponent},
      {path : 'type-school', component: typeComponent},
      {path : 'PublicToilet', component: ToiletComponent},
      {path : 'Toilet-Map', component: ToiletMap},
      {path : 'Near-Toilets', component:Nearby }


 
    ], { useHash: true }),
    AgmSnazzyInfoWindowModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [   Service1, ToiletService],
  bootstrap: [AppComponent]
})

export class AppModule { }
