<?php
header('Content-Type:application/json;charset=UTF-8');
@$tid=$_REQUEST['tid'] or die("{'code':1,'msg':'tid required'}");
$conn=mysqli_connect('127.0.0.1:8080','root','root','news',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM title WHERE tid='$tid'";
$result=mysqli_query($conn,$sql);
if($result===null){
    echo "����sql���".$sql;
    die();
}else{
    $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
}
echo json_encode($list);