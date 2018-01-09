import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChildComponent, ChildrenComponent],
  exports:[ChildrenComponent]
})
export class HeightModule { }
