import { Component, OnInit } from '@angular/core';
import { Child } from '../model/child';
import { ChildrenService } from '../data/children.service';
import { HeightRecordViewModel } from './height-record.view-model';
import { HeightRecord } from '../model/height-record';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private child: Child;
  private fontSize: number = 40;
  private currentRecord: HeightRecordViewModel = new HeightRecordViewModel();

  constructor(private childrenService: ChildrenService) {
  }

  ngOnInit() {
    let children = this.childrenService.getChildren();
    this.child = children[0];
  }

  grow(){
    this.fontSize +=2;
  }

  reset(){
    this.fontSize = 40;
  }

  addRecord() {
    let record = new HeightRecord(this.currentRecord.date, this.currentRecord.value);
    this.childrenService.addHeightRecord(this.child.name, record);
  }
}
