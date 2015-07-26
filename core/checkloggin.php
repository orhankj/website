<?php
session_start();



if(isset($_POST['username'])) { 
    $myusername=$_POST['username'];
}

if(isset($_POST['password'])) { 
   $mypassword=$_POST['password'];
}
 $info="qwe";
 $result=0;
ComparePass(create_hash($mypassword),$myusername);
 
 function create_hash($pass)
{
	$salt= 'eO32JHo7EN<%q!Pz*';
	$salt=hash('sha256',$salt);
	$pass = hash('sha256',$pass.$salt);

	return $pass;
	
}
 
function ComparePass($pass,$user)
 {

	 $mysqli = new mysqli('localhost', 'root', 'root', 'products');

   if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }
 $query = "SELECT firstname,lastname,email,adress,phone FROM users where username=? AND password=?";
if ($stmt = $mysqli->prepare($query)) 
{
$stmt->bind_param("ss",$user,$pass);
   $stmt->execute();
  
  if (!$stmt) { 
    die('Invalid query: ' . mysql_error());
}
    $result = $stmt->get_result();
   
 if ($result->num_rows > 0){

   $numrows= $stmt->num_rows;
  $info = $result->fetch_array(MYSQLI_ASSOC);

$token = bin2hex(openssl_random_pseudo_bytes(16));



  $array=array_chunk($info, 7);
  $_SESSION["username"] = $user;
  $_SESSION["password"] = $pass;
  $_SESSION["email"] = $array[0][2];
  $_SESSION["firstname"] = $array[0][0];
  $_SESSION["lastname"] = $array[0][1];
  $_SESSION["adress"] = $array[0][3];
  $_SESSION["phone"] = $array[0][4];

header('location: ../public/index.php');
} 
else header('location: ../public/signIN.php');

 $stmt->close();
 $mysqli->close();
  
}

   
}
?>