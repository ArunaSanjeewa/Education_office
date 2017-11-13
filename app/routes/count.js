/**
 * Created by uer on 11/6/2017.
 */
var express = require('express');
var router = express.Router();
var ReqInfor = require('../model/ReqInfor');
var twilio = require('twilio');
var accountSid = 'ACdf712dc7454eb6e549c467720745a612';
var authToken = 'e44ab47559d6b34259e40e97e6568d88';
// Find your account sid and auth token in your Twilio account Console.


router.route('/account_req_unm')
    .get (function (req,res) {
        var both_unm;
        var not_Finished_num;

        ReqInfor.count({"Se_depart": "Account", "Status": "NOT FINISH" },function (err,respons_notfnished) {

            not_Finished_num=respons_notfnished;


            ReqInfor.count({"Se_depart": "Account", "Status": "COMPLET" },function (err,respons_finished) {
                
                     both_unm={
                         NOT_finsh:not_Finished_num,
                         finsh:respons_finished,
                     }
                console.log(both_unm)
                res.json(both_unm);
                
            });
        });
        // getaccountInfor.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, data) {
        //
        //
        //     if (data == null) {
        //         //  console.log("there are no any record yet");
        //         res.send(err);
        //
        //     } else {
        //         //   console.log("Have data");
        //         res.json(data.Req_no);
        //     }
        //
        //
        //
        // });

    })

router.route('/develop_req_unm')
    .get (function (req,res) {
        var both_unm;
        var not_Finished_num;

        ReqInfor.count({"Se_depart": "Develop", "Status": "NOT FINISH" },function (err,respons_notfnished) {

            not_Finished_num=respons_notfnished;


            ReqInfor.count({"Se_depart": "Develop", "Status": "COMPLET" },function (err,respons_finished) {

                both_unm={
                    NOT_finsh:not_Finished_num,
                    finsh:respons_finished,
                }
                console.log(both_unm)
                res.json(both_unm);

            });
        });
        // getaccountInfor.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, data) {
        //
        //
        //     if (data == null) {
        //         //  console.log("there are no any record yet");
        //         res.send(err);
        //
        //     } else {
        //         //   console.log("Have data");
        //         res.json(data.Req_no);
        //     }
        //
        //
        //
        // });

    })


router.route('/planning_req_unm')
    .get (function (req,res) {
        var both_unm;
        var not_Finished_num;

        ReqInfor.count({"Se_depart": "Planning", "Status": "NOT FINISH" },function (err,respons_notfnished) {

            not_Finished_num=respons_notfnished;


            ReqInfor.count({"Se_depart": "Planning", "Status": "COMPLET" },function (err,respons_finished) {

                both_unm={
                    NOT_finsh:not_Finished_num,
                    finsh:respons_finished,
                }
                console.log(both_unm)
                res.json(both_unm);

            });
        });
        // getaccountInfor.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, data) {
        //
        //
        //     if (data == null) {
        //         //  console.log("there are no any record yet");
        //         res.send(err);
        //
        //     } else {
        //         //   console.log("Have data");
        //         res.json(data.Req_no);
        //     }
        //
        //
        //
        // });

    })

router.route('/Zdirector_req_unm')
    .get (function (req,res) {
        var both_unm;
        var not_Finished_num;

        ReqInfor.count({"Se_depart": "ZDirector", "Status": "NOT FINISH" },function (err,respons_notfnished) {

            not_Finished_num=respons_notfnished;


            ReqInfor.count({"Se_depart": "ZDirector", "Status": "COMPLET" },function (err,respons_finished) {

                both_unm={
                    NOT_finsh:not_Finished_num,
                    finsh:respons_finished,
                }
                console.log(both_unm)
                res.json(both_unm);

            });
        });
        // getaccountInfor.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, data) {
        //
        //
        //     if (data == null) {
        //         //  console.log("there are no any record yet");
        //         res.send(err);
        //
        //     } else {
        //         //   console.log("Have data");
        //         res.json(data.Req_no);
        //     }
        //
        //
        //
        // });

    })




















module.exports = router;