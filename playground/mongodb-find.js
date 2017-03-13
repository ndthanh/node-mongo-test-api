const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to mongodb server!");
  }
  console.log('Connected to mongodb');

  //find todo with completed = false
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch docs", err);
  // });

  //find todo by id 58c6310326c2b77dc2039b15
  // db.collection('Todos').find({
  //   _id: new ObjectID('58c631e92d620594720e5994')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch docs", err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos' count: ${count}`);
  }, (err) => {
    console.log("Unable to fetch docs", err);
  });

  // db.close();
});
