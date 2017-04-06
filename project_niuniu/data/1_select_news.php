<?php
header('Content-Type:application/json;charset=UTF-8');
$conn=mysqli_connect('127.0.0.1','root','root','news',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM title";
$result=mysqli_query($conn,$sql);
if($result===null){
    echo "请检查sql语句".$sql;
    die();
}else{
    $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
}
echo json_encode($list);