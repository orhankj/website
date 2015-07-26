<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Index page</title>
<link rel="stylesheet" type="text/css" href="style.css">


</head>

<body  >

<div id="header">
	<h3>Something.com</h3>
</div>
<div id="navbar">
	<ul>
		<li><a href="index.php">Home</a></li>
		<li><a href="#categories">Categories</a></li>
		<li><a id='3' href="signIN.php">Sign in</a></li>
		<li><a id='4' href="#reg">Register</a></li>
		
		
	</ul>
</div>
 

<div class="CartBar">
<h2>Cart</h2>
<div id="cart">
	<div class='totalPrice'>Total cost:</div>
	<button id="CheckOut">Check out</button> 
</div>
</div>


<div>
	<img class="imgsidebar" src="images/Orange_flame_tulip.jpg">
</div>
 

<div class="container" >
 <div id='RegDiv'>
 <form id='reg' method='POST' action='../core/register.php'>
 <label class='user'><span>Username</span><input name='username'><p id='User2Error'></p></label> 
 <label class='user'><span>Password</span><input type='password' name='password'><p id='Pass2Error'></p></label> 
 <label class='user'><span>Email</span><input type='email' name='email'><p id='MailError'></p></label>
 <label class='user'><span>First Name</span><input name='firstName'> <p id='NameError'></p></label>
 <label class='user'><span>Last Name</span><input name='LastName'><p id='LastNameError'></p></label>
 <label class='user'><span>Phone</span><input name='phone'><p id='PhoneError'></p></label>
 <label class='user'><span id="add">Address</span><textarea name='Address'></textarea><p id='AdressError'></p></label>
 <button class='loginBtn' type='submit'>Register</button></form></div>


</div>


<div id="footer">
	<ul>
		<li><a href="">About</a></li>
		<li><a href="">Blah</a></li>
		<li><a href="">Meh</a></li>
	</ul>
	&copy Something.com. All rights reserved!
</div>
<script src="js/jquery-2.1.1.js"></script>
<script src="http://localhost/blah/public/js/reg.js"></script>
<script src="http://localhost/blah/public/js/jquery.cookie.js"></script>

</body>

</html>