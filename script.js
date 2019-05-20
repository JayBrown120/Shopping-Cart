var Product = [];
var Prices = [];
var totalPrice;
$('.addButton').click(function() {
    totalPrice=0;
    var item = $(".itemName").val();
    Product.push(item);
    $(".ItemList").append("<li>" + item + "</li>");
    var price = $(".itemPrice").val();
    Prices.push(price);
    $(".PriceList").append("<li>" + price + "</li>");
    var number = Product.length;
    $(".numofItems").html("<p>" + number + "</p>");
    Prices.forEach(function(Total){
        totalPrice=totalPrice+parseInt(Total);
        $(".Total").text(totalPrice);
    });
    
});
$(".message").click(function(){
    alert("Your total is $" + totalPrice + " Thank you for purchasing " + Product[0] + " and other items " );
});