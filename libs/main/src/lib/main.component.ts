import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';
import { City, Product } from './main.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  mainForm: FormGroup;

  constructor(public nodeService: MainService,
    private formBuilder: FormBuilder) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.nodeService.getFiles().then(files => this.nodes = files)
  this.nodeService.getProductsSmall().then(data => this.products = data);
  this.createForm();
  }

  ngOnInit(): void {
  }

  /**
   * createForm
   */
  public createForm() {
    this.mainForm = this.formBuilder.group({
      selectedCity: ['', [Validators.required]],
      selectedNode: ['', [Validators.required]]
    })
  };

  onChangeCities(){}

  nodeSelect(event:any){}

  executeQuery(){}
}
