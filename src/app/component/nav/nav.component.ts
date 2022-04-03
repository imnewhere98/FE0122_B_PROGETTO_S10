import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  contatore: number = 0;

  constructor(private productSrv: ProductsService) { }

  ngOnInit(): void {
    this.productSrv.sub.subscribe((conta) =>{
      this.contatore = conta
    })
  }

}
