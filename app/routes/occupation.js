/**
 * Created by supun on 11/11/2017.
 */
var express = require('express');
var router = express.Router();
var occupationSchemar = require('../model/occupation');

router.route('/createoccupation')
    .post(function (req,res) {
        var occupation = new occupationSchemar();
        occupation.name = req.body.name;
        occupation.save(function (err) {
            if (err) {
                res.send({ status : 0, data : err });
            } else {
                res.json({ status : 1, data : occupation });
            }
        });


    })



router.route('/all_occupation')
    .get(function (req, res) {
        occupationSchemar.find(function (err, foundResult) {
            res.json(foundResult);
        });
    });
// router.route('/get_all_occupation')
//     .get(function (req,res) {
//        
//
//        
//     })



module.exports = router;