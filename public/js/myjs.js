$(document).ready(function(){
          var allProducts;
          var totalPrice=0;
          var productsInCart='';
          var Comments=[];var log;
          
  restoreCart();

CommentsAjax();

/////////////// Ajax for all products

  var request=$.ajax({
  url: 'http://localhost/blah/core/log.php',
  async:   false,
         cache:   false,
  type: 'GET',
   data: {
      format: 'json'
   },
  
   dataType: 'json',
   success: function(data) 
   { 
    allProducts=data;
        
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
          var rating=data[key].rating;
          var name=data[key].name;
          var price =data[key].price;
          var quantity =data[key].quantity;
          var imgid =data[key].imgid;
                                         $('.container').append("<div class='product' class='newItem'><a href='#PR"+name+"'><img class='productimg' src=images/"+imgid+"><div class='name'>"+name+"</div><div class='price'>price:$"+price+"</div><div class='quantity'>avaiable:"+quantity+"<div class='rating'>rating:"+rating+"</div></div></a><button class='addtoCart'>Add to cart</button><input class='amount' type='text'></div>");
      }}}});


/////////
PageLoader();
var counter=false //checks if no matches found
$('.itemSearch').click(function(){
  
  var name=$('.rightbar input').val();
   $('.container').find('*').hide();
  for (var key in allProducts) {
     
      if (allProducts.hasOwnProperty(key)) {
     
       var prname= allProducts[key].name;
         if( prname.indexOf(name) !== -1)
         {
            counter=true;
            var productname=allProducts[key].name;var rating=allProducts[key].rating;
          var price =allProducts[key].price;
          var quantity =allProducts[key].quantity;
          var imgid =allProducts[key].imgid;
           
        $('.container').append("<div class='product' class='newItem'><a href='#PR"+productname+"'><img class='productimg' src=images/"+imgid+"><div class='name'>"+name+"</div><div class='price'>price:$"+price+"</div><div class='quantity'>avaiable:"+quantity+"<div class='rating'>rating:"+rating+"</div></div></a><button class='addtoCart'>Add to cart</button><input class='amount' type='text'></div>");
                   

         }}}
       
       if(!counter){ $('.container').append('<h2>No matches found!</h2>');}

  });

//add to cart

$('.container').on('click', '.addtoCart', function() {

    var par= $(this).parent(); 
    var  name= par.find('.name').text(); 
   
      var price= par.find('.price').text();
     var quantity=par.find('.amount').val();
     var newprice= price.substring(7);  //because price has string for the 1st 7 chars
     var avaiable= par.find('.quantity').text();
     var avaiable=avaiable.substring(9);

     if(quantity ==parseInt(quantity) && quantity>0  && parseInt(quantity)<=avaiable)
     {
     var newquntity=parseInt(quantity);
    price=newprice*newquntity;
    totalPrice+=price;
    var Product=quantity+"&"+name+"&"+price+"&";
    $.cookie("Derulo",$.cookie("Derulo")+ ","+ Product,{ expires: 7 });  
    $('.totalPrice').text('totalPrice:'+totalPrice+'$');
    $('.totalPrice').before("<div class='cartProduct'>"+newquntity+"x "+name+" "+price+"$<button class='removeProduct'>x</button</div>");}
    else alert('Invalid amount, please enter positive number that is less than the avaiable amount.');
    
   });

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
        
     

 
 $(window).bind( 'hashchange', function(e) {
        var hash=window.location.hash;
        PageLoader();

  });












//creates new page
function PageLoader(){
    var hash=window.location.hash;
     if(hash.includes('#PR'))
        {

           SinglePageProduct(hash)

        }
          else {    
            switch(window.location.hash){
            case '#signin': LoadSignIn();break;
            case '#reg': RegForm();break;
            case '#categories': break;
            case '#userinfo': break;
            case '#logout':LogoutUser();  break;
          
            default:
                
              $('.container').empty(); 
              restoreMain(); 
 
            break;
          }}
        }


