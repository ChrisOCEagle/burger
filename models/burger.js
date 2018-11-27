// import orm.js
var orm = require("../config/orm.js");

var burger = {
    select: function(whatToSelect, cb) {
        orm.select(whatToSelect, "burgers", function(result) {
            cb(result);
        });
    },
    insert: function(colInput, insertedVal, cb) {
        orm.insert("burgers", colInput, insertedVal, function(results) {
            cb(results);
        });
    },
    update: function(colValsObj, condition, cb) {
        orm.update("burgers", colValsObj, condition, function(result) {
            cb(result);
        });
    }
};

// export the model
module.exports = burger;