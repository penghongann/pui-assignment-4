$(document).ready(function(){

    // $('#productname').html(localStorage.getItem("pillowKey"));
    // $('#product').attr("src",localStorage.getItem("pillowPic"));
    

    var wishlistItem = [];

    $('#wishlist').click(function() {

        //define the shape that user selects as a variable
        var wishShape = $('input[name=example]:checked').val(); 

        //define the type that user selects as a variable
        var wishType = $('input[name=radios]:checked').val(); 

        var wishName = $('#productname').text();

        var wishPrice = $('#productprice').text();

        var wishImg = $('#product').attr('src');

        // store the selected item 
        var wishItem = {wishShape, wishType, wishName, wishPrice, wishImg};
        var wishlistItem = JSON.parse(localStorage.getItem("wishPillow")) || [];

        wishlistItem.push(wishItem);
        localStorage.setItem("wishPillow",JSON.stringify(wishlistItem));

        
        console.log("This is wishItem" + " " + JSON.parse(localStorage.getItem("wishPillow")));
 
    });



    // Cart document ready, get the old localStorage item
     var oldWishPillow = JSON.parse(localStorage.getItem("wishPillow")) || [];


    for (var i=0; i < oldWishPillow.length; i++) {
                $('.wishcart').append("<div class=\"wish\" id=\"wishId\"></div>");
                $('#wishId').attr('id', 'wishitem' + i);


                $("#wishitem"+i).append(
                "<img src="+oldWishPillow[i]['wishImg']+" />"
                +'<h3>'+oldWishPillow[i]['wishName']+'</h3>'
                +'<p>'+oldWishPillow[i]['wishType']+'</p>'
                +'<p>'+oldWishPillow[i]['wishShape']+'</p>'
                +'<p>'+oldWishPillow[i]['wishPrice']+'</p>'
                +"<button class='removeWish'>"+"Remove"+"</button>"
                )

            };

    $('.removeWish').click(function(){

        var parent = $(this).parent();
        var deletedWish = parent.data("noWish");
        parent.remove();
        var index = oldWishPillow.indexOf(deletedWish);
        oldWishPillow.splice(index,1);
        localStorage.setItem("wishPillow", JSON.stringify(oldWishPillow));
    })

});
