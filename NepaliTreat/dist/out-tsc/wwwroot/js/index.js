$(document).ready(function () {
    var x = 0;
    var s = "";
    console.log("Hello Nima!");
    var theForm = $("#theForm");
    theForm.hide();
    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Are you sure, you want to buy this Item?");
    });
    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });
    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");
    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });
});
//# sourceMappingURL=index.js.map