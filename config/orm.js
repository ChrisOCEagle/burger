var connection = require('./connection.js');

var orm = {
    select: function(whatToSelect, tableInput, cb) {
        var sqlQuery = "SELECT ?? FROM ??";
        connection.query(sqlQuery, [whatToSelect, tableInput], function(err, result) {
            if (err) {
                console.log(err);
            } else {
                cb(result);
            };
        });
    },
    insert: function(tableInput, colInput, insertedVal, cb) {
        var sqlQuery = "INSERT INTO " + tableInput;
        sqlQuery += " (" + colInput.toString() + ") ";
        sqlQuery += " VALUES (" + printQuestionMarks(insertedVal.length) + ")";
        connection.query(sqlQuery, insertedVal, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                cb(result);
            };
        });
    },
    update: function(tableInput, colValsObj, condition, cb) {
        var sqlQuery = "UPDATE " + tableInput;
        sqlQuery += " SET " + objToSql(colValsObj);
        sqlQuery += " WHERE " + condition;
        connection.query(sqlQuery, function(err, result) {
            if (err) {
                console.log(err)
            } else {
                cb(result);
            };
        });
    }
};

function printQuestionMarks(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};

function objToSql(object) {
    var arr = [];
    // loops through the keys within the object
    for (var key in object) {
        // grab the value at each key
        var value = object[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(object, key)) {
            // if the string has spaces add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};

module.exports = orm;