import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';
  //@ViewChild(CockpitComponent) serverContentInput;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // bpCreated will be the name exposed to outside
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName:string, serverContent: string }>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
