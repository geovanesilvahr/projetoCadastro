import { Component, OnInit } from '@angular/core';
import { ManufactorerService } from '../manufactorer/manufactorer.service';
import { Manufactorer } from '../manufactorer/manufactorer.model';

@Component({
  selector: 'app-mf-read',
  templateUrl: './mf-read.component.html',
  styleUrls: ['./mf-read.component.css']
})
export class MfReadComponent implements OnInit {

  manufactors: Manufactorer[] = [];
  displayedColumns = ['id','name','cnpj', 'endereco', 'telefone', 'email' ,'action'];

  constructor(private mfService: ManufactorerService) { }


  ngOnInit(): void {
    this.mfService.read().subscribe(manufactors => {
      this.manufactors = manufactors;
    });
  }

}
