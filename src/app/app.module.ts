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
import { OpcionSeleccionadaComponent } from './opcion-seleccionada/opcion-seleccionada.component';
import {RouterModule,Routes} from '@angular/router';
import {IndexComponentDistribuidor} from './distribuidor/index/index.component';
import {IndexComponentPreventa} from './preventa/index/index.component';
import {IndexComponentProductoDistribuidor} from './producto-distribuidor/index/index.component';
import{IndexComponentBodega} from './bodega/index/index.component';
import{IndexComponentCategoria} from './categoria-producto/index/index.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import{FormsModule} from '@angular/forms';



const appRoutes:Routes = [
  {path:"distribuidor/index",component:IndexComponentDistribuidor},
  {path:"preventa/index",component:IndexComponentPreventa},
  {path:"producto-distribuidor/index",component:IndexComponentProductoDistribuidor},
  {path:"bodega/index",component:IndexComponentBodega},
  {path:"categoria-producto/index",component:IndexComponentCategoria},
  
];
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
    VentaClienteModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterializeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
