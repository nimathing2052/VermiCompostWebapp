import { Component } from '@angular/core';

@Component({
  selector: 'the-shop',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Nepali Treat';
}
