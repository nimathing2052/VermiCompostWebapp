import { __decorate } from "tslib";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Order, OrderItem } from "./order";
let DataService = /** @class */ (() => {
    let DataService = class DataService {
        constructor(http) {
            this.http = http;
            this.token = "";
            this.order = new Order();
            this.products = [];
        }
        loadProducts() {
            return this.http.get("/api/products")
                .pipe(map((data) => {
                this.products = data;
                return true;
            }));
        }
        get loginRequired() {
            return this.token.length == 0 || this.tokenExpiraton > new Date();
        }
        login(creds) {
            return this.http.post("/account/createtoken", creds)
                .pipe(map((data) => {
                this.token = data.token;
                this.tokenExpiraton = data.expiration;
                return true;
            }));
        }
        checkout() {
            if (!this.order.orderNumber) {
                this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
            }
            return this.http.post("/api/orders", this.order, {
                headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
            })
                .pipe(map(response => {
                this.order = new Order();
                return true;
            }));
        }
        addToOrder(newProduct) {
            let item = this.order.items.find(i => i.productId == newProduct.id);
            if (item) {
                item.quantity++;
            }
            else {
                item = new OrderItem();
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
        }
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
})();
export { DataService };
//# sourceMappingURL=dataService.js.map