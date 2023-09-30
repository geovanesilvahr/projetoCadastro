import { Component, OnInit } from '@angular/core';
import { ManufactorerService } from '../manufactorer/manufactorer.service';
import { Router } from '@angular/router';
import { Manufactorer } from '../manufactorer/manufactorer.model';

@Component({
  selector: 'app-mf-create',
  templateUrl: './mf-create.component.html',
  styleUrls: ['./mf-create.component.css']
})
export class MfCreateComponent implements OnInit {
  
  manufac: Manufactorer = {
    id: 0,
    cnpj: '',
    name: '',
    endereco: '',
    telefone: '',
    email: ''
  }

  constructor(
    private mfService: ManufactorerService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createManufactorer(){
    this.mfService.create(this.manufac).subscribe(() => {
      this.mfService.showMessage("Fornecedor Adicionado!");
      this.router.navigate(['/manufactorer']);
    })
  }

}