//removes all products and creates new page for one product using its hash
function SinglePageProduct(hash)
  {
            
          var name= hash.substring(3);
         if(!allProducts) // On refresh
         {
             
             $('.container').empty();
            
            request.abort();
            var arr= $.cookie(name);
            arr=arr.split('&');
            $('.container').append("<div class='product' class='newItem'><img class='productimg' src=images/"+arr[3]+"><div class='name'>"+arr[0]+"</div><div class='price'>price:$"+arr[1]+"</div><div class='quantity'>avaiable:"+arr[2]+"<div class='rating'>rating:"+arr[4]+"</div></div><button class='addtoCart'>Add to cart</button><input class='amount' type='text'></div>");
            $('.container').append("<div class='Comments'><div class='user'></div><div class='date'></div><div clas='comment'></div> </div>");
           
      for(var i=0;i<Comments.length;i++)
            {var eachComm=Comments[i].split('&');
             
              if(eachComm[0]==arr[0])
                  $('.Comments').append("<div class='SingleComment'><div class='username'>"+eachComm[1]+"</div><div class='date'>"+eachComm[3]+"</div><div clas='commentText'>"+eachComm[2]+"</div> </div>");
            }
            
              
               
            }
       
            
        else  $('.container').empty(); // on new load of page
          for (var key in allProducts) 
        {

      if (allProducts.hasOwnProperty(key)) 
        {
           
       var prname= allProducts[key].name;
         if( prname.indexOf(name) !== -1)
         {  
        
            var productname=allProducts[key].name;var rating=allProducts[key].rating;
          var price =allProducts[key].price;
          var quantity =allProducts[key].quantity;
          var imgid =allProducts[key].imgid;

          var product=productname+"&"+price+"&"+quantity+"&"+imgid+"&"+rating;
          $.cookie(name,product,{ expires: 7 });
      $('.container').append("<div class='product' class='newItem'><img class='productimg' src=images/"+imgid+"><div class='name'>"+productname+"</div><div class='price'>price:$"+price+"</div><div class='quantity'>avaiable:"+quantity+"<div class='rating'>rating:"+rating+"</div></div><button class='addtoCart'>Add to cart</button><input class='amount' type='text'></div>");
            $('.container').append("<div class='Comments'><div class='user'></div><div class='date'></div><div clas='comment'></div> </div>");
        
         for(var j=0;j<Comments.length;j++)
            {
              
               var eachComm=Comments[j].split('&');
              if(eachComm[0].trim()==productname.trim())
              {
               
                    $('.Comments').append("<div class='SingleComment'><div class='username'>"+eachComm[1]+"</div><div class='date'>"+eachComm[3]+"</div><div clas='commentText'>"+eachComm[2]+"</div> </div>");
            
              }
 

          }    
       
          }
         }
       }
 }


function CommentsAjax() {
  
  $.ajax({
              url: 'http://localhost/blah/core/comments.php',
               async:   false,
           cache:   false,
  type: 'GET',
   data: {
      format: 'json'
   },
  
   dataType: 'json',
   success: function(data) 
   { 
           
      for (var key in data) { 

      if (data.hasOwnProperty(key)) {
          var name=data[key].ProductName;
          var user=data[key].Username;
          var text =data[key].CommentText;
          var date =data[key].date;
          var whole=name+"&"+user+"&"+text+"&"+date;
        Comments.push(whole);
      }}

    }});
  
    }
  
  
function restoreMain(){

  for (var key in allProducts) {
     
      if (allProducts.hasOwnProperty(key)) {
             
 $('.container').append("<div class='product' class='newItem'><a href='#PR"+allProducts[key].name+"'><img class='productimg' src=images/"+allProducts[key].imgid+"><div class='name'>"+allProducts[key].name+"</div><div class='price'>price:$"+allProducts[key].price+"</div><div class='quantity'>avaiable:"+allProducts[key].quantity+"<div class='rating'>rating:"+allProducts[key].rating+"</div></a></div><button class='addtoCart'>Add to cart</button><input class='amount' type='text'></div>");

         }}

}




$('#CheckOut').click(function()
{

   var cookie='';
  cookie=$.cookie("Derulo"); 
 cookie=cookie.substring(cookie.indexOf("null"));
 var arr= cookie.split(',');
  var json=JSON.stringify(arr);


});
















});