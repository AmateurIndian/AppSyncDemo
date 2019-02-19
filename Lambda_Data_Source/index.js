///////////////////////////////////////////////////////////
// This is the demo project for the third and final part of
// the GraphQL and AppSync series which can be found here:
//              https://medium.com/@yusuf_82810
// For any feedback and comments please feel free to
// contact me on twitter:   @SarjeelY
// or by email at:          sarj93@gmail.com
//
// Made with love by:       Sarjeel Yusuf
//////////////////////////////////////////////////////////

exports.handler = (event, context, callback) => {
  const databaseService = require("services");
  console.log("Received event {}", JSON.stringify(event, 3));

  switch (event.field) {
    case "addAnimal":
      databaseService
        .addAnimal(event)
        .then(result => {
          callback(null, event.arguments);
        })
        .catch(err => {
          callback("Could not add Animal- " + err, null);
        });
      break;

    case "addReserve":
      databaseService
        .addReserve(event)
        .then(result => {
          callback(null, event.arguments);
        })
        .catch(err => {
          callback("Could not add Reserve- " + err, null);
        });
      break;

    case "getAnimal":
      databaseService
        .getAnimal(event)
        .then(result => {
          console.log(result);

          var recievedAnimal = {
            id: result.Item.id.S,
            name: result.Item.name.S,
            number: result.Item.number.N,
            reserve: result.Item.reserve.S
          };

          callback(null, recievedAnimal);
        })
        .catch(err => {
          callback("Could not get Animal");
        });
      break;

    case "getReserve":
      databaseService
        .getReserve(event)
        .then(result => {
          console.log(result);

          var recievedReserve = {
            id: result.Item.id.S,
            area: result.Item.area.N,
            district: result.Item.district.S
          };
          callback(null, recievedReserve);
        })
        .catch(err => {
          callback("Could not get Reserve");
        });
      break;

    case "habitantAnimals":
      databaseService
        .habitantAnimals(event)
        .then(result => {
          console.log(result);
          console.log(event);
          animalList = [];

          for (animalItem of result.Items) {
            var recievedAnimal = {};
            recievedAnimal.id = animalItem.id.S;
            recievedAnimal.name = animalItem.name.S;
            recievedAnimal.number = animalItem.number.N;
            recievedAnimal.reserve = animalItem.reserve.S;
            animalList.push(recievedAnimal);
          }

          callback(null, animalList);
        })
        .catch(err => {
          callback("Could not get inhabiting animals" + err);
        });
      break;

    case "deleteAnimal":
      databaseService
        .deleteAnimal(event)
        .then(result => {
          callback(null, event.arguments);
        })
        .catch(err => {
          callback("Could not delete Animal - " + err, null);
        });
      break;

    default:
      callback("Unknown field, unable to resolve " + event.field, null);
      break;
  }
};
