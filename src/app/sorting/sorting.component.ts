import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor() {
   
   }
 
  
  names = [{"id": 1,"first_name": "Sam","last_name": "Paul","date_of_joining":"2015-12-05"}, 
     {"id": 2,"first_name": "Ram","last_name": "Gopal","date_of_joining":"2008/04/10"}, 
     {"id": 3,"first_name": "Sanam","last_name": "Puri","date_of_joining":"2009/03/20"}, 
     {"id": 4,"first_name": "Matthew","last_name": "Gonsalwis","date_of_joining":"2008/01/20"}, 
     {"id": 5,"first_name": "Christine","last_name": "Kate","date_of_joining":"2008/03/20"}, 
     {"id": 6,"first_name": "Mona","last_name": "Lisa","date_of_joining":"2008/06/20"}
  ]
 
 sorting_list=[{"text":'Sort by First Name', "filter":'first_name'},
           {"text":'Sort by First Name',"filter":'first_name'},
          {"text":'Sort by Last Name', "filter":'first_name'},
          {"text":'Sort by Employee ID ',"filter":'first_name'},
          {"text":'Sort by Joining Date ',"filter":'first_name'}
          ];
     ngOnInit(){
     }

    sorting_arg="id";
    
     sort_argument(arg:string):any{
       this.sorting_arg=arg;
       
       //this.filterPipe.transform([this.sorting_arg]);
       
       //console.log(this.sorting_arg + " "+ arg);
     }
     
     sort_it(arg:string):any{
 this.sorting_arg=arg;
     }

}
