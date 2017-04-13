<?php
header('Content-Type:application:json;charset=UTF-8');
@$pageNum=$_REQUEST['pageNum'];
@$categoryId=$_REQUEST['categoryId'];
if($pageNum===null){
    $pageNum=1;
}else{
    $pageNum=intval($pageNum);
}
$output = [
	'recordCount' => 0,	//满足条件的记录的总数
	'pageSize' =>10,	//页面大小，每页最多显示的记录数
	'pageCount' => 0, //总的页数
	'pageNum' => $pageNum,	//当前显示的页号
	'data'=>null	//当前页中的数据
];
$conn=mysqli_connect('127.0.0.1','root','root','majiang_news',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
//SQL1: 查询总的记录数量
if($categoryId==='all'){//加载全部的数量
    $sql = "SELECT COUNT(*) FROM title WHERE categoryId='10' or categoryId='20' or categoryId='30'";
}else{
     $sql = "SELECT COUNT(*) FROM title WHERE categoryId='$categoryId'";
}
$result = mysqli_query($conn, $sql);

//COUNT(*)结果集中有一行一列的数据
$output['recordCount'] = intval( mysqli_fetch_row($result)[0] );
//计算出总页数
$output['pageCount'] = ceil($output['recordCount'] / $output['pageSize'] );
//从哪一行记录开始读取
$start = $output['recordCount']-($output['pageNum'])*$output['pageSize'];
//如果$start变成负数
if($start<0){
        $count = $output['pageSize']+$start;
        $start=0;
        if($categoryId==='all'){
            $sql = "SELECT * FROM title WHERE categoryId='10' or categoryId='20' or categoryId='30' LIMIT $start,$count";
        }else{
            $sql = "SELECT * FROM title WHERE categoryId='$categoryId' LIMIT $start, $count";
        }
}else{
//一次最多读取的记录数量
    $count = $output['pageSize'];
    if($categoryId==='all'){
         $sql = "SELECT * FROM title WHERE categoryId='10' or categoryId='20' or categoryId='30' LIMIT $start,$count";
    }else{
         $sql = "SELECT * FROM title WHERE categoryId='$categoryId' LIMIT $start, $count";
    }
}
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result,1);
echo json_encode($output);
