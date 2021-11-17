import { Component } from '@angular/core';

export interface New {
  id : number;
  title: string;
  url : string,
  image_small:string,
  image_full:string,
  resume: string;
  date_formated: string;
  category_slug : string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  news: New[] = [{
    id: 1,
    title : "Teset lorema sadjhsa sadkjdhskahds",
    url : "",
    image_small: "",
    image_full: "",
    resume : "Teset",
    date_formated : "Teset",
    category_slug : "Teset",
    text : "Teset",
  },{
    id: 2,
    title : "Teset2",
    url : "",
    image_small: "",
    image_full: "",
    resume : "Teset2",
    date_formated : "Teset2",
    category_slug : "Teset2",
    text : "Teset2",
  },{
    id: 3,
    title : "Teset2",
    url : "",
    image_small: "",
    image_full: "",
    resume : "Teset2",
    date_formated : "Teset2",
    category_slug : "Teset2",
    text : "Teset2",
  }];






}
