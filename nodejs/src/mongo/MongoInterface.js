const MongoClient = require('mongodb').MongoClient;

const
    MongoInterface = function (dbName, collectionName) = {
        const
            url = 'mongodb://mongodb.docker.local:27017',
            client = new MongoClient(url),
            db = client.db(dbName),
            collection = db.collection(collectionName);

        const
            createItem = (item, callback) => {
                client.connect(function(err) {
                    collection.insert(item, (err, result) => {
                        client.close();
                        callback(result);
                    });
                });
            },
            retrieveItem = (item, callback) => {
                client.connect(function(err) {
                    collection.find(item).toArray((err, result) => {
                        client.close();
                        callback(result);
                    });
                });
            },
            updateItem => (item, callback) => {
                client.connect(function(err) {
                    collection.updateOne({ id : item.id }, { $set: item}, function(err, result) {
                        callback(result);
                    });
                });
            },
            deleteItem = (item, callback) => {
                client.connect(function(err) {
                    collection.deleteOne({ id : item.id }, function(err, result) {
                        callback(result);
                    });
                });
            };

        return { createItem, retrieveItem, updateItem, deleteItem };
    };

module.exports = MongoInterface;
