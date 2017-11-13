var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    Role: {
        type: String,
        unique: true
    },
    Rolelower: {
        type: String,
        unique: true,
        lowercase: true
    },
    Description: {
        type: String,
    }
});

module.exports = mongoose.model('roles', RoleSchema);