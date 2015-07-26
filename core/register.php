<?php

if(isset($_POST['username'])) { 
    $myusername=$_POST['username'];
}

if(isset($_POST['password'])) { 
   $mypassword=$_POST['password'];
}
if(isset($_POST['firstName'])) { 
    $firstName=$_POST['firstName'];
}

if(isset($_POST['LastName'])) { 
   $LastName=$_POST['LastName'];
}
if(isset($_POST['Address'])) { 
    $Address=$_POST['Address'];
}
if(isset($_POST['phone'])) { 
    $phone=$_POST['phone'];
}

if(isset($_POST['email'])) { 
   $email=$_POST['email'];
}

   $mysqli = new mysqli('localhost', 'root', 'root', 'products');

   if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }
 $query = "SELECT * FROM users where username=?";

if ($stmt = $mysqli->prepare($query)) 
{

$stmt->bind_param("s",$myusername);
   $stmt->execute();
  
  if (!$stmt) { 
    die('Invalid query: ' . mysql_error());
}
    $result = $stmt->get_result();

 if ($result->num_rows <1)
 {
   

$query2 = "INSERT INTO `products`.`users` (`username`, `password`, `firstname`, `lastname`, `email`, `adress`,`phone`, `reg_date`) VALUES ( ?, ?,?,?,?,?,?, CURRENT_TIMESTAMP)";
$hashedpass=create_hash($mypassword);

if ($stmt2 = $mysqli->prepare($query2)) 
{
$stmt2->bind_param("sssssss",$myusername,$hashedpass,$firstName, $LastName,$email,$Address, $phone);
   $stmt2->execute();
  
  if (!$stmt2) { 
    die('Invalid query: ' . mysql_error());
}
header("location: ../public/signIN.php");
}


}





}


function create_hash($pass)
{
  $salt= 'eO32JHo7EN<%q!Pz*';
  $salt=hash('sha256',$salt);
  $pass = hash('sha256',$pass.$salt);
  
  return $pass;
  }

?>