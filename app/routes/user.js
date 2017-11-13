/**
 * Created by supun on 11/8/2017.
 */
var express = require('express');
var router = express.Router();
var UserEdit = require('../model/User');
var  ReqInforShemar= require('../model/ReqInfor');
router.route('/userCount')
    .get(function (req,res) {
        UserEdit.count({},function (err,responsUser) {
            res.json(responsUser);
        })

    });
router.route('/getallusers')
    .get(function (req,res) {

        UserEdit.find(function (err, datafromDB) {
            res.json(datafromDB)





        });

    });


router.route('/comfor')
    .post(function (req,res) {
        var Hash_password;
        console.log(req.body)
        UserEdit.findOne({ 'local.email':req.body.email  }, function (err, user) {

            // if there are any errors, return the error before anything else

                console.log(user);


            // if no user is found, return the message
            if (user==null) {
                // return done(null,  false, req.flash('danger', 'No account exists for that email.')); // req.flash is the way to set flashdata using connect-flash
                res.json("Error_email")
            }else if(!user.validPassword(req.body.password)){
               // return done(null, err); // create the loginMessage and save it to session as flashdata
                res.json("Error_password")}
            else {
                loguser = user;

                ReqInforShemar.findOne({_id: req.body.id},function (err,reqInfo) {
                    if(req.body.status=="done") {
                        console.log(reqInfo);
                        reqInfo.Status = "COMPLET";
                        reqInfo.description = req.body.description;
                        reqInfo.Local = user.local;
                        var dateTime = require('node-datetime');
                        var dt = dateTime.create();
                        var formatted = dt.format('Y-m-d H:M:S');
                        reqInfo.comlepted_time = formatted;


                        reqInfo.save(function (err) {

                            if (err) {
                                res.send(err);
                                console.log(err);
                            } else {
                                console.log("finddddd")
                                console.log(user.local)
                                console.log(req.body)
                                res.json({"result": true});
                            }
                        })
                    }

                    if(req.body.status=="Got_work") {
                        console.log(reqInfo);
                        reqInfo.Status = "Processing";
                        reqInfo.description = req.body.description;
                        reqInfo.Local = user.local;
                        var dateTime = require('node-datetime');
                        var dt = dateTime.create();
                        var formatted = dt.format('Y-m-d H:M:S');
                        reqInfo.processing_time = formatted;


                        reqInfo.save(function (err) {

                            if (err) {
                                res.send(err);
                                console.log(err);
                            } else {
                                console.log("finddddd")
                                console.log(user.local)
                                console.log(req.body)
                                res.json({"result": true});
                            }
                        })
                    }
                    
                    
                });
            }
        });

    })


module.exports = router;