import { __decorate } from "tslib";
import { Component } from "@angular/core";
let Login = /** @class */ (() => {
    let Login = class Login {
        constructor(data, router) {
            this.data = data;
            this.router = router;
            this.errorMessage = "";
            this.creds = {
                username: "",
                password: ""
            };
        }
        onLogin() {
            //Call the login service
            this.data.login(this.creds)
                .subscribe(success => {
                if (success) {
                    if (this.data.order.items.length == 0) {
                        this.router.navigate([""]);
                    }
                    else {
                        this.router.navigate(["checkout"]);
                    }
                }
            }, err => this.errorMessage = "Failed to Login");
        }
    };
    Login = __decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html"
        })
    ], Login);
    return Login;
})();
export { Login };
//# sourceMappingURL=login.component.js.map