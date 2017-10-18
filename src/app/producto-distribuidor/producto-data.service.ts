import { Injectable } from '@angular/core';
import { ProductoDistribuidor } from './producto-distribuidor';



@Injectable()
export class ProductoDataService {
  productoList: Array<ProductoDistribuidor>;

  
  constructor() {}

private initializeProductoList(){
 
   this.productoList = [
    {
      nombreProducto:"Vazo 3 OZ",
      distribuidor:"House",
      paquetesXCaja: 50,
      unidadesXPaquete: 60,
      precioPaquete: 30000,
      precioCaja:50000,
      precioUnidad: 3000,
      idProducto:"AB345",
      categoria:"Vasos"
    },
    {
      nombreProducto:"Porta Comida",
      distribuidor:"Distri Plasticos",
      paquetesXCaja: 50,
      unidadesXPaquete: 60,
      precioPaquete: 30000,
      precioCaja:50000,
      precioUnidad: 3000,
      idProducto:"BB345",
      categoria:"Porta Comidas"
    },
    {
      nombreProducto:"Bandeja Mediana",
      distribuidor:"Servi Plasticos",
      paquetesXCaja: 50,
      unidadesXPaquete: 60,
      precioPaquete: 30000,
      precioCaja:50000,
      precioUnidad: 3000,
      idProducto:"CB345",
      categoria:"Bandejas"
    }
   ]; 
  }
  loadProductos(){
    this.initializeProductoList();
  }
  public saveProducto(producto:ProductoDistribuidor){
    if(!this.productoList){
      this.initializeProductoList();
    }
    this.productoList.push(producto);
  }
}
