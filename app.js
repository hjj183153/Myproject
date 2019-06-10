//引入expres
const express=require('express');
//引入路由
const userRouter=require('./routers/user.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//创建服务器
var server=express();
//创建端口
server.listen(8080);
//托管静态资源到public下
server.use(express.static('public'));
//使用body-parser中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由
server.use('/user',userRouter);
