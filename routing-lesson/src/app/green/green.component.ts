import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRed(){
    this.router.navigate(['red',666]);
  }
}
