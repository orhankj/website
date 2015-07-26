$(document).ready(function(){
         
          var totalPrice=0;
          var productsInCart='';
          
      
  restoreCart();







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
        
     

 
 






$('#reg').submit(function(){
  
  var user= $("input[name='username']").val();
  var pass=$("input[type='password']").val();
  var email=$('input[name="email"]').val();
  var fName=$("input[name='firstName']").val();
  var lName=$("input[name='LastName']").val();
  var NewPass=$("input[name='']").val();
  var ConfirmPass=$("input[name='']").val();
  var adress=$('textarea[name="Address"]').val();
  var phone=$("input[name='phone']").val();

return ValidateUserInfo(user,pass,fName,lName,adress,email,phone);
 
 });



function ValidateUserInfo(Username,Password,firstName,LastName,Address,email,phone)
 {
   var reg=new RegExp('[0-9]{2}');   var name=new RegExp('^[a-zA-Z ]+$');
var phonereg=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

      if(Username.length < 5 )
      {
     
       $("#User2Error").text('Username must be over 4 characters long!');
       return false;
      }
       else
        {
          $("#User2Error").text('');
        }
       if(Password.length<8 ){
    
       $("#Pass2Error").text('Password must be over 7 characters long!');
       return false;
      }
      else
        {
          $("#Pass2Error").text('');
        }
      

     if(!(Username.substring(0,1).charCodeAt(0)>64 && Username.substring(0,1).charCodeAt(0)<91) && !(Username.substring(0,1).charCodeAt(0)>97 && Username.substring(0,1).charCodeAt(0)<122) )
     {
         
          $("#UserError").text('Username must start with a character!');
       return false;
     }
     else
        {
          $("#UserError").text('');
        }
  
      if( Password.toLowerCase()==Password || Password.toUpperCase()==Password)
     {
     $("#Pass2Error").text('Password must contain both lower and upper case characters!');
     }
     else
        {
          $("#Pass2Error").text('');
        }
     
      if( Username.includes("'") || Username.includes('"') )
     {
      $("#UserError").text('Username cannot contain quoates!');
     }
     else
        {
          $("#UserError").text('');
        }
 
      if (!reg.test(Password))
         {
               $("#Pass2Error").text('Password must contain at least 2 digits');
               
         }
          else
        {
          $("#Pass2Error").text('');
        }

      
       if (!email)
        {
          $("#MailError").text('Incorrect Email adress!');
          
          return false;
        }
          else 
        {
     
          $("#MailError").text('');
        }
       



      if (firstName.length<2 || !(name.test(firstName)))
        {
          $("#NameError").text('Names can only contain characters!');
          
          return false;
        }
          else
        {
          
          $("#NameError").text('');
        }

       if (LastName.length<2 || !(name.test(LastName)))
        {
          $("#LastNameError").text('Names can only contain characters!');
          
          return false;
        }
          else
        {
          
          $("#LastNameError").text('');
        }
        if (!(phonereg.test(phone)))
        { 
          $("#PhoneError").text('Incorrect phone number!');
          return false;
        }
        else
        {
          $("#PhoneError").text('');
        }

        if (Address.length<6)
        {
          $("#AdressError").text('Address must be longer than 5 characters!');
          
          return false;
        }
          else
        {
          
          $("#AdressError").text('');
        }
 
        
      

      


         return true;
 

 }

$('#CheckOut').click(function()
{

   var cookie='';
  cookie=$.cookie("Derulo"); 
 cookie=cookie.substring(cookie.indexOf("null"));
 var arr= cookie.split(',');
  var json=JSON.stringify(arr);
});




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














});