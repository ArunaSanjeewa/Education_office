var express = require('express');
var LocalStrategy = require('passport-local').Strategy;
var log;
var user = require('../model/User');
module.exports = function (app, passport) {

    app.get('/', isLoggedIn, function (req, res) {
        res.render('index', { user: req.user });
        log = req.user;
    });

    /* app.get('/', isLoggedIn, function (req, res) {
         //console.log('Home');
         res.render('index', { user: req.user });
         //log = req.user;
 
         
     });*/
    app.get('/loginuser', function (req, res) {
        res.json(log);

    });

    app.get('/login', function (req, res) {
        res.render('login', { title: 'Express' });

        //console.log(req.user + "/login")

    });
    app.get('/gatePassApprove', function (req, res) {
        res.render('gatepass-approve', { title: 'Express' });

        //console.log(req.user + "/login")

    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    app.get('/signup', function (req, res) {
        // if (req.user.superuser == 1) {
            res.render('signup', { message: req.flash('Welcome to Sign in Process') });
        // } else {
        //     res.redirect('/');
        // }
        console.log("singup");
    });
    app.put('/ChandPassword', function (req, res) {

        var newUser = new user();

        // console.log(req.body.password)
        // user.update({_id:req.body._id},{$set:{local.$.fullName:suopun}}, {new: true},function (err,funduser) {
        //     if(err){
        //         console.log(err)
        //     }
        //     console.log(funduser)
        //
        //
        // })
        user.update(
            { '_id': req.body._id },
            { $set: { 'local.password': newUser.generateHash(req.body.password) } },
            function (err, count) {
                if (err) {
                    console.log(err)
                } else {
                    //   console.log(count)
                }
                if (count.ok !== 0) {
                    res.json("sucsses")
                } else {
                    res.json("Error")
                }

            });


    });


    app.post('/signup', passport.authenticate('local-signup', {
        //successRedirect: '/', // redirect to the secure profile section

        failureRedirect:'/#!/error-sigup/:name', // redirect back to the signup page if there is an error
        failureFlash: true// allow flash messages
    }),


        function (req, res) {
            console.log(req.body);
            res.redirect("/#!/all-users");


    });

    app.post('/android-login', passport.authenticate('local-login', {
        failureFlash: true,

    }), function (req, res) {
         console.log("wareeeeeee");

        if (req.user !== null) {
            console.log("elaa")
            res.json(req.user);


        } else {

            res.json({ "local": "" });
        }
    });


    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/', // redirect to the secure profile section
        successFlash: true,
        failureRedirect: 'login', // redirect back to the signup page if there is an error
        //failureFlash: true, // allow flash messages
        failureFlash: 'Invalid username or password.',
        successFlash: 'Welcome!'
    }));
    console.log("awaaaaaaaaaa")
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())
            return next();
        res.redirect('login');
    }


}
