import { Component, OnInit } from '@angular/core';
import { ChildrenService } from '../data/children.service';
import { Child } from '../model/child';
import { HeightRecord } from '../model/height-record';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  private children: Child[]

  constructor(private childrenService: ChildrenService) { }

  ngOnInit() {
    this.children = this.childrenService.getChildren();
  }

  addRecordUsingService(childName: string, heightRecord: HeightRecord){
    this.childrenService.addHeightRecord(childName, heightRecord);
  }
}
