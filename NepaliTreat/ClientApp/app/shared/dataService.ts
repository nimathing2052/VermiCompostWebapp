import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public order: Order = new Order();

    public products: Product[] = [];

    loadProducts(): Observable<boolean> {
      return  this.http.get("/api/products")
            .pipe(
                map((data: any[]) => {
                    this.products = data;
                    return true;
                }));
    }

    public addToOrder(newProduct: Product) {


        let item: OrderItem = this.order.items.find(i => i.productId == newProduct.id);

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
}