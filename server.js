const express = require('express');
const app = express();
const userRoutes = require('./user-routes.js');
const moneyRoutes = require('./money.routes.js');

app.use('/user',userRoutes);
app.use('/money',moneyRoutes);

app.get('*', function(req, res){
	let baseStyle = "style='text-align: center;'";
	let htmlTemplate = `
		<h2 ${baseStyle}>API Center</h2>
		<div ${baseStyle}>NodeJS+Express环境下使用mongoose操作MongoDB数据库实现以下基本接口</div>
		<hr />
		<p>1.查看所有用户接口: <a href='http://localhost:5000/user/findall'>http://localhost:5000/user/findall</a></p>
		<p>2.新增用户接口: <a href='http://localhost:5000/user/insert?name=rexhang'>http://localhost:5000/user/insert?name=rexhang</a></p>
		<p>3.更新用户接口: <a href='http://localhost:5000/user/update?name=rexhang&age=26'>http://localhost:5000/user/update?name=rexhang&age=26</a></p>
		<p>4.删除用户接口: <a href='http://localhost:5000/user/delete?name=rexhang'>http://localhost:5000/user/delete?name=rexhang</a></p>
	`;
	res.send(htmlTemplate);
});

const server = app.listen(5000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址在"+"http://localhost", host, port);
});