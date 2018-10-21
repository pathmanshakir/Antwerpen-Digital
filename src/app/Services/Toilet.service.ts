import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import 'rxjs/add/operator/map';


@Injectable()

export class ToiletService{

    
    constructor(private _http :HttpClient){}

    getType():Observable<ItoiletData>{
        return this._http.get<ItoiletData>("http://datasets.antwerpen.be/v4/gis/openbaartoilet.json")
        .map(root => { root.data.forEach(data => data.Lati = JSON.parse(data.point_lat)); return root; })
        .map(root => { root.data.forEach(data => data.Longi = JSON.parse(data.point_lng)); return root; })
        //.do(data=>console.log(JSON.stringify(data)));
        
    }

}
export interface Paging {
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext?: any;
    pagePrev?: any;
    pageSize: number;
}

export interface Itoilet {
    objectid: number;
    point_lat: string;
    point_lng: string;
    Lati : number;
    Longi : number;
    id: string;
    obdd: string;
    categorie: string;
    publiceren: string;
    prioritair: string;
    omschrijving: string;
    extra_info_publiek: string;
    vrijstaand: string;
    type: string;
    stadseigendom: string;
    betalend: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    beheerder: string;
    contactpersoon: string;
    contactgegevens: string;
    vermelding: string;
    doelgroep: string;
    integraal_toegankelijk: string;
    gescreend: string;
    luiertafel: string;
    mabu: string;
    maeu: string;
    dibu: string;
    dieu: string;
    wobu: string;
    woeu: string;
    dobu: string;
    doeu: string;
    vrbu: string;
    vreu: string;
    zabu: string;
    zaeu: string;
    zobu: string;
    zoeu: string;
    openingsuren_opm: string;
    opm_intern: string;
    lat: string;
    long: string;
    x_coord: string;
    y_coord: string;
    shape?: any;
}

export interface ItoiletData {
    paging: Paging;
    data: Itoilet[];
}





      