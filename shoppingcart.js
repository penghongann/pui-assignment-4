
//Global variables
var productArray=[
{productID:"1",productName:"Throw Pillow-Geometric", productImage:"image/1.png"},
{productID:"2",productName:"Throw Pillow-Firework", productImage:"image/2.png"},
{productID:"3",productName:"Throw Pillow-Nature", productImage:"image/3.png"},
{productID:"4",productName:"Throw Pillow-Flower", productImage:"image/4.png"},
{productID:"5",productName:"Throw Pillow-Galaxy", productImage:"image/5.png"},
{productID:"6",productName:"Throw Pillow-Eyelash", productImage:"image/6.png"},
];

//Get stored img from local
var imgGetfromHome = localStorage.getItem("pillowPic");

var shapeArray =[
{shape:"Square",shapeImage:imgGetfromHome},
{shape:"Round",shapeImage:"image/round.png"},
{shape:"Dog",shapeImage:"image/dog.png"},
{shape:"Bear",shapeImage:"image/bear.png"},
{shape:"Bunny",shapeImage:"image/bunny.png"},
{shape:"Cat",shapeImage:"image/cat.png"},
];


//update the number in shopping cart
function updateCount() {
        var storeCount = 0;

        if (localStorage.getItem("selectedPillow")===null){
        //store the itemCount
        storedCount ++;
    } else {

        var storedPillow = JSON.parse(localStorage.getItem("selectedPillow"));
        storedCount = storedPillow.length;
        storedCount ++;
    }
        // itemCount = localStorage.getItem("selectedCount");
        localStorage.setItem("selectedCount", JSON.stringify(storedCount));
        // display the itemCount
        $('#itemCount').text(storedCount);
    }


$(document).ready(function(){
    storedCount = JSON.parse(localStorage.getItem("selectedCount"));
    $('#itemCount').text(storedCount);
    $('#productname').html(localStorage.getItem("pillowKey"));
    $('#product').attr("src",localStorage.getItem("pillowPic"));
    //console.log("This is pillowPic" + " " +localStorage.getItem("pillowPic"));
    


    $('.grid div').click(function() {
        var x = parseInt($(this).attr('id'))-1;

        localStorage.setItem("pillowKey",productArray[x].productName);
        localStorage.setItem("pillowPic",productArray[x].productImage);


    });

    $('.option-input').click(function() {
        // var shapeValue = $(this).attr('value');

        for (var i = 0; i < shapeArray.length; i++) {
            if (shapeArray[i].shape == $(this).val()) {
                $('#product').attr('src',shapeArray[i].shapeImage);
            }
        }
    });

    // var selectedPillow = [];


    $('#cta').click(function() {
        updateCount();

        //define the shape that user selects as a variable
        var valueShape = $('input[name=example]:checked').val(); 

        //define the type that user selects as a variable
        var valueType = $('input[name=radios]:checked').val(); 

        var name = $('#productname').text();

        var price = $('#productprice').text();

        var img = $('#product').attr('src');

        // store the selected item 
        var item = {valueShape, valueType, name, price, img};
        var selectedItem = JSON.parse(localStorage.getItem("selectedPillow")) || [];

        selectedItem.push(item);
        localStorage.setItem("selectedPillow",JSON.stringify(selectedItem));

        
        console.log("This is selectedItem" + " " + JSON.parse(localStorage.getItem("selectedPillow")));
 
    });



    // Cart document ready, get the old localStorage item
     var oldSelectedPillow = JSON.parse(localStorage.getItem("selectedPillow")) || [];
    // var oldSelectedPillow = localStorage.getItem("selectedPillow") || [];
    console.log("oldSelectedPillow" + " " + oldSelectedPillow);


    var itemArray = [];

    for (var i=0; i < oldSelectedPillow.length; i++) {
                //$(document.createElement('div')).attr('class', 'theItem' + i);
                $('.shoppingcart').append("<div class=\"pillow\" id=\"id\"></div>");
                $('#id').attr('id', 'item' + i);


                $("#item"+i).append(
                "<img src="+oldSelectedPillow[i]['img']+" />"
                +'<h3>'+oldSelectedPillow[i]['name']+'</h3>'
                +'<p>'+oldSelectedPillow[i]['valueType']+'</p>'
                +'<p>'+oldSelectedPillow[i]['valueShape']+'</p>'
                +'<p>'+oldSelectedPillow[i]['price']+'</p>'
                +"<button class='removeBtn'>"+"Remove"+"</button>"
                )

                console.log("This is oldSelectedPillow[i]['img']" + " " + oldSelectedPillow[i]['img']);
            };

    $('.removeBtn').click(function(){

        var parent = $(this).parent();
        var deletedItem = parent.data("noPillow");
        parent.remove();
        var index = oldSelectedPillow.indexOf(deletedItem);
        oldSelectedPillow.splice(index,1);
        localStorage.setItem("selectedPillow", JSON.stringify(oldSelectedPillow));
        document.getElementById("itemCount").innerHTML = oldSelectedPillow.length;
    });

    document.getElementById("itemCount").innerHTML = oldSelectedPillow.length;

});


















