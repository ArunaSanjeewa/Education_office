/**
 * Created by supun on 11/3/2017.
 */
var express = require('express');
var router = express.Router();


var getaccountInfor = require('../model/ReqInfor');

   // account Iformation
router.route('/getaccount')
    .get(function (req,res) {

        getaccountInfor.find({ Se_depart: "Account" }).sort({_id:-1  }).exec(function (err, docs) {
            res.json(docs);
        });


    });
      // development infomation
router.route('/getdevelp')
    .get(function (req,res) {
        console.log("DevelopDevelopDevelopDevelopDevelop")


        getaccountInfor.find({ Se_depart: "Develop" }).sort({_id:-1  }).exec(function (err, docs) {
            res.json(docs);
        });


    });
router.route('/getplanning')
    .get(function (req,res) {
        console.log("DevelopDevelopDevelopDevelopDevelop")


        getaccountInfor.find({ Se_depart: "Planning" }).sort({_id:-1  }).exec(function (err, docs) {
            res.json(docs);
        });


    });


router.route('/getzonal_director')
    .get(function (req,res) {
        console.log("DevelopDevelopDevelopDevelopDevelop")


        getaccountInfor.find({ Se_depart: "ZDirector" }).sort({_id:-1  }).exec(function (err, docs) {
            res.json(docs);
        });


    });


router.route('/more-infor/:Id')
    .get(function (req, res) {

        var Id = req.params.Id;
        console.log(Id)
        getaccountInfor.findOne({ _id: Id }, function (err, datafromDB) {

           res.json(datafromDB)

        });


    })

router.route('/last_req_no')
    .get (function (req,res) {
        
        getaccountInfor.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, data) {


            if (data == null) {
                //  console.log("there are no any record yet");
                res.send(err);
            
            } else {
                //   console.log("Have data");
                res.json(data.Req_no);
            }



        });

        
    })


module.exports = router;