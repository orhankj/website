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
		<li><a href="">Categories</a></li>
		<li><a href="profile.php">Profile</a></li>
		<li><a  href="../core/logout.php">Logout</a></li>
		
		
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
 <div class='LogDiv'  class='newItem'>
 <form method='POST' action="checkloggin.php">
 <label class='user'><span>Username</span><input name='username'></label>
 <p id='UserError'></p>
 <label class='user'><span>Password</span><input type='password' name='password'></label>
  <p id='PassError'></p>
 <button class='loginBtn' type='submit'>Login</button>
 </form></div>

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