/**
 * Created by supun on 11/11/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccupationSchema = new Schema({
    name: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        sparse: true,
        uppercase:true
    }
});

module.exports = mongoose.model('occupation', OccupationSchema);