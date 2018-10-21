import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import 'rxjs/add/operator/map';


@Injectable()

export class Service1{

    
    constructor(private _http :HttpClient){}

    getType():Observable<RootObject>{
        return this._http.get<RootObject>("http://datasets.antwerpen.be/v4/gis/bereikbasisonderwijsbuurt.json")
            .map(root => { root.data.forEach(data => data.geometry2 = JSON.parse(data.geometry)); return root; })
       
       // .do(data=>console.log(JSON.stringify(data)));
        
    }
//   typeInfo :RootObject;
//   getTypeWithCache():Observable<RootObject>{
//       if(this.typeInfo)
//       return Observable.of(this.typeInfo)
//       else 
//       return this._http.get<RootObject>("http://datasets.antwerpen.be/v4/gis/bereikbasisonderwijsbuurt.json")
//       .do(data =>{this.typeInfo =data; })
//   }
}


        export interface Paging {
            records: number;
            pages: number;
            pageCurrent: number;
            pageNext?: any;
            pagePrev?: any;
            pageSize: number;
        }

        export interface Igeometry {
            type: string;
            coordinates: number[][][];
        }
    
        export interface Datum {
            id: number;
            objectid: number;
            geometry: string;
            geometry2 :Igeometry;
            shape?: any;
            thema: string;
            type: string;
            subtype: string;
            aantal?: number;
            niveau: string;
            bereik: number;
            begindatum: string;
            gisid: string;
            shape_length: string;
            shape_area: string;
        }
    
        export interface RootObject {
            paging: Paging;
            data: Datum[];
        }
    
    
    
    