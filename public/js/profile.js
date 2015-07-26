$(document).ready(function(){
         
          var totalPrice=0;
          var productsInCart='';
          var Userinfo=new Array();
      
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
        
    
$('#RegDiv').submit(function(){
  
  var user= $("input[name='username']").val();
  var pass=$("input[type='password']").val();
  var email=$('input[name="email"]').val();
  var fName=$("input[name='firstName']").val();
  var lName=$("input[name='LastName']").val();
  var NewPass=$("input[name='']").val();
  var ConfirmPass=$("input[name='']").val();
  var adress=$('textarea[name="Address"]').val();
  var phone=$("input[name='phone']").val();
  var newp=$("input[name='newPass']").val();
  var confP=$("input[name='confirmPass']").val();
return ValidateUserInfo(pass,newp,confP,fName,lName,adress,email,phone);
 
 });

function ValidateUserInfo(Password,newPass,ConfirmPass,firstName,LastName,Address,email,phone)
 {
   var reg=new RegExp('[0-9]{2}');   var name=new RegExp('^[a-zA-Z ]+$');
  var phonereg=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  if(Password)
   {
       if(Password.length<8 ){
    
       $("#PassError").text('Password must be over 7 characters long!');
       return false;
      }
      else
        {
          $("#PassError").text('');
        }
  
      if( Password.toLowerCase()==Password || Password.toUpperCase()==Password)
     {
     $("#PassError").text('Password must contain both lower and upper case characters!');
     return false;
     }
     else
        {
          $("#PassError").text('');
        }
     
     
 
      if (!reg.test(Password))
         {
               $("#PassError").text('Password must contain at least 2 digits');
               return false;
               
         }
          else
        {
          $("#PassError").text('');
        }

       /////////////////////////////
       if(newPass.length<8 ){
    
       $("#Pass2Error").text('Password must be over 7 characters long!');
       return false;
      }
      else
        {
          $("#Pass2Error").text('');
        }
  
      if( newPass.toLowerCase()==newPass || newPass.toUpperCase()==newPass)
     {
     $("#Pass2Error").text('Password must contain both lower and upper case characters!');
     return false;
     }
     else
        {
          $("#Pass2Error").text('');
        }
     
     
 
      if (!reg.test(newPass))
         {
               $("#Pass2Error").text('Password must contain at least 2 digits');
               return false;
               
         }
          else
        {
          $("#Pass2Error").text('');
        } 
       
       /////////////////////////////////////
           if(ConfirmPass.length<8 ){
    
       $("#Pass3Error").text('Password must be over 7 characters long!');
       return false;
      }
      else
        {
          $("#Pass3Error").text('');
        }
  
      if( ConfirmPass.toLowerCase()==ConfirmPass || ConfirmPass.toUpperCase()==ConfirmPass)
     {
     $("#Pass3Error").text('Password must contain both lower and upper case characters!');
     return false;
     }
     else
        {
          $("#Pass3Error").text('');
        }
     
     
 
      if (!reg.test(ConfirmPass))
         {
               $("#Pass3Error").text('Password must contain at least 2 digits');
               return false;
         }
          else
        {
          $("#Pass3Error").text('');
        } 
       
       if (newPass!==ConfirmPass)
         {
               $("#Pass3Error").text("Passwords don't match!");
               return false;
         }
          else
        {
          $("#Pass3Error").text('');
        } 



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