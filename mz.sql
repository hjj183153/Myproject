SET NAMES UTF8;
DROP DATABASE IF EXISTS mz;
CREATE DATABASE mz CHARSET=UTF8;
USE mz;
CREATE TABLE mz_user(
	uid INT,
	uname VARCHAR(10),
	upwd VARCHAR(10),
	phone VARCHAR(11),
	email VARCHAR(16),
	gender INT
	/*1代表男，0代表女*/
);
INSERT INTO mz_user VALUES(1,"tom","123456","17728839910","166666@qq.com",1);
