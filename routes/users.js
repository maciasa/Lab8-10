var express = require('express');
var router = express.Router();
var accountDal = require('../dal/account');

 /*GET users listing.*/
router.get('/all', function(req, res) {
  accountDal.GetAll(function (err, result) {
        if (err) throw err;
        // res.send(result);
        console.log(result);
        res.render('displayallAccounts.ejs', {rs: result});
      }
  );
});

router.get('/info', function(req, res) {
    accountDal.Getcompany(function (err, result) {
            if (err) throw err;
            // res.send(result);
            console.log(result);
            res.render('displaycompanyinfo.ejs', {rs: result});
        }
    );
});
router.get('/', function (req, res) {
  accountDal.GetByID(req.query.user_id, function (err, result) {
        if (err) throw err;
        //res.send(result);
        console.log(result);
        res.render('displayaccountinfo.ejs', {rs: result, user_id: req.query.user_id});
      }
  );

});

router.get('/create', function(req, res, next){
  res.render('userFormCreate.ejs', {subtitle: "test2"});

});

router.get('/save', function(req, res, next) {
  console.log("firstname equals: " + req.query.firstname);
  console.log("the lastname submitted was: " + req.query.lastname);
  console.log("the email submitted was: " + req.query.email);
  console.log("the password submitted was: " + req.query.password);
  accountDal.Insert(req.query, function(err, result){
    if (err) {
      res.send(err);
    }
    else {
      res.send("Successfully saved the data.");
    }
  });
});

module.exports = router;
