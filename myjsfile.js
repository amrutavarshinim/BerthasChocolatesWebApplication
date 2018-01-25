var proj4_data;
/*code by Amruta Varshini
code by jadrn038*/

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn038/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn038");
    $('#count').text(cart.size());


    $('#milk').on('click', function() {
        display_milk_chocolate();
        })
    
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";       
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";     
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";          
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
        });

    $('#truffles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"'/>";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
        })

    $('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";  
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
        })

    $('#holidays').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
        })

        
    $(document).on('click', '.buy', function() {  
        var sku = this.id;
        cart.add(sku,1);
        $('#count').text(cart.size());
        $(this).next().fadeIn(50).fadeOut(2000);
        });            

    });     

    
function display_milk_chocolate() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<h3><u>"+proj4_data[i][2]+"</u></h3><br />"
            tmpString += "<h4>"+proj4_data[i][3]+"!</h4><br />"
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\" class=\"img-thumbnail\" /><br />"; 
            tmpString += "<h4>$"+proj4_data[i][6]+"</h4><br />";       
            tmpString += "<h4>Description: "+proj4_data[i][4]+"</h4><br />";
            tmpString += "<input type='image' src=\"add_cart.jpg\" width=\"150\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";                
                }
            }
        var handle = document.getElementById('tabcontent');
        handle.innerHTML = tmpString;
    }      

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
        display_milk_chocolate();
    } 
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     

