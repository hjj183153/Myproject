const express=require('express');
//引入连接池
var pool=require('../pool.js');
//创建空路由
var router=express.Router();
//添加路由
//1.用户注册路由
router.post('/register',function(req,res){
	//获取数据
	var obj=req.body;
	//判断数据是否为空
	if(!obj.uid){
		res.send('用户编号不能为空');
		return;
	}
	if(!obj.uname){
		res.send('用户名不能为空');
		return;
	}
	if(!obj.upwd){
		res.send('用户密码不能为空');
		return;
	}
	if(!obj.phone){
		res.send('电话号码不能为空');
		return;
	}
	if(!obj.email){
		res.send('用户邮箱不能为空');
		return;
	}
//	if(!obj.gender){
//		res.send('用户性别不能为空');
//		return;
//	}
	pool.query('insert into mz_user set uid=?,uname=?,upwd=?,phone=?,email=?,gender=?',[obj.uid,obj.uname,obj.upwd,obj.phone,obj.email,obj.gender],function(err,result){
		if(err){throw err;}
		if(result.affectedRows>0){
			res.send("注册成功");
		}else{
			res.send("请输入正确的注册信息");
		}
	});
});

//1.1查询用户编号是否存在
router.get('/select_uid',function(req,res){
	var $uid=req.query.uid;
	console.log(req.query);
	if(!$uid){
		res.send("用户编号不能为空");
		return;
	}
	pool.query('select * from mz_user where uid=?',[$uid],function(err,result){
		if(err){throw err;}
		if(result.length>0){
			res.send('用户编号已注册');
		}else{
			res.send('用户编号可以使用');
		}
		console.log(result);
	});
});
//1.2查询用户名是否存在
router.get('/select_uname',function(req,res){
	var $uname=req.query.uname;
	if(!$uname){
		res.send("用户名不能为空");
		return;
	}
	pool.query('select * from mz_user where uname=?',[$uname],function(err,result){
		if(err){throw err;}
		if(result.length>0){
			res.send("用户名已注册");
		}else{
			res.send("用户名可以使用");
		}
	});
});

//导出路由
module.exports=router;
