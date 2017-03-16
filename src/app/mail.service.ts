import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MailService {

  constructor(private http: Http) { }

  mails;
 
  getMails() {
    return this.http.get('mails.json')
      .map(res => this.mails = res.json().mails);
  }
  getNames(){
    return ['raja','ram','mohan','roy'];
  }
  
  postMails (name: boolean): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('mails.json', { name }, options)
                    .map(res => this.mails = res.json().mails);
  }

  /*    sendData() {
     var reqData = {
       "category_o": 1
     }
     var config = {
       headers: {
         'Content-Type': 'application/json; charset=utf-8'
       }
     }
     return this.http.post("mails.json", reqData, config)
       .map(function (data, status, headers, config) {
 
         if (data == " ") {
           //alert("There are no Data to show");
         }
        
         var filteredData = data;
         ////alert("data: " + angular.toJson($scope.filteredData)+$scope.filteredData[0].validstaff);
         
 
       })
       .error(function (data, status, header, config) {
         //alert(data+"helooooooooo"+status);
         var serverResponse = "Data: " + data +
           "<hr />status: " + status +
           "<hr />headers: " + header +
           "<hr />config: " + config;
       });
 }
  public postData(url: string, data: any): Observable<Response> {
    return this.http.post(url, data).map((res: Response) => {
      return res.json();
    }
}*/



}