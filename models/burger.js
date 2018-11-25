// import orm.js
var orm = require("../config/orm.js");

var burger = {
    select: function(whatToSelect, cb) {
        orm.select(whatToSelect, "burger", function(result) {
            cb(result);
        });
    },
    insert: function(colInput, insertedVal, cb) {
        orm.insert("burger", colInput, insertedVal, function(results) {
            cb(results);
        });
    },
    update: function(colValsObj, condition, cb) {
        orm.update("burger", colValsObj, condition, function(result) {
            cb(result);
        });
    }
};

// export the model
module.exports = burger;