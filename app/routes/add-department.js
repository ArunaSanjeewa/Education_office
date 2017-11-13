/**
 * Created by supun on 11/3/2017.
 */
var express = require('express');
var router = express.Router();


var ReqInfor = require('../model/ReqInfor');
router.route('/add_account')
    .post(function (req,res) {
        console.log(req.body.name)
        ReqInfor.find(function (err,fundIfor) {
            console.log(fundIfor)
            var keg1 = new ReqInfor({

                name: req.body.name,
                Req_no:req.body.Req_No,
                occupation:req.body.occupation,
                occupation_place:req.body.occupation_place,
                tele_no:req.body.tele_no,
                address:req.body.address,
                reason:req.body.reason,
                Se_depart:req.body.Se_depart,
                Status:req.body.Status
                


            });
            keg1.save(function (err) {
                if (err) {
                    res.send(err);
                }else{
                    res.json("success");
                }
            });
            
        })
        
    })
module.exports = router;