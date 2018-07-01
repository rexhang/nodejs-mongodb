const express = require('express');

const Router = express.Router();

const Money = require("./money.js");

Router.get('/insert', function(req, res){
	const {money} = req.query;
	const createMoney = new Money({money});
	createMoney.save(function(err, doc){
		if(!err){
			return res.json({code: 0, msg: '插入成功', data: doc})
		} else{
			return res.json({code: 1})
		}
	})
});

module.exports = Router;