Udemy - Angular 6 - Databinding
=======

## Event binding: ##
(click)=componentFunction($event)

**Element binding with local reference (cant bind only to the template):**
#MyElement

## Interpolation Binding: ##
{{ MyProperty }}

## Property Binding: ##
[MyProperty]


## Parent to child binding: ##
**Parent Component template:**
><app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>

**Child Component:**
on code:  
>@Input() element: {type: string, name: string, content: string};
on template: 
><label>{{ element.content }}</label>


## Parent to child binding with Alias: ##
**Parent Component template:**
><app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"></app-server-element>

**Child Component:**
on code:  
>@Input('srvElement') element: {type: string, name: string, content: string};
on template: 
><label>{{ element.content }}</label>

#Event Binding#
**on child component code:**
>  @Output() **serverCreated** = new EventEmitter<{serverName: string, serverContent: string}>();
>  ...
>  onAddServer(nameInput: HTMLInputElement) {
>    console.log(nameInput.value);
>    this.serverCreated.emit({
>      serverName: nameInput.value, 
>      serverContent: this.newServerContent
>    });
>  }

**On parent template:**
>(**serverCreated**)="onServerAdded($event)"
**On parent code:**
 > onServerAdded(serverData: {serverName: string, serverContent: string}) {
 >   this.serverElements.push(
 >     new Element('server', serverData.serverName, serverData.serverContent)
 >   );
 > }
