<?php
header('Content-Type:application:json;charset=UTF-8');
@$pageNum=$_REQUEST['pageNum'];
if($pageNum===null){
    $pageNum=1;
}else{
    $pageNum=intval($pageNum);
}
$output = [
	'recordCount' => 0,	//���������ļ�¼������
	'pageSize' =>10,	//ҳ���С��ÿҳ�����ʾ�ļ�¼��
	'pageCount' => 0, //�ܵ�ҳ��
	'pageNum' => $pageNum,	//��ǰ��ʾ��ҳ��
	'data'=>null	//��ǰҳ�е�����
];
$conn=mysqli_connect('127.0.0.1','root','root','majiang_news',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
//SQL1: ��ѯ�ܵļ�¼����

$sql = "SELECT COUNT(*) FROM title WHERE categoryId='40'";

$result = mysqli_query($conn, $sql);

//COUNT(*)���������һ��һ�е�����
$output['recordCount'] = intval( mysqli_fetch_row($result)[0] );
//�������ҳ��
$output['pageCount'] = ceil($output['recordCount'] / $output['pageSize'] );
//����һ�м�¼��ʼ��ȡ
$start = $output['recordCount']-($output['pageNum'])*$output['pageSize'];
//���$start��ɸ���
if($start<0){
        $count = $output['pageSize']+$start;
        $start=0;

         $sql = "SELECT * FROM title WHERE categoryId='40'";

}else{
//һ������ȡ�ļ�¼����
    $count = $output['pageSize'];
    $sql = "SELECT * FROM title WHERE categoryId='40'";

}
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result,1);
echo json_encode($output);
