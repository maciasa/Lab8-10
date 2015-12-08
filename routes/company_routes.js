var express = require('express');
var router = express.Router();
var companyDal   = require('../dal/company');

router.get('/all', function(req, res) {
    companyDal.GetAll(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('displaycompanyinfo.ejs', {rs: result});
        }
    );
});

/*router.get('/', function (req, res) {
    companyDal.GetByID(req.query.comp_id, function (err, result) {
        console.log(result);

            res.render('displaycompanyinfo.ejs', {rs: result, comp_id: req.query.comp_id});
        }
    );


});*/

router.get('/cform', function(req, res, next){
    res.render('company.ejs', {subtitle: "test3"});

});
router.get('/', function (req, res) {
    companyDal.Getcompany(req.query.comp_id, function (err, result) {
            if (err) throw err;
            //res.send(result);
        console.log(result);
            res.render('displaycompanyinfo.ejs', {rs: result, comp_id: req.query.comp_id});
        }
    );

});

router.get('/comp_gpa', function (req, res) {
    companyDal.Getgpa(req.query.comp_id, function (err, result){
        if (err) throw err;
            console.log(result);
        res.render('companyview.ejs', {rs: result, comp_id: req.query.comp_id});
    }
    );
});


router.get('/save', function(req, res, next) {
    console.log("companyname equals: " + req.query.cname);

    companyDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});
module.exports = router;