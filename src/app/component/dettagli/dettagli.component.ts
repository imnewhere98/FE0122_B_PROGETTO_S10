import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  dettagli!: Product[];
  sub!: Subscription;
  risultato = this.detProdotti.ottieni()

  aggiungiCarrello(prodotto: Product){
    this.detProdotti.aggiungiCarrello(prodotto)
    this.detProdotti.conta()


  }

  constructor(private detProdotti: ProductsService) {}

  ngOnInit(): void {
    this.detProdotti.caricaProdotti().subscribe((prodarrivato) => {
      this.dettagli = prodarrivato;
    });
  }
}
