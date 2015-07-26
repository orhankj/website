<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Index page</title>
<link rel="stylesheet" type="text/css" href="profile.css">

</head>

<body  >
<div id="header">
	<h3>Something.com</h3>
</div>
<div id="navbar">
	<ul>
		<li><a href="index.php">Home</a></li>
		<li><a href="">Categories</a></li>
		<li><a href="profile.php">Profile</a></li>
		<li><a  href="../core/logout.php">Logout</a></li>
		
		
	</ul>
</div>


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


<div class="container">
<div id='RegDiv'>
 <form id='reg' method="POST" action="../core/updateProfile.php">

 <label class='user'><span>Email</span><input type='email' name='email' value="<?php session_start(); echo   $_SESSION["email"];?>"> <p id='MailError'></p></label>
 <label class='user'><span>First Name</span><input name='firstName' value="<?php  echo   $_SESSION["firstname"];?>"><p id='NameError'></p></label> 
 <label class='user'><span>Last Name</span><input name='LastName'  value="<?php  echo   $_SESSION["lastname"];?>"> <p id='LastNameError'></p></label>
 <label class='user'><span>Phone</span><input name='phone'  value="<?php  echo   $_SESSION["phone"];?>"> <p id='PhoneError'></p></label>
 <label class='user'><span id='add'>Address</span><textarea name='Address'><?php  echo   $_SESSION["adress"];?></textarea><p id='AdressError'></p></label> 
<label class='user'><span>Password</span><input name='password' type="password"> <p id='PassError'></p></label>
<label class='user'><span>New Password</span><input name='newPass' type="password"> <p id='Pass2Error'></p></label>
<label class='user'><span>Confirm Password</span><input name='confirmPass' type="password"> <p id='Pass3Error'></p></label>
 <button class='loginBtn' type='submit'>Save</button></form></div>



	
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
<script src="http://localhost/blah/public/js/profile.js"></script>
<script src="http://localhost/blah/public/js/jquery.cookie.js"></script>

</body>

</html>