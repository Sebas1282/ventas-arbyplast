import { Injectable } from '@angular/core';
import { Preventa } from './preventa';

@Injectable()
export class PreventaDataService {
  preventaList:Array<Preventa>;
  constructor() { }

  private initializePreventaList(){
    
      this.preventaList = [
       {
         fechaVenta:"07/02/2017",
         totalVenta:78000,
         cliente: "Panaderia la Marquesa",
         medioPago: "Credito"
       },
       {
        fechaVenta:"14/02/2017",
        totalVenta:120000,
        cliente: "Pegaso",
        medioPago: "Efectivo"
      },
      {
        fechaVenta:"24/02/2017",
        totalVenta:78000,
        cliente: "Monitos Pizza",
        medioPago: "Credito"
      }
      ]; 
     }
     loadPreventas(){
      this.initializePreventaList();
    }
    public savePreventa(preventa:Preventa){
      if(!this.preventaList){
        this.initializePreventaList();
      }
      this.preventaList.push(preventa);
    }

}
