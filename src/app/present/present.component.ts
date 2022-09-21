import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

public value :boolean =true
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.value=false
    },4000);
  }

}
