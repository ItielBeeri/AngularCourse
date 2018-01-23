import { Component, OnInit } from '@angular/core';
import { Child } from './model/child';
import { SandwichViewModel } from './sandwich-view-model';
import { Sandwich } from './model/sandwich';
import{SandwichService} from './sandwich-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   private childern: Child[] = [];
   private newSandwich: SandwichViewModel = new SandwichViewModel();

   constructor(private sandwichService: SandwichService){}

   ngOnInit(){
     this.sandwichService.getChildren().subscribe(children=>{
       this.childern = children;
     });
   }

   private addSandwich(){
       this.sandwichService.addSandwich(this.newSandwich).then(()=>{
          this.newSandwich = new SandwichViewModel();
          this.sandwichService.getChildren().subscribe(children=>{
            this.childern = children;
          });
       });
   }
}
