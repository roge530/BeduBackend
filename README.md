# BeduBackend

## Where is the docs?
[Here](https://veterinaria-api-bedu-2022.herokuapp.com/docs/#/)

## How to get Admin access to the API
We are working on a seeder to generate this admin
user: admin
password: usuario

## How to work with the branches
1. You should be invited to work on the repo
2. Clone the repo, I suggest to use SSH[^1].
3. Create your branch, use your name, example: `git checkout -b roge` 
4. Do not forget to write meaningful commits
5. All new functionality needs a test
6. All has to been done based on Test Driven Development[^2]. 

## Merge or Pull request?
**PULL REQUEST to test** We should avoid experimental code on Main

## I made a Pull request to Main
We will approve after a revision

## CI/CD will be implemented?
Not this time

## How to make test
For any functionality use [K6](https://k6.io/docs/getting-started/installation/) 

## How to use K6?
Create a Javascript file and add `import http from 'k6/http'`

Add result configuration `export const options = {
summaryTrendStats: ["avg", "min", "med", "max", "p(25)", "p(75)", "p(95)"]
}`

Then write `export default function () {}`

Write all in the brackets

## Can I test multiple things on one script?
Yes and you should, try to write the CRUD of the model

## Issues o Trello?
Check Trello if you do not see the issue related

## The database... how it looks?
![Diagram](/diagrams/iteration2.png)

## How to use Sequelize migration and seeders

New migration: `npx sequelize-cli migration:generate --name create-yourTableName-table`
New model+migration: `npx sequelize-cli model:generate --name tableName --attributes attribute:type`
New seeder: `npx sequelize-cli seed:generate --name seederName`
Replace yourTableName | tableName | attribute:type | seederName with what you need

Run migrations: `npx sequelize-cli db:migrate`
Run seeders: `npx sequelize-cli db:seed:all`

Undo migrations: `npx sequelize-cli db:migrate:undo`
Undo seeders: `npx sequelize-cli db:seed:undo:all`

 
[^1]: To clone with SSH you should have your public SSH key and it should be registed on your account https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/github-clone-with-ssh-keys


[^2]: It means to write the test first then the functionality, so all functionalities behave as expected. [More info](https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/)
