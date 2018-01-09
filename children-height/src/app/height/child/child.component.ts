import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  @Input() private child: Child;

  @Output() private recordAdded: EventEmitter<HeightRecord> = new EventEmitter<HeightRecord>();

  private fontSize: number = 40;
  private currentRecord: HeightRecordViewModel = new HeightRecordViewModel();

  constructor() {
  }

  ngOnInit() {
  }

  grow(){
    this.fontSize +=2;
  }

  reset(){
    this.fontSize = 40;
  }

  addRecord() {
    let newRecord = new HeightRecord(this.currentRecord.date, this.currentRecord.value);
    this.recordAdded.emit(newRecord);    
  }
}
