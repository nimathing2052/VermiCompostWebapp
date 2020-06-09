import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    private token: string = "";
    private tokenExpiraton: Date;

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

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiraton > new Date();
    }


    login(creds): Observable<boolean>  {
        return this.http.post("/account/createtoken", creds)
                        .pipe(
                        map((data: any) => {
                            this.token = data.token;
                            this.tokenExpiraton = data.expiration;
                            return true;
                        })); 
    }

    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .pipe(
                map(response => {
                    this.order = new Order();
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