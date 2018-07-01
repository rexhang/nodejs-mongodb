const express = require('express');

const Router = express.Router();

const User = require("./user.js");

// 插入 {name: xx}
Router.get('/insert', function(req, res){
	const {name} = req.query;
	const user = new User({
        username : name,
        userpwd: '123456',
        userage: 24
    });
	user.save(function (err, doc) {
		if (!err) {
			return res.json({code: 200, msg: '插入成功', data: doc});
		} else{
			return res.json({code: 400, msg: err});
		}
	});
});
// 查询
Router.get('/findall', function(req, res){
	User.find({}, function(err, doc){
		if(!err){
			return res.json({code: 200, data: doc});
		} else{
			return res.json({code: 400, msg: err});
		}
	});
});
// 更新 {name: namexx, age: agexx}
Router.get('/update', function(req, res){
	const {name, age} = req.query;
	// 将用户(姓名为namexx的用户)年龄更新为为agexx
	const updateContent = {$set: {userage: age}};
	User.update({username: name}, updateContent, function(err, doc){
		if(!err){
			return res.json({code: 200, msg: '变更成功'});
		} else{
			return res.json({code: 400, msg: err});
		}
	})
});
// 删除 {name: xx}
Router.get('/delete', function(req, res){
	const {name} = req.query;
	User.remove({username: name}, function(err, doc){
		if(!err){
			return res.json({code: 200, msg: '删除成功'});
		} else{
			return res.json({code: 400, msg: err});
		}
	});
});

module.exports = Router;