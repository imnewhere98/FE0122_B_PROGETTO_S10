import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:4201/products';

  prodotti: Product[] = [];

  inCarrello: Product[]= [];

  contatore:number = 0;

  sub = new Subject<number>();


  constructor(private http: HttpClient) {}

  caricaProdotti() {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  aggiungiCarrello(prodotto: Product) {
    this.inCarrello.push(prodotto);

  }

  nelCarrello(){
    return this.inCarrello
  }

  ottieni() {
    return this.prodotti;
  }

  specifiche(prodotto: Product) {
    this.prodotti = [];
    this.prodotti.push(prodotto);
    this.prodotti.length = 1;

  }



  conta() {
    this.contatore++;
    this.sub.next(this.contatore);
  }

  pulisciCarrello(){
    this.prodotti=[]
    return this.prodotti
  }

  // getId(){
  //   return this.http.get<Product[]>(`${this.baseUrl}`)
  // }
}
