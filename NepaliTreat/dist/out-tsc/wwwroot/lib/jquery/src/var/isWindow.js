define(function () {
    "use strict";
    return function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
});
//# sourceMappingURL=isWindow.js.map