$(document).ready(function(){
          var allProducts;
          var totalPrice=0;
          var productsInCart='';
          var Comments=[];var log;
      
  restoreCart();



var counter=false //checks if no matches found
$('.itemSearch').click(function(){
  
  
  });

//add to cart



// Remove from cart

$('.CartBar').on('click', '.removeProduct', function() {
      var par= $(this).parent();
       var price=par.text().substring(par.text().lastIndexOf(" "),par.text().indexOf("$"));
       var quantity= par.text().substring(0,par.text().indexOf('x'));
       var name= par.text().substring(par.text().indexOf('x')+1,par.text().lastIndexOf(' '));
   name=name.trim();price=price.trim();quantity=quantity.trim();
       var Product=quantity+"&"+name+"&"+price+"&";
    $.cookie("Derulo",RemoveProductFromCookie("Derulo",Product),{ expires: 7 }); 
    if(totalPrice>=0){totalPrice-=price;
         $('.totalPrice').text('totalPrice:'+totalPrice+'$');}
         else
         { $('.totalPrice').text('totalPrice:'+0+'$');}
     par.remove();});

function restoreCart(){
 
 var json='';
  json=$.cookie("Derulo"); 
 json=json.substring(json.indexOf("null"));
 var arr= json.split(',');

 for (var i=0;i<arr.length;i++) {

  if(arr[i].length>4){
    var subarray=arr[i].split('&');
      var name=subarray[1];
      var price=subarray[2]; 
      var quantity=subarray[0];

   totalPrice+=parseInt(price.trim());

    $('.totalPrice').before("<div class='cartProduct'>"+quantity+"x "+name+" "+price+"$<button class='removeProduct'>x</button</div>");
    
  }
  $('.totalPrice').text('totalPrice:'+totalPrice+'$');
}}





function RemoveProductFromCookie(cookieName,UnwantedValue)
 {
   var newCookie=[];
   var oldCookie= $.cookie(cookieName);
   var matchCounter=true;
   var CookieArray = oldCookie.split(',');
   if(CookieArray[0].includes("null")){
   CookieArray=CookieArray.slice(1);}

    for(var i=0;i<CookieArray.length;i++)
    { 
     
     if(CookieArray[i].localeCompare(UnwantedValue)==0 && matchCounter)
      {   matchCounter=false;}
             else { newCookie[i]=CookieArray[i]; }
        } 
 return newCookie;}
        
     

 
 








$('form').submit(function(){
  var user= $("input[name='username']").val();
  var pass=$("input[type='password']").val();


 return ValidateUserInfo(user,pass);
 
 });


function ValidateUserInfo(Username,Password,firstName,LastName,Address,CardNum,CardSec)
 {
   var reg=new RegExp('[0-9]{2}');
   
  if(arguments.length==2)
  {
      if(Username.length < 5 ){
    
       $("#UserError").text('Username must be over 4 characters long!');
       return false;
      }

       if(Password.length<8 ){
    
       $("#PassError").text('Password must be over 7 characters long!');
       return false;
      }
      

     if(!(Username.substring(0,1).charCodeAt(0)>64 && Username.substring(0,1).charCodeAt(0)<91) && !(Username.substring(0,1).charCodeAt(0)>97 && Username.substring(0,1).charCodeAt(0)<122) )
     {
           
          $("#UserError").text('Username must start with a character!');
       return false;
     }
  
      if( Password.toLowerCase()==Password || Password.toUpperCase()==Password)
     {
     $("#PassError").text('Password must contain both lower and upper case characters!');
     }
     
      if( Username.includes("'") || Username.includes('"') )
     {
      $("#UserError").text('Username cannot contain quoates!');
     }
 
      if (!reg.test(Password))
         {
               $("#PassError").text('Password must contain at least 2 digits');
               
         }
         return true;
  }
  else if(arguments.length==7)
  { 

      if(Username.length < 5 ){
    
       $("#UserError").text('Username must be over 4 characters long!');
       return false;
      }

       if(Password.length<8 ){
    
       $("#PassError").text('Password must be over 7 characters long!');
       return false;
      }
      

     if(!(Username.substring(0,1).charCodeAt(0)>64 && Username.substring(0,1).charCodeAt(0)<91) && !(Username.substring(0,1).charCodeAt(0)>97 && Username.substring(0,1).charCodeAt(0)<122) )
     {
           
          $("#UserError").text('Username must start with a character!');
       return false;
     }
  
      if( Password.toLowerCase()==Password || Password.toUpperCase()==Password)
     {
     $("#PassError").text('Password must contain both lower and upper case characters!');
     }
     
      if( Username.includes("'") || Username.includes('"') )
     {
      $("#UserError").text('Username cannot contain quoates!');
     }
 
      if (!reg.test(Password))
         {
               $("#PassError").text('Password must contain at least 2 digits');
               
         }
        
      if (!CardNum.isNumber() && !CardNum.length!==8) return false;
      if (!CardSec.isNumber() && (!CardSec.length<3 || !CardSec.length>5)) return false;
         return true;
  }

 }




//creates new page



//removes all products and creates new page for one product using its hash




$('#CheckOut').click(function()
{

   var cookie='';
  cookie=$.cookie("Derulo"); 
 cookie=cookie.substring(cookie.indexOf("null"));
 var arr= cookie.split(',');
  var json=JSON.stringify(arr);
});



















});