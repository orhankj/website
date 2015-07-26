<?php
session_start();
$flag=false;
if(isset($_SESSION['username'])) { 
    $myusername=$_SESSION['username'];
}
if(isset($_POST['firstName'])) { 
    $myfirstName=$_POST['firstName'];

}

if(isset($_POST['LastName'])) { 
   $myLastName=$_POST['LastName'];
}
if(isset($_POST['Address'])) { 
    $myAddress=$_POST['Address'];
}

if(isset($_POST['email'])) { 
   $myemail=$_POST['email'];
}
if(isset($_POST['phone'])) { 
   $myphone=$_POST['phone'];
}

if(isset($_POST['newPass'])) { 
   $newPass=$_POST['newPass'];
}
 
if(isset($_POST['password'])) 
{ 

    $mypassword=$_POST['password'];  
   
//Luitenica22 new pass
    if($mypassword==$_SESSION['password'])
    {
            $mypassword=create_hash($mypassword);

     ComparePass($mypassword,$myusername,$myemail,$myfirstName,$myLastName,$myAddress,$myphone,$newPass);
    }

    if($mypassword=='') {
    	    $mypassword=$_SESSION['password'];

         $flag=true;
    	ComparePass($mypassword,$myusername,$myemail,$myfirstName,$myLastName,$myAddress,$myphone,$newPass);}

 }
  
   



function updateUser($userx,$passx,$emailx,$firstnamex,$lastnamex,$adressx,$phonex)
{

$mysqli = new mysqli('localhost', 'root', 'root', 'products');

   if(mysqli_connect_errno()) 
   {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }

$query = "UPDATE users SET password=?,firstname=?,lastname=?,email=?,adress=?,phone=? WHERE username=?";
$hashedpass=create_hash($passx);
  if ($stmt = $mysqli->prepare($query)) 
   {
   	
$stmt->bind_param("sssssss",$hashedpass,$firstnamex,$lastnamex,$emailx,$adressx,$phonex,$userx);
   $stmt->execute();
    
   
 if (!$stmt) { 
    die('Invalid query: ' . mysql_error());
           }  
   }
}




function ComparePass($pass,$user,$email,$firstname,$lastname,$adress,$phone,$newPass)
 {
      
	 $mysqli = new mysqli('localhost', 'root', 'root', 'products');

   if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }
 $query = "SELECT * FROM users where username=? AND password=?";

 if ($stmt = $mysqli->prepare($query)) 
 {
 $stmt->bind_param("ss",$user,$pass);
   $stmt->execute();
  

  
  if (!$stmt) { 
    die('Invalid query: ' . mysql_error());
 }
    $result = $stmt->get_result();
   
 if ($result->num_rows > 0){

         
         if($flag==false) {
         	
         	      updateUser($user,$newPass,$email,$firstname,$lastname,$adress,$phone);
                  $_SESSION["username"] = $user;
                  $_SESSION["password"] = create_hash($newPass);
                  $_SESSION["email"] = $email;
                  $_SESSION["firstname"] = $firstname;
                  $_SESSION["lastname"] = $lastname;
                  $_SESSION["adress"] = $adress;
                  $_SESSION["phone"] = $phone;
                
              }
            if($flag==true) {
         	
         	      updateUserNOPASS($user,$email,$firstname,$lastname,$adress,$phone);
                  $_SESSION["username"] = $user;
              
                  $_SESSION["email"] = $email;
                  $_SESSION["firstname"] = $firstname;
                  $_SESSION["lastname"] = $lastname;
                  $_SESSION["adress"] = $adress;
                  $_SESSION["phone"] = $phone;
                
              }

 } 

  $stmt->close();
  $mysqli->close();
   header("location: ../public/profile.php");
 }

 }
function create_hash($pass)
{
	$salt= 'eO32JHo7EN<%q!Pz*';
	$salt=hash('sha256',$salt);
	$pass = hash('sha256',$pass.$salt);

	return $pass;
	
}

function updateUserNOPASS($userx,$emailx,$firstnamex,$lastnamex,$adressx,$phonex)
{

$mysqli = new mysqli('localhost', 'root', 'root', 'products');

   if(mysqli_connect_errno()) 
   {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }

$query = "UPDATE users SET firstname=?,lastname=?,email=?,adress=?,phone=? WHERE username=?";
$hashedpass=create_hash($passx);
  if ($stmt = $mysqli->prepare($query)) 
   {
   	
$stmt->bind_param("ssssss",$firstnamex,$lastnamex,$emailx,$adressx,$phonex,$userx);
   $stmt->execute();
    
   
 if (!$stmt) { 
    die('Invalid query: ' . mysql_error());
           }  
   }
}




?>