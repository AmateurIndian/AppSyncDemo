# AppSyncDemo

**N.B: The project in this repository corresponds to the demo project presented in my GraphQL with AppSync blog series.**

_Blog Links: [ [1](https://medium.com/thundra/the-comforts-of-graphql-with-aws-appsync-d8b36b9c67) ] [ [2](https://medium.com/thundra/up-and-running-with-graphql-using-aws-appsync-7202b1607299) ] [ [3](https://medium.com/thundra/making-appsync-easier-with-thundra-6570994cda5b) ]_

## AppSync Demo used in [Blog II](https://medium.com/thundra/detailed-serverless-monitoring-using-a-completely-automated-approach-c148fa8cfa47)

Operations:

```
getAnimal(id: ID!): Animal
```

```
getReserve(id: ID!): Reserve
```

```
addAnimal(
id: ID!,
name: String!,
number: Int,
reserve: ID
): Animal
```

```
addReserve(
  id: ID!,
  district: String!,
  area: Int
): Reserve
```

## AppSync Demo used in [Blog III](https://medium.com/thundra/making-appsync-easier-with-thundra-6570994cda5b)

Part III demonstrates using Lambda functions as data sources for your GraphQL based application. It also talks about how Thundra monitroing is necessary for quick and efficient development of your Lambda function for AppSync.
The Lambda function can be found [here](./Lambda_Data_Source)

Operations:

```
getAnimal(id: ID!): Animal
```

```
getReserve(id: ID!): Reserve
```

```
addAnimal(
id: ID!,
name: String!,
number: Int,
reserve: ID
): Animal
```

```
addReserve(
  id: ID!,
  district: String!,
  area: Int
): Reserve
```

```
deleteAnimal(id: ID!): Animal
```

_For any comments and feedback, you can get in touch with me at my twitter handler [@SarjeelY](https://twitter.com/SarjeelY), or you may email me directly as sarj93@gmail.com_
