import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';
import { Product } from './main.model';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  cities: City[];
  selectedCity: City;

  nodes: any[];
  selectedNode: any;

  products: Product[];

  constructor(public nodeService: MainService) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.nodeService.getFiles().then(files => this.nodes = files)
  this.nodeService.getProductsSmall().then(data => this.products = data);
  }

  ngOnInit(): void {
  }

  onChangeCities(){}

  nodeSelect(event:any){}

  executeQuery(){}
}
