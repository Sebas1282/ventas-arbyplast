import { Component, OnInit } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';

@Component({
  selector: 'producto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private productoDataService:ProductoDataService
  ) { }

  ngOnInit() {
    this.productoDataService.loadProductos();
  }

}
