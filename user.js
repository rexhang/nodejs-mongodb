/**
 * 用户表
 */
const mongoose = require('./db.js');
const Schema = mongoose.Schema;
const UserSchema = new Schema({          
    username : {type: String},
    userpwd: {type: String},
    userage: {type: Number},
    timestamp : {type: Date, default: new Date()}
});
const tableName = 'user';
module.exports = mongoose.model('User', UserSchema, tableName);