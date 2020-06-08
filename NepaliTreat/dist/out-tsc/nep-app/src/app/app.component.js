import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = /** @class */ (() => {
    let AppComponent = class AppComponent {
        constructor() {
            this.title = 'Nepali Treat';
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
  `,
            styles: []
        })
    ], AppComponent);
    return AppComponent;
})();
export { AppComponent };
//# sourceMappingURL=app.component.js.map