import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BodegaModule}from './bodega/bodega.module'
import {CategoriaProductoModule} from './categoria-producto/categoria-producto.module'
import {ClienteModule} from './cliente/cliente.module'
import {DistribuidorModule}from './distribuidor/distribuidor.module'
import {PreventaModule}from './preventa/preventa.module'
import {ProductoDistribuidorModule} from './producto-distribuidor/producto-distribuidor.module'
import{UsuarioModule} from './usuario/usuario.module'
import{VentaClienteModule} from './venta-cliente/venta-cliente.module';
import { MenuComponent } from './menu/menu.component';
import { OpcionSeleccionadaComponent } from './opcion-seleccionada/opcion-seleccionada.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionSeleccionadaComponent
  ],
  imports: [
    BrowserModule,
    BodegaModule,
    CategoriaProductoModule,
    ClienteModule,
    DistribuidorModule,
    PreventaModule,
    ProductoDistribuidorModule,
    UsuarioModule,
    VentaClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
