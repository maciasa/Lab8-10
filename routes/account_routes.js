var express = require('express');
var router = express.Router();
var accountDal   = require('../dal/account');

router.get('/all', function(req, res) {
    accountDal.GetAll(function (err, result) {
            if (err) throw err;
            //res.send(result);
            res.render('displayallAccounts.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    accountDal.GetByID(req.query.user_id, function (err, result) {
            if (err) throw err;

            res.render('displayaccountinfo.ejs', {rs: result, user_id: req.query.user_id});
        }
    );
});

module.exports = router;