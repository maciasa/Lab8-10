var express = require('express');
var router = express.Router();
var schoolDal   = require('../dal/school');

router.get('/all', function(req, res) {
    schoolDal.GetAll(function (err, result) {
            if (err) throw err;
           // res.send(result);
        console.log(result);
            res.render('displayallschools.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    schoolDal.GetByID(req.query.user_id, function (err, result) {
            if (err) throw err;

            res.render('displayallschools.ejs', {rs: result, user_id: req.query.user_id});
        }
    );
});

module.exports = router;