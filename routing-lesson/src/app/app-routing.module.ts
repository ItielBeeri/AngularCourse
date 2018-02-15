import { NgModule } from "@angular/core";
import { Route, RouterModule, Router } from "@angular/router";
import { GreenComponent } from "./green/green.component";
import { RedComponent } from "./red/red.component";

const routes : Route[] = [
    { path: 'green', component: GreenComponent },
    { path: 'red', component: RedComponent },
    { path: 'red/:number', component: RedComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}