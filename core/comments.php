<?php

header('Content-Type: application/json');
$conn = mysql_connect("localhost", "root", "root");

if (!$conn) {
    echo "Unable to connect to DB: " . mysql_error();
    exit;
}

if (!mysql_select_db("products")) {
    echo "Unable to select mydbname: " . mysql_error();
    exit;
}

$sql = "SELECT * from comments";

$result = mysql_query($sql);

if (!$result) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}

if (mysql_num_rows($result) == 0) {
    echo "No rows found, nothing to print so am exiting";
    exit;
}


while ($row = mysql_fetch_assoc($result)) {
  $products[]=$row;
}


print json_encode($products);

mysql_free_result($result);



?>