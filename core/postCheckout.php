<?php

if(isset($_REQUEST['json'])) { 
    $data=$_REQUEST['json'];
}
echo $data;


 

 
function ComparePass()
 {
	 $mysqli = new mysqli('localhost', 'root', 'root', 'products');

   if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }
 $query = "SELECT * FROM users where username=? AND password=?";



}


 
?>