const animalTable = "animalTable";
const reserveTable = "ReserveTable";
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB();
const doClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-2" });

var addAnimal = function(event) {
  var newId = event.arguments.id;
  var newName = event.arguments.name;
  var newNumber = event.arguments.number;
  var newReserve = event.arguments.reserve;
  return new Promise(function(resolve, reject) {
    var params = {
      TableName: animalTable,
      Item: {
        id: { S: newId },
        name: { S: newName },
        number: { N: newNumber.toString() },
        reserve: { N: newReserve.toString() }
      }
    };

    dynamoDB.putItem(params, function(err, data) {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

var addReserve = function(event) {
  var newId = event.arguments.id;
  var newDistrict = event.arguments.district;
  var newArea = event.arguments.area;

  return new Promise(function(resolve, reject) {
    var params = {
      TableName: reserveTable,
      Item: {
        id: { S: newId },
        district: { S: newDistrict },
        area: { N: newArea.toString() }
      }
    };

    dynamoDB.putItem(params, function(err, data) {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

var getAnimal = function(event) {
  var animalId = event.arguments.id;

  return new Promise(function(resolve, reject) {
    var params = {
      TableName: animalTable,
      Key: {
        id: { S: animalId }
      }
    };

    dynamoDB.getItem(params, function(err, data) {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

var deleteAnimal = function(event) {
  var animalId = event.arguments.id;

  return new Promise(function(resolve, reject) {
    var params = {
      TableName: animalTable,
      Key: {
        id: { S: animalId }
      }
    };

    dynamoDB.deleteItem(params, function(err, data) {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

var habitantAnimals = function(event) {
  var reserveId = event.source.id;

  return new Promise(function(resolve, reject) {
    var params = {
      TableName: animalTable,
      ExpressionAttributeValues: {
        ":reserve": {
          S: reserveId
        }
      },
      FilterExpression: "reserve = :reserve"
    };
    dynamoDB.scan(params, function(err, data) {
      if (err) {
        returnreject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

var getReserve = function(event) {
  var reserveId = event.arguments.id;

  return new Promise(function(resolve, reject) {
    var params = {
      TableName: reserveTable,
      Key: {
        id: { S: reserveId }
      }
    };

    dynamoDB.getItem(params, function(err, data) {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};

module.exports = {
  addAnimal,
  addReserve,
  getAnimal,
  getReserve,
  habitantAnimals,
  deleteAnimal
};
