import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Element } from '../element.model'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is the default
})
export class ServerElementComponent implements OnInit {

  // srvElement will be the name exposed to outside, if ommitted it will be the default
  // in this case: element
  @Input('srvElement') element: Element;

  constructor() { }

  ngOnInit() {
  }

}
