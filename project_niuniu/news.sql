SET NAMES UTF8;
#删除数据库news如果存在的话
DROP DATABASE IF EXISTS news;
CREATE DATABASE news CHARSET=UTF8;
USE news;

CREATE TABLE new_category(
	cid INT PRIMARY KEY,
        cname VARCHAR(32)
);
INSERT INTO new_category VALUES
(10, '公告'),
(20, '攻略'),
(30, '活动');

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
(NULL, '【牛牛大百科】牛牛游戏全攻略','活动精选','1234567890','牛牛是一种简单却又非常有意思的棋牌游戏,最早起源于我国广东、广西和湖南三省，是一款地方性十足、游戏速度极快、刺激而惊险的棋
牌游戏。牛牛棋牌游戏可以同时供2--6人玩，主要是采用一副扑克牌其中的52张(除去大小王)；第一局的庄家是随机
产生，而后每局的庄家是上一轮游戏中的赢家，每局游戏系统自动洗牌后将5张牌均匀分给给各位玩家。玩家拿到
牌后根据一定的游戏规则进行排列组合，庄家和闲家依次进行大小比较从而决定胜负。牌型比较：十小 > 五花 > 四花 > 牛
牛 > 有分 > 没分；分数比较：牛9 > 牛8 > 牛7 > 牛6 > 牛5 > 牛4 > 牛3 > 牛2 > 牛1。','20','A');

