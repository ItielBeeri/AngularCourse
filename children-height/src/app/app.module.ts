import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeightModule } from './height/height.module';
import { ChildrenService } from './height/data/children.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeightModule
  ],
  providers: [ChildrenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
