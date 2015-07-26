<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Index page</title>
<link rel="stylesheet" type="text/css" href="style.css">


</head>

<body>
<div id="header">
	<h3>Something.com</h3>
</div>
<div id="navbar">
	<ul>
		<li><a href="#main">Home</a></li>
		<li><a href="#categories">Categories</a></li>
		<li><a id='3' href="<?php session_start(); 
		if(isset($_SESSION['username'])) 
			echo 'profile.php';
			else echo 'signIN.php'; ?>">
		<?php  if(isset($_SESSION['username'])) echo 'Profile';
		else echo 'Sign in'
		 ?></a></li>
		<li><a id='4' href="<?php session_start(); 
		if(isset($_SESSION['username'])) 
			echo '../core/logout.php';
			else echo 'reg.php'; ?>
		"><?php  if(isset($_SESSION['username'])) echo 'Logout';
		else echo 'Register';
		 ?></a></li>
		
		
	</ul>
</div>
 




    

<div class="rightbar">
Search: <input type="text" > 
<button class="itemSearch" >Search</button>	
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
<script src="http://localhost/blah/public/js/myjs.js"></script>
<script src="http://localhost/blah/public/js/jquery.cookie.js"></script>

</body>

</html>