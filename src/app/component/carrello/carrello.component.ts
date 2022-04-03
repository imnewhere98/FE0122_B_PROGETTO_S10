import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  dettagli!: Product[];
  sub!: Subscription;
  pippo = this.detProdotti.nelCarrello()


  constructor(private detProdotti: ProductsService) { }



  ngOnInit(): void {
    this.detProdotti.caricaProdotti().subscribe((prodarrivato) => {
      this.dettagli = prodarrivato;
    });
  }

  click(){
    this.detProdotti.pulisciCarrello()
     alert('Ordine effettuato correttamente, riceverai una email di conferma')
  }

  elimina(x : Product){

    return this.pippo = [];

  }

}

