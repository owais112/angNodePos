import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { Product } from './main.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get<any>('assets/data.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getProductsSmall() {
      return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }
}
