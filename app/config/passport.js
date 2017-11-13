var LocalStrategy = require('passport-local').Strategy;

var User = require('../model/User.js');
var role = require('../model/role');
var loguser;

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    
    passport.use('local-signup', new LocalStrategy({
        
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        fullnameField: 'fullName',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {
            console.log("sss");
      
        // asynchronous
        // User.findOne wont fire unless data is sent backv
        process.nextTick(function () {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({ 'local.email': email }, function (err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                
                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {
                  
                   if (req.body.supre_select == !null) {


                        role.findOne({_id: req.body.roleselect}, function (err, fundobject) {


                            console.log(loguser);
                            // if there is no user with that email
                            // create the user
                            var newUser = new User();

                            // set the user's local credentials
                            newUser.local.email = email;
                            newUser.local.password = newUser.generateHash(password);
                            newUser.local.fullName = req.body.fullName;
                            newUser.local.Role = fundobject;
                            newUser.local.department = req.body.department;
                            newUser.superuser = req.body.supre_select;
                            // save the user
                            newUser.save(function (err, res) {
                                if (err) {
                                    throw err;

                                } else {
                                    return done(null, loguser);
                                    res.json("ok")

                                }
                            });
                        })
                    }else {
                        role.findOne({_id: req.body.roleselect}, function (err, fundobject) {
                           // console.log(fundobject)


                            // if there is no user with that email
                            // create the user
                            var newUser = new User();

                            // set the user's local credentials
                            newUser.local.email = email;
                            newUser.local.password = newUser.generateHash(password);
                            newUser.local.fullName = req.body.fullName;
                            newUser.local.Role = fundobject;
                            // save the user
                            newUser.save(function (err, res) {
                                if (err) {
                                    throw err;

                                } else {
                                    return done(null, loguser);
                                    res.json("ok")

                                }
                            });
                        })

                    }
               }

            });

        });

    }));
    
    
    passport.use('local-login', new LocalStrategy( {
        
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
        console.log("ewaa");
        // callback with email and password from our form
        

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email': email }, function (err, user) {
            
            // if there are any errors, return the error before anything else
            if (err) {
                return done(err);
            }


            // if no user is found, return the message
            if (!user)
                return done(null,  false, req.flash('danger', 'No account exists for that email.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, err); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            loguser=user;
             return done(null, user);
        });

    }));
};
