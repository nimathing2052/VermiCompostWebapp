import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ProductList = /** @class */ (() => {
    let ProductList = class ProductList {
        constructor(data) {
            this.data = data;
            this.products = [];
        }
        ngOnInit() {
            this.data.loadProducts()
                .subscribe(success => {
                if (success) {
                    this.products = this.data.products;
                }
            });
        }
    };
    ProductList = __decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: ["productList.component.css"]
        })
    ], ProductList);
    return ProductList;
})();
export { ProductList };
//# sourceMappingURL=productList.component.js.map