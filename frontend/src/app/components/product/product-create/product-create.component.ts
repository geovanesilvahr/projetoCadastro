import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  dataAtual = new Date();
  dia = this.dataAtual.getDate();
  mes = this.dataAtual.getMonth() + 1;
  ano = this.dataAtual.getFullYear();

  date = `${this.dia}/${this.mes}/${this.ano}`

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    manufactorer: '',
    stock: 0,
    weight: 0,
    category: '',
    status: '',
    validity: '',
    image: ''
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
