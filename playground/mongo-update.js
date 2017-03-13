const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to mongodb server!");
  }
  console.log('Connected to mongodb');

  // findOneAndUpdate: find, update, get document back
  db.collection('Todos').findOneAndUpdate({
    "_id" : new ObjectID("58c637082d620594720e5a72")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
