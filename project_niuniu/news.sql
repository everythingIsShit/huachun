SET NAMES UTF8;
#ɾ�����ݿ�news������ڵĻ�
DROP DATABASE IF EXISTS news;
CREATE DATABASE news CHARSET=UTF8;
USE news;

CREATE TABLE new_category(
	cid INT PRIMARY KEY,
        cname VARCHAR(32)
);
INSERT INTO new_category VALUES
(10, '����'),
(20, '����'),
(30, '�');

CREATE TABLE title(
	tid INT PRIMARY KEY AUTO_INCREMENT,
        tname VARCHAR(32),
        tcategory VARCHAR(32),
        birthday BIGINT,
        content VARCHAR(10000),
        categoryId INT,
        author VARCHAR(16)
);
INSERT INTO title VALUES
(NULL, '��ţţ��ٿơ�ţţ��Ϸȫ����','���ѡ','1234567890','ţţ��һ�ּ�ȴ�ַǳ�����˼��������Ϸ,������Դ���ҹ��㶫�������ͺ�����ʡ����һ��ط���ʮ�㡢��Ϸ�ٶȼ��졢�̼������յ���
����Ϸ��ţţ������Ϸ����ͬʱ��2--6���棬��Ҫ�ǲ���һ���˿������е�52��(��ȥ��С��)����һ�ֵ�ׯ�������
����������ÿ�ֵ�ׯ������һ����Ϸ�е�Ӯ�ң�ÿ����Ϸϵͳ�Զ�ϴ�ƺ�5���ƾ��ȷָ�����λ��ҡ�����õ�
�ƺ����һ������Ϸ�������������ϣ�ׯ�Һ��м����ν��д�С�ȽϴӶ�����ʤ�������ͱȽϣ�ʮС > �廨 > �Ļ� > ţ
ţ > �з� > û�֣������Ƚϣ�ţ9 > ţ8 > ţ7 > ţ6 > ţ5 > ţ4 > ţ3 > ţ2 > ţ1��','20','A');

