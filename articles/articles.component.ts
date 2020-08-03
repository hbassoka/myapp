import { Component, OnInit } from '@angular/core';

export class Article {

  id:number;
  name:string;
  price:number;
}
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  articles :Article[]=[{'id':1,'name':'enveloppe','price':50},{'id':2,'name':'enveloppe2','price':50}]
  constructor() { }

  ngOnInit(): void {
  }

}
