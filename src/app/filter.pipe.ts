import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(toiArray: any, term: any): any {
    debugger;
   //check if search term is undefinded
   if(term ===undefined) return toiArray
   //return updated toilets array
   return toiArray.filter(function(test){
     return test.straat.toLowerCase().includes(term.toLowerCase());
   })
  }

}



// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(players: any[], term: any): any {
//    //check if search term is undefinded
//    if(term ===undefined) return players
//    //return updated toilets array
//    return players.filter(function(data1){
//      return data1.name.toLowerCase().includes(term.toLowerCase());
//    })
//   }

// }

