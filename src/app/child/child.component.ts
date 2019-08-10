import { Component, OnInit } from '@angular/core';
import { resumeData } from '../config/resume-data.config';

@Component({
  selector: 'zz-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  resumeData = resumeData;

  values =
    {
      socks: 123,
      clothes: 111
    };

  constructor() { }

  ngOnInit() {
  }

  getImportByValue(value) {
    return this.values[value];
  }

  getSumatory(resumeData) {
    return resumeData.reduce((acc, item) => item.value ? acc + this.values[item.value] : acc, 0);
  }

}
