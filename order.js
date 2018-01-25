var cartArray;
var dataArray;
var cartSize;
/*code by Amruta Varshini*/
/*code by jadrn038*/
$(document).ready( function(){
  cartArray = new Array();
  dataArray = new Array();
  var errorStatusHandle = $('#message_line');
  var elementHandle = new Array(20);
  $.get('/perl/jadrn038/get_products.cgi', storeData);
  var cart = new shopping_cart("jadrn038");
  $('#count').text(cart.size());
  elementHandle[0] = $('[name="shipping_first_name"]');
  elementHandle[1] = $("[name='shipping_last_name']");
  elementHandle[2] = $("[name='shipping_address1']");
  elementHandle[3] = $("[name='shipping_address2']");
  elementHandle[4] = $("[name='shipping_city']");
  elementHandle[5] = $("[name='shipping_state']");
  elementHandle[6] = $("[name='shipping_zip']");
  elementHandle[7] = $("[name='shipping_phone']");
  elementHandle[8] = $("[name='billing_first_name']");
  elementHandle[9] = $("[name='billing_last_name']");
  elementHandle[10] = $("[name='billing_address1']");
  elementHandle[11] = $("[name='billing_address2']");
  elementHandle[12] = $("[name='billing_city']");
  elementHandle[13] = $("[name='billing_state']");
  elementHandle[14] = $("[name='billing_zip']");
  elementHandle[15] = $("[name='billing_phone']");
  elementHandle[16] = $("[name='card_type']");
  elementHandle[17] = $("[name='card_number']");
  elementHandle[18] = $("[name='expiration_date_month']");
  elementHandle[19] = $("[name='expiration_date_year']");

  cartArray = cart.getCartArray();
  cartSize = cart.size();
  function removeItem(sku){
    $( function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Remove from Cart": function() {
          $( this ).dialog( "close" );
          cart.delete(sku);
    $('#count').text(cart.size());
    if(cartSize>0){
    cartArray = cart.getCartArray();
    $.get('/perl/jadrn038/get_products.cgi', storeData);}
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );
}
function updateQuantity(sku){
     var quantvalue = $('#'+sku).val();
     if (quantvalue == "0") {removeItem(sku);return;}
     cart.setQuantity(sku, quantvalue);
     $('#count').text(cart.size());
     cartArray = cart.getCartArray();
    $.get('/perl/jadrn038/get_products.cgi', storeData);
}
$(document).on('click', '#remove_item', function(){removeItem(this.name);});
$(document).on('blur','.quanttext',function(){updateQuantity(this.name);});

 $("#dialog-modal").dialog({
            height: 500,
            width: 700,
            modal: true,
            autoOpen: false
    });

$(document).on('click', '#checkout_button', function(){$('#dialog-modal').dialog('open');});   

$(document).on('click',$("[name='same_as_shipping']"), function(){shippingCheckbox(this.name);});
function shippingCheckbox(){
  if($("[name='same_as_shipping']").is(":checked")){
       elementHandle[8].val(elementHandle[0].val());
       elementHandle[9].val(elementHandle[1].val());
       elementHandle[10].val(elementHandle[2].val());
       elementHandle[11].val(elementHandle[3].val());
       elementHandle[12].val(elementHandle[4].val());
       elementHandle[13].val(elementHandle[5].val());
       elementHandle[14].val(elementHandle[6].val());
       elementHandle[15].val(elementHandle[7].val());
  }
  else{
       elementHandle[8].val("");
       elementHandle[9].val("");
       elementHandle[10].val("");
       elementHandle[11].val("");
       elementHandle[12].val("");
       elementHandle[13].val("");
       elementHandle[14].val("");
       elementHandle[15].val("");
  }
}  
  function isValidData(){
    if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[0].focus();
            return false;
            }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[1].focus();            
            return false;
            }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[2].focus();            
            return false;
            }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[4].focus();            
            return false;
            }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[5].focus();            
            return false;
            }
        if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[5].focus();            
            return false;
            }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[6].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
            }
        if(elementHandle[6].val().length != 5) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[6].focus();            
            return false;
            }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[7].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }
        if(elementHandle[7].val().length != 10) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number must have exactly ten digits")
            elementHandle[7].focus();            
            return false;
            }
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[8].focus();
            return false;
            }
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[9].focus();            
            return false;
            }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[10].focus();            
            return false;
            }
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[12].focus();            
            return false;
            }
        if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[13].focus();            
            return false;
            }
        if(!isValidState(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[13].focus();            
            return false;
            }
        if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[14].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[14].focus();            
            return false;
            }
        if(elementHandle[14].val().length != 5) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[14].focus();            
            return false;
            }
        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[15].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[15].focus();            
            return false;
            }
        if(elementHandle[15].val().length != 10) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The phone number must have exactly ten digits")
            elementHandle[15].focus();            
            return false;
            }
        if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter your card number");
            elementHandle[17].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The card number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[17].focus();            
            return false;
            }
        if(elementHandle[17].val().length != 16) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The card number must have exactly sixteen digits")
            elementHandle[17].focus();            
            return false;
            }
        if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter the month of expiry");
            elementHandle[18].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The month of expiry appears to be invalid, "+
            "numbers only please. ");
            elementHandle[18].focus();            
            return false;
            }
        if(elementHandle[18].val().length != 2) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The month of expiry must have exactly two digits")
            elementHandle[18].focus();            
            return false;
            }
        if(!isValidMonth(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The month of expiry must be between 1 to 12")
            elementHandle[18].focus();            
            return false;
            }
        if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter the year of expiry");
            elementHandle[19].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The year of expiry appears to be invalid, "+
            "numbers only please. ");
            elementHandle[19].focus();            
            return false;
            }
        if(elementHandle[19].val().length != 4) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The year of expiry must have exactly four digits")
            elementHandle[19].focus();            
            return false;
            }
        if(!isValidYear(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Invalid year of expiry")
            elementHandle[19].focus();            
            return false;
            }
            return true;
  }   
   $(':submit').on('click', function() {
        for(var i=0; i < 20; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        return isValidData();
        });
          
});

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        dataArray[i] = innerArray;
        }
    updateCost();
    updateDisplay();
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

