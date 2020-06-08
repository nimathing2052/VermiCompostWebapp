define([
    "../../var/pnum"
], function (pnum) {
    "use strict";
    return new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
});
//# sourceMappingURL=rnumnonpx.js.map