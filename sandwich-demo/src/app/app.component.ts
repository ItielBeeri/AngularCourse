import { Component } from '@angular/core';
import { Child } from './model/child';
import { SandwichViewModel } from './sandwich-view-model';
import { Sandwich } from './model/sandwich';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private childern: Child[] = [];
   private newSandwich: SandwichViewModel = new SandwichViewModel();

   private addSandwich(){
       let child: Child;
       let existingChildren = this.childern.filter(ch=>ch.name === this.newSandwich.childName);
       if(existingChildren.length === 0){
         child = new Child(this.newSandwich.childName);
         this.childern.push(child);
       } else if(existingChildren.length === 1){
         child = existingChildren[0];
       } else {
         throw new Error(`More than one child found with the name ${this.newSandwich.childName}`);
       }

       let sandwich = new Sandwich(this.newSandwich.breadType, this.newSandwich.spread);
       child.sandwiches.push(sandwich);

       this.newSandwich = new SandwichViewModel();
   }
}
