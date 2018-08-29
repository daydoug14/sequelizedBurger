module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
      // id: {
      //     type: DataTypes.INTEGER,
      //     autoIncrement: true,
      //     primaryKey: true,
      //     allowNull: false
      // },
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          // validate: {
          //     len: [1],
          //     notEmpty: true
          // }
      },
      devour: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
      },
      // date: {
      //     type: DataTypes.DATE,
      //     defaultValue: DataTypes.NOW
      // }
  }, {
      timestamps: false
  });

  return burgers;
};
// var orm = require("../config/orm.js");

// var burger = {
// 	all: function (cb) {     
// 		orm.all("burgers", function (res) {
// 			cb(res);
// 	// console.log("orm model working")
// 		});
// 	},
// 	// cols and vals are arrays
// 	create: function (cols, vals, cb) {
// 		orm.create("burgers",cols,vals, function (res) {
// 			cb(res);
// 	// console.log("orm model CREATE is working")
// 		});
//     },
//     update: function(objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function(res) {
//           cb(res);
//         });
//       },
//     delete: function(condition, cb) {
//         orm.delete("burgers", condition, function(res) {
//           cb(res);
//         });
//       }
//     };
    
//     module.exports = burger;
// 	update: function (column, newValue, condition, cb) {
// 		orm.update('burgers', column, newValue, condition, function (res) {
// 			cb(res);
// 			console.log("orm model UPDATE is working")
// 		});
// 	},
// 	delete: function (condition, cb) {
// 		console.log("workings?")
// 		orm.delete('burgers',condition, function (res) {
// 			console.log("workings?")
// 			cb(res);
// 			console.log("orm model DELELTE  working")
// 		});
// 	}
// };

//burgermodel.all(function(data){console.log(data)});
//burgermodel.create('burger_name',"yay",function(data){console.log(data)})
// burgermodel.update('devoured',0,'id=1', function(data){console.log(data)})
//burgermodel.delete('id=5',function(data){console.log(data)})
