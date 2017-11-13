/**
 * Created by Supun on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReqInforSchema = new Schema({
    name: {
        type: String,
        unique: true

    },
    Req_no: {
        type: String,
        unique: true

    },
    
    occupation: {
        type: String,
        unique: true
    
    },
    occupation_place: {
        type: String,
        unique: true

    },
    tele_no: {
        type: String,
        unique: true

    },
    address: {
        type: String,
        unique: true

    },
    reason: {
        type: String,
        unique: true

    },
    Se_depart: {
        type: String,
        unique: true

    },
    Status: {
        type: String,
        unique: true

    },
    description: {
        type: String,
        unique: true

    },
    Local: {
        type: Object,
        unique: true

    },  comlepted_time: {
        type: String,
        unique: true

    },
    processing_time: {
        type: String,
        unique: true

    },
    
    Create_time: {
        type: Date,
        default: Date.now,
        required: 'Must have start date - default value is the created date'
    }



});

module.exports = mongoose.model('ReqInfor', ReqInforSchema);