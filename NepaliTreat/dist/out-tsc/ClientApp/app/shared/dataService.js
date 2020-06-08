import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Order, OrderItem } from "./order";
let DataService = /** @class */ (() => {
    let DataService = class DataService {
        constructor(http) {
            this.http = http;
            this.products = [];
        }
        loadProducts() {
            return this.http.get("/api/products")
                .pipe(map((data) => {
                this.products = data;
                return true;
            }));
        }
        addToOrder(newProduct) {
            if (this.order) {
                this.order = new Order();
            }
            var item = new OrderItem();
            item.productId = newProduct.id;
            item.productCategory = newProduct.category;
            item.productDescription = newProduct.description;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.productVermiImageId = newProduct.vermiImageID;
            item.productManufacturer = newProduct.manufacturer;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
})();
export { DataService };
//# sourceMappingURL=dataService.js.map