function updateDisplay(){
     if (cartArray.length != 0) {
        var tmpstr = "";
        tmpstr += "<h2><u>Order Summary</u></h2>"
    for(var i=0; i<cartArray.length; i++){
      var itemSku = cartArray[i][0];

      for(var j=0; j<dataArray.length; j++){
        if(itemSku == dataArray[j][0]){

          tmpstr += "<div class=\"item_order\">";
          tmpstr += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+dataArray[j][0]+
            ".jpg\" alt=\""+dataArray[j][2]+"\" width=\"100px\" class=\"img-thumbnail\" " +
            "name=\""+dataArray[j][0]+"\" />";

          tmpstr += "<div class=\"item_title\">";
          tmpstr += dataArray[j][2];
          tmpstr += "<p class=\"item_category\">in "+dataArray[j][1]+"<br /><br /></p>";
          tmpstr += "<p>$"+dataArray[j][6]+"</p>";
          tmpstr += "</div>";

         tmpstr += "<div class=\"checkout_q\">";	
          tmpstr += "<span class=\"quantity_span\">Quantity : </span>";
          tmpstr += "<input type=\"text\" id=\""+itemSku+"\" class=\"quanttext\" name=\""+itemSku+"\" value=\""+cartArray[i][1]+"\" maxlength=\"3\" size=\"3\" /><br />";
          tmpstr += "<input type=\"image\" src=\"delete.jpg\" id=\"remove_item\" name=\""+itemSku+"\" width=\"50\" />";
          //tmpstr += "<a href=\"javascript:;\" id=\"remove_item\" name=\""+itemSku+"\">Delete</a>";
          tmpstr += "</div>";

          tmpstr += "</div><hr/>";
          var handle = document.getElementById('cartcontent');
          handle.innerHTML = tmpstr;
   }
   }
  }
 }
  else{
    tmpstr = "";
    tmpstr +="<h1>Hello Chocolate Lovers!!</h1>"
    tmpstr += "<h2>\"Please visit the products page to shop for our awesome collection of chocolates\"</h2>";
    tmpstr += "<div align=\"center\"><img src=\"love_chocolate.jpg\" alt=\"I love chocolate!\" id=\"love_chocolate\" class=\"lovechocolate\"/></div>";
    var handle = document.getElementById('cartcontent');
          handle.innerHTML = tmpstr;
  }
}

function updateCost(){
      if (cartArray.length != 0) {
      tmpstr = "";
      var tax = 0.0;
      var shipping = 0.0;
      var totalCost = 0.0;
      var totalQuantity = 0;
      for(var i=0; i<cartArray.length; i++){
       var itemSku = cartArray[i][0];
       var itemQuantity = parseInt(cartArray[i][1]);
       totalQuantity = parseInt(totalQuantity) + itemQuantity;
        for(var j=0; j<dataArray.length; j++){
          if(dataArray[j][0] == itemSku){
          var itemCost = parseFloat(dataArray[j][6]) * itemQuantity;
          totalCost += itemCost;
          }
        } 
      }
      tax = parseFloat(totalCost) * 0.08;
      tax = tax.toFixed(2);
      shipping = 2.0 * totalQuantity;
      totalCost = parseFloat(totalCost) + parseFloat(tax) + parseInt(shipping);
      totalCost = totalCost.toFixed(2);
      if (cartArray.length > 0) {
      tmpstr += "<div class=\"totalorder\">";
      tmpstr += "<h2><u>Proceed to pay</u></h2>"
      tmpstr += "<p> Total Items : " + totalQuantity +"<br>";
      tmpstr += "Total Tax : $" + tax + "<br>";
      tmpstr += "Shipping Cost : $" + shipping + "<br>";
      tmpstr += "TOTAL COST : $" + totalCost + "<br>";
      tmpstr += "<input type=\"image\" src=\"checkout.jpg\" alt =\"Proceed_checkout\" id=\"checkout_button\" width=\"200\""+
      "name=\"checkout_button\"/>";
      tmpstr += "</div>";
      var handle = document.getElementById('costcontent');
      handle.innerHTML = tmpstr;
    }
  }
  else{
    tmpstr = "";
    var handle = document.getElementById('costcontent');
    handle.innerHTML = tmpstr;
  }
}

function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 
        
function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        } 
function isValidMonth(month) {
  if (month > 0 && month < 13) {return true;}
  return false;
}

function isValidYear(year){
  if (year > 2017 && year < 3000) {return true;}
  return false;
}

