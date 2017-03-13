// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// object destructuring
// var user = {name: "Thanh", age: 28};
// var {name} = user;
//
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to mongodb server!");
  }
  console.log('Connected to mongodb');

  db.collection('Todos').insertOne({
    text: 'something todo',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to add Todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
