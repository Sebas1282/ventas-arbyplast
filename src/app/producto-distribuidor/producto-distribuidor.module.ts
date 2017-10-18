import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponentProductoDistribuidor } from './index/index.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ProductoDataService } from './producto-data.service';
import{FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexComponentProductoDistribuidor, AddComponent, ListComponent],
  providers:[ProductoDataService]
})
export class ProductoDistribuidorModule { }
