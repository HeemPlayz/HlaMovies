

<?php
if (empty($_POST['user']) || empty($_POST['pass'])) {
 
 echo "يرجى ملء كافة الحقول";
} else { 

   $db_name="test";
  


 mysql_connect("localhost","root","123lizer155411+2211");
mysql_select_db($db_name); 
 $result=mysql_query("SELECT  *  FROM `".$db_name."`.`users_info` WHERE `user` = '".$_POST['user']."' AND `pass` = '".$_POST['pass']."' ");
$result_a=mysql_fetch_assoc($result);
    
   
if ($result_a==0)
{
 echo "هناك خطأ في اسم المستخدم او كلمة السر";
} else {
 
 
  header("Location: welcome.html");
   
 
}
   

  
}
?>