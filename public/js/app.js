/**
 * Created by tracyking on 3/12/16.
 */

var Funds = originalFunds = 0,
    mentalSpendingThreshold = 700,
    phonePrice = 143.67,
    accessoryPrice = 23.45,
    numPhones = 0,
    numAccessories = 0,
    totalCost = 0;

$(document).ready(function() {
    $('.purchase-error').hide();
});

$('#reset').on("click", function() {
    Funds = 0;
    numPhones = 0;
    numAccessories = 0;
    totalCost = 0;
    $('.purchase-error').hide();
    $('.cost').css("background-color", "#9BF4D5");
    $('.number-phones').html(0);
    $('.number-accessories').html(0);
    $('.total-cost').html(0);
    $(".form-control").val(0);

});

$('.update-btn').on("click", function() {
    Funds = originalFunds = $(".form-control").val();
    alert("Your bank account has been updated to $" + Funds)
});

$('#buy-phones').on("click", function goShopping(){

    if (Funds < phonePrice) {
        alert("You don't have enough money in your account right now. Please update the amount in the bank account field to continue.");
    } else {
        for (var i = 0; i < Funds; i++) {
            if (Funds > phonePrice){
                buyPhone();
            } else {
                totalCost = totalCost + (totalCost * 0.075);
                $('.total-cost').html("$" + totalCost.toFixed( 2 ));
                if (mentalSpendingThreshold < totalCost){
                    $('.cost').css("background-color", "#F38181");
                    $('.purchase-error').show();
                } else {
                    $('.cost').css("background-color", "#9BF4D5");
                    $(".form-control").val((originalFunds - totalCost).toFixed(2));

                }
                return totalCost;
            }
        }
    }
});

function buyPhone() {
    numPhones += 1;
    Funds -= phonePrice;
    if (Funds < mentalSpendingThreshold) {
        Funds -= accessoryPrice;
        numAccessories += 1;
        totalCost += accessoryPrice;
    }
    totalCost += phonePrice;
    $('.number-phones').html(numPhones);
    $('.number-accessories').html(numPhones);
    return totalCost;
}

//GOOGLE FONT CODE - Nothing to see here!
WebFontConfig = {
    google: { families: [ 'Roboto:900:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();