import { Component, OnInit } from '@angular/core';
import { ProductoDistribuidor } from '../producto-distribuidor';
import { ProductoDataService } from '../producto-data.service';
@Component({
  selector: 'producto-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public producto:ProductoDistribuidor;
  listaCategorias = [
    {valor: 1,nombre:"Bandejas"},
    {valor: 2,nombre:"Bases"},
    {valor: 3,nombre:"Platos"},
    {valor: 4,nombre:"Porta Comidas"},
    {valor: 5,nombre:"Papel"},
    {valor: 6,nombre:"Modes"},
    {valor: 7,nombre:"Bolsas"},
    {valor: 8,nombre:"Pitillos y Mezcladores"},
    
  ];
  constructor(
    private productoDataService:ProductoDataService
  ) { }

  ngOnInit() {
    this.producto = new ProductoDistribuidor();
    //this.productoDataService.loadProductos();
    
  }
  onNewClick(){
    this.producto = new ProductoDistribuidor();
    
  }
  onNewProducto(){
    this.producto = new ProductoDistribuidor;
  }
  onSaveProducto(){
    this.productoDataService.saveProducto(this.producto);
  }

}
