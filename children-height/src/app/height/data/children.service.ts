import { Child } from "../model/child";
import { HeightRecord } from "../model/height-record";

export class ChildrenService {
    private children = {
        "David": new Child("David"),
        "Hodaya": new Child("Hodaya"),
        "Dina": new Child("Dina")
    }
    
    getChildren() : Child[]{
        return Object.values(this.children);
    }

    addHeightRecord(name: string, record: HeightRecord){
        let child : Child = this.children[name];
        if(!child){
            throw new Error('Child not found');
        }
        child.heightHistory.push(record);
    }
}