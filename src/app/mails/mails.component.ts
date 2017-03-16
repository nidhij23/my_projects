import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { CardTemplate } from './card_template';


@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
  providers: [MailService]
})
export class MailsComponent implements OnInit {

  constructor(private _mailservice: MailService, private http: Http) { }
  private somevar: string = "mails";
  mails;
  card_holder = new Array<CardTemplate>();
  card_holder2 = new Array<CardTemplate>();
  card_holder3 = new Array<CardTemplate>();

  ngOnInit() {
    this.getMails();
    this.show_in_the_console();
    //this.checkForLoop();
  }

  getMails() {
    this._mailservice.getMails().subscribe(
      mails => this.mails = mails
      //mails => this.mails =<CardTemplate>mails
      //this.card_holder=new CardTemplate(this.mails.sender,this.mails.sender,this.mails.sender,this.mails.sender)
      // mails=>this.card_holder=mails
    );}

  show_in_the_console() {
    this.card_holder = this.card_data;
    this.card_holder2 = this.transform_object("name", "id", "work", "other", this.test_array);
    //this.card_holder3 = this.transform_object("id", "subject", "sender", "read", this.mails);
    // this.card_holder=this.test_array;
    //console.log(this.card_data);
    console.log(this.card_holder2);
    console.log(this.mails);
    //  console.log(this.card_holder);
    //  console.log(this.g);
  }

  postData(name: boolean): any {
    this._mailservice.postMails(name).subscribe(
    );
  }

  star_mail(val: boolean) {
    console.log("sending value " + val);
    this.postData(val);
  }
  // checkForLoop(): void {
  //   for (var i = 0; i < 6; i++) {
  //     //console.log(i + ",");
  //   }
  // }

  card_data = [{ property1: 11, property2: "dyyggy", property3: 'Mr. Nice', property4: "hello" },
  { property1: 12, property2: "dyyggy", property3: 'Narco', property4: "helldfdo" },
  { property1: 13, property2: "dyyggy", property3: 'Bombasto', property4: "hdgello" },
  { property1: 14, property2: "dyyggy", property3: 'Celeritas', property4: "hdgsdgello" },
  { property1: 15, property2: "dyyggy", property3: 'Magneta', property4: "heldgsdlo" },
  { property1: 16, property2: "dyyggy", property3: 'RubberMan', property4: "hedgsgllo" },
  { property1: 17, property2: "dyyggy", property3: 'Dynama', property4: "helsdgdglo" },
  { property1: 18, property2: "dyyggy", property3: 'Dr IQ', property4: "hellgsdgo" },
  { property1: 19, property2: "dyyggy", property3: 'Magma', property4: "hellodg" },
  { property1: 20, property2: "dyyggy", property3: 'Tornado', property4: "gsdg" }
  ];

  test_array = [
    { name: "nidhi", id: "123", work: "craft", other: "harmonium", property: "FHfhfhfh" },
    { name: "dneha", id: "23525", work: "art", other: "piano", property: "FHfhfhfh" },
    { name: "sneah", id: "5757", work: "puzzles", other: "guitar", property: "FHfhfhfh" },
    { name: "parul", id: "96", work: "cube", other: "music", property: "FHfhfhfh" },
    { name: "palak", id: "2452452", work: "algorithms", other: "dance", property: "FHfhfhfh" },
  ];

  hello = false;
  show() { this.hello = true; }
  hide() { this.hello = false; }


  //transforming array with objects of below keys to another array of object of type cardTemplate
  transform_object(key1: string, key2: string, key3: string, key4: string, arr: any): Array<CardTemplate> {
    var cards = new Array<CardTemplate>();
    var cards2 = new Array<CardTemplate>();
    for (let i of arr) {
      var temp = new CardTemplate(i[key1], i[key2], i[key3], i[key4]);
      cards2.push(temp);
    }
    return cards2;
  }

}



