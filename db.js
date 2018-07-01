const mongoose = require('mongoose');
const dbName = 'nodejs';
const DB_URL = "mongodb://localhost:27017/"+dbName;

/**
 * 链接
 */
mongoose.connect(DB_URL);

/**
 * 链接成功
 */
mongoose.connection.on('connected', function () {    
    console.log("数据库链接成功");  
});    

/**
 * 链接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log("数据库链接异常"); 
});    
 
/**
 * 断开链接
 */
mongoose.connection.on('disconnected', function () {    
    console.log("数据库断开链接"); 
}); 

module.exports = mongoose;