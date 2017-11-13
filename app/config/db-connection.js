/**
 * Created by Supun on 10/30/2017.
 */
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
module.exports = mongoose.connect('mongodb://localhost/EducationDB', function (err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
    useMongoClient: true
});