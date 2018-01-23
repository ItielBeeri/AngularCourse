import { Injectable } from "@angular/core/";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Child } from './model/child';
import { DbChild } from '../db/dbChild';
import { DbSandwich } from '../db/dbSandwich';
import 'rxjs/add/operator/combineLatest';
import { Sandwich } from "./model/sandwich";
import { SandwichViewModel } from "./sandwich-view-model";

@Injectable()
export class SandwichService {
    constructor(private httpClient: HttpClient) { }

    baseUrl: string = 'http://localhost:3000';

    getChildren(): Observable<Child[]> {
        let childrenUrl = this.baseUrl + '/children';
        let dbChildren$ = this.httpClient.get<DbChild[]>(childrenUrl);

        let sandwichesUrl = this.baseUrl + '/sandwiches';
        let dbSandwiches$ = this.httpClient.get<DbSandwich[]>(sandwichesUrl);

        return dbChildren$.combineLatest(dbSandwiches$, (dbChildren, dbSandwiches) => {
            let children: Child[] = [];

            for (let i = 0; i < dbChildren.length; i++) {
                let child = new Child(dbChildren[i].name);

                let sandwiches = dbSandwiches.filter(s => s.childId === dbChildren[i].id);
                for (let j = 0; j < sandwiches.length; j++) {
                    child.sandwiches.push(new Sandwich(sandwiches[j].breadType, sandwiches[j].spread));
                }

                children.push(child);
            }

            return children;
        })
    }

    async addSandwich(sandwichVM: SandwichViewModel): Promise<void> {
        let childUrl = this.baseUrl + '/children?name=' + sandwichVM.childName;
        let dbChildren = await this.httpClient.get<DbChild[]>(childUrl).toPromise();
        let dbChild: DbChild;
        if (dbChildren.length > 0) {
            dbChild = dbChildren[0];
        } else {
            dbChild = new DbChild();
            dbChild.name = sandwichVM.childName;
            dbChild = await this.httpClient.post<DbChild>(this.baseUrl + '/children', dbChild).toPromise();
        }

        let dbSandwich: DbSandwich = {
            id: 0,
            childId: dbChild.id,
            breadType: sandwichVM.breadType,
            spread: sandwichVM.spread
        };

        await this.httpClient.post(this.baseUrl + '/sandwiches', dbSandwich).toPromise();
    }
}