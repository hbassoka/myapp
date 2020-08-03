import { Component, OnInit } from '@angular/core';

export class Product {

  id:number;
  name:string;
  price:number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[{'id':1,'name':'enveloppe','price':50},{'id':2,'name':'enveloppe2','price':50}]
  constructor() { }

  ngOnInit(): void {
  }

}
