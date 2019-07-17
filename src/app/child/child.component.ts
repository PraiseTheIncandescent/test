import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'zz-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() selectedControlName: FormControlName;

  constructor() { }

  ngOnInit() {
  }

}
