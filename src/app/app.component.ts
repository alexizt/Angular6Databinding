import { Component } from '@angular/core';
import { Element } from './element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //serverElements = [{type: 'server', name: 'TestServer!', content: 'Just a test'}];
  serverElements = [ new Element('server', 'TestServer!', 'Just a test') ];
  
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
