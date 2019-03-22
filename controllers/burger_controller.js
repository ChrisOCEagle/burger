// import both Express and the burger.js model
var express = require('express'),
    burger = require('../models/burger.js'),
    router = express.Router();

router.get("/", function(req, res) {
    burger.select("*", function(data) {
        var hbrsObj = {
            burgers: data
        };
        res.render("index", hbrsObj);
    });
});
router.post("/api/burgers", function(req, res) {
    var cols = ["burger_name", "devoured"],
        vals = [req.body.name, JSON.parse(req.body.devoured)];
    burger.insert(cols, vals, result => res.json({ id: result.insertId }) );
});
router.put("/api/burger/:id", function(req, res) {
    var condition = " id = " + req.params.id;
    burger.update({
        devoured: JSON.parse(req.body.devoured)
    },
    condition,
    result => {
        // if no rows were changed
        if (result.changedRows === 0) {
            // then the ID must not exist => a 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;