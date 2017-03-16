import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingPipe'
})
export class SortingPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): Array<string> {
    console.log(args);
    if (args === 'date_of_joining') {
      console.clear();
      array.sort((a: any, b: any) => {

       var dateA = new Date(a.date_of_joining);
       var dateB = new Date(b.date_of_joining);
         
        return dateA > dateB ? 1 : -1;
      });
      return array;
    }
    else {
      array.sort((a: any, b: any) => {
       // console.log(a+","+b);
        if (a[args] < b[args])
          return -1;
        else if (a[args] > b[args])
          return 1;
        else return 0;
      });
      return array;
    }
  }
  
}