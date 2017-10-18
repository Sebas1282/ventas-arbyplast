import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponentBodega} from './index/index.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponentBodega, AddComponent, ListComponent]
})
export class BodegaModule { }
