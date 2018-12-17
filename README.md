# AppSyncDemo
AppSync Demo used in [Blog](https://medium.com/thundra/detailed-serverless-monitoring-using-a-completely-automated-approach-c148fa8cfa47)

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
