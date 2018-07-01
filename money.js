/**
 * 用户表
 */
const mongoose = require('./db.js');
const Schema = mongoose.Schema;
const MoneySchema = new Schema({          
    money: {type: Number, default: 0}
});
const tableName = 'money';
module.exports = mongoose.model('Money', MoneySchema, tableName);