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

