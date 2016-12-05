import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{value}}</h1>`
})
export class AppComponent {
    value = "World!"
}
