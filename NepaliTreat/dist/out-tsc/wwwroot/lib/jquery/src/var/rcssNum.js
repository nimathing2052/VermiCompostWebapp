define([
    "../var/pnum"
], function (pnum) {
    "use strict";
    return new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
});
//# sourceMappingURL=rcssNum.js.map