// var db = require("../models");

// // Routes
// module.exports = function(app) {

//     // GET route to redirect
//     app.get('/', function(req, res) {
//         res.redirect("/api/all");
//     });

//     // GET route to show all burgers
//     app.get('/api/all', function(request, response) {
//         db.burgers.findAll({}).then(function(dbResponse) {
//             response.render("index", { burgers: dbResponse });
//         });
//     });

//     // POST route for saving a new post
//     app.post("/api/burgers", function(req, res) {
//         console.log(req.body.burger_name);
//         db.burgers.create({
//             burger_name: req.body.burger_name
//         }).then(function(dbPost) {
//             res.redirect("/api/all");
//         });
//     });

//     // PUT route for updating devoured value
//     app.put("/api/:id", function(req, res) {
//         db.burgers.update({ devoured: 1 }, {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function(dbPost) {
//             res.redirect("/api/all");
//         });
//     });
// };
//////////////////////////////////////////////////////
var express = require('express');
var router = express.Router();
var burger = require('../models/');


// / Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
  console.log(burger.burgers)
  burger.burgers.findAll({}).then(function (data) {
    //  console.log(burger)

    res.render("index", { burgers: data });
  })
});// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

router.post("/api/burgers", function (req, res) {
  burger.burgers.create({ burger_name: req.body.name })
  [
    "burger_name", "devour"
  ], [
    req.body.name, req.body.devour
  ]
    .then(function (result) {
      //     // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   // console.log("condition", condition);

//   burger.burgers.update({
//     devour: req.body.devour
//   }, condition, function(result) {
//     if (result.changedRows == 0) {

//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.burgers.update({
    devour: true
  }, {
    where:
    {
      id: req.params.id
    }
    }, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.burgers.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // res.status(200).end();
      res.json("/");
      
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

// router.get('/burgers', function (req, res) {
// 	burgers.all(function (data) {
// 		console.log(data)
// 		var hbsObject = { burgers: data };
// 		console.log(hbsObject);
// 		res.render('index', hbsObject);
// 	});
// });



// router.post('/burgers/create', function (req, res) {
// 	console.log("working???")
// 	burgers.create('burger_name', [req.body.name], function () {
// 		res.redirect('/burgers');
// 	});
// });


// router.put('/burgers/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	//burgers.update({devoured: req.body.sleepy }, condition, function () {difference?
// 	burgers.update('devoured',req.body.devoured,condition, function () {

// 		res.redirect('/burgers');
// 	});
// });

// router.delete('/burgers/delete/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;   //params = object property

// 	burgers.delete(condition, function () {
// 		res.redirect('/burgers');
// 	});
// });


// module.exports = router;