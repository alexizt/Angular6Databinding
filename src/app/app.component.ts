import { Component, OnInit } from '@angular/core';
import { Element } from './element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //serverElements = [{type: 'server', name: 'TestServer!', content: 'Just a test'}];
  serverElements = [ new Element('server', 'TestServer!', 'Just a test') ];

  ngOnInit() {
    this.serverElements.filter((element, index, array)=>{
        return element.name.length>0;
    })
  }
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push(
      new Element('server', serverData.serverName, serverData.serverContent)
    );
  }

  onBlueprintAdded(blueprintData: { serverName:string, serverContent: string }) {
    this.serverElements.push(
      new Element('blueprint', blueprintData.serverName, blueprintData.serverContent)
    );
  }  
}
