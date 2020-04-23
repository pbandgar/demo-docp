import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetComponent } from '../reset/reset.component';
import { ResetComponentModule } from './reset-routing.module';

@NgModule({

  declarations: [
    ResetComponent
  ],
  imports: [
    ResetComponentModule
  ],
  entryComponents:[]
   
})
export class RESETModule { }
