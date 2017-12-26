import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChildComponent],
  exports:[ChildComponent]
})
export class HeightModule { }
