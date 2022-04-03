import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ProdottiInArrivo!: Product[];
  sub!: Subscription;

  aggiungiCarrello(prodotto: Product){
    this.productSrv.aggiungiCarrello(prodotto)
    this.productSrv.conta()


  }

  specifiche(x:Product){

    this.productSrv.specifiche(x)

  }

  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.productSrv.caricaProdotti().subscribe((prodarrivato) => {
      this.ProdottiInArrivo = prodarrivato;
    });
  }
  // getId(id: number) {
  //   let prodotti = this.ProdottiInArrivo.find((x) => x.id === id);

  //   console.log(prodotti);
  // }
}
