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
    schoolDal.GetByID(req.query.sch_id, function (err, result) {
            if (err) throw err;
        console.log(result);
            res.render('displayschoolinfo.ejs', {rs: result, sch_id: req.query.sch_id});
        }
    );
});

module.exports = router;