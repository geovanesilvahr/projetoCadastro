import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-manufactorer-crud',
  templateUrl: './manufactorer-crud.component.html',
  styleUrls: ['./manufactorer-crud.component.css']
})
export class ManufactorerCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService  
    ) { 
    headerService.headerData = {
      title: 'Fornecedores',
      icon: 'account_circle',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/manufactorer/create'])

  }

}
