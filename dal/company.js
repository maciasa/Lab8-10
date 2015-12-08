var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query ('SELECT * FROM companies;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
};

exports.GetByID = function(comp_id, callback) {
    console.log(comp_id);
    var query = 'SELECT * FROM companies WHERE comp_id=' + comp_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    )
};

exports.Getcompany = function(comp_id, callback) {
    console.log(comp_id);
    var query = 'select user.fname, user.lname, companies.cname, jobs.description ' +
    'FROM user join apply on user.user_id = apply.user_id join companies on companies.comp_id = apply.comp_id ' +
    'left join jobs on jobs.comp_id = companies.comp_id=' + comp_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        });
};

/*exports.Getgpa = function(comp_id, callback) {
    console.log(comp_id);
    var query = 'SELECT * FROM companiesgpa AS select min(gpa), max(gpa), avg(gpa), sch_id, count(attended.sch_id) ' +
        'FROM attended join apply on apply.user_id = attended.user_id join companies' +
        'on apply.comp_id = companies.comp_id group by cname=' + comp_id;
    console.log(query);
        connection.query(query,
    function (err, result){
        if (err){
            console.log(err);
        callback(true);
        return;
    }
        callback(false, result);
});
};*/

exports.Getgpa = function(comp_id, callback) {
    console.log(comp_id);
    var query = 'SELECT * FROM companiesgpa;'

    console.log(query);
    connection.query(query,
        function (err, result){
            if (err){
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        });
};