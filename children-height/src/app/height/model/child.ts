import { HeightHistory } from "./height-history";

export class Child {
    constructor(readonly name: string) { }

    readonly heightHistory: HeightHistory = [];
}