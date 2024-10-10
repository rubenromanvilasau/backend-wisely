# Backend Wisely Technical Test
## TO-DO REST API 

To-Do API CRUD to handle different tasks

## Features

- Create a task
- Get user tasks
- Update a task
- Delete a task


## Tech

- [node.js] - Node js v22.8.0
- [Express] - fast node.js network app framework v4.21.1
- [Sequelize] - Node.js ORM v6.37.4 

Repository: [repository]
 on GitHub.

## Installation

It requires [Node.js](https://nodejs.org/) v22.8.0 to run.
If you have nvm installed you can do 
```sh
nvm use
```
(there's a .nvmrc file that contains appropiate node version)

Install the dependencies and devDependencies.

```sh
cd backend-wisely
npm i
npx sequelize-cli db:seed:all #Seed the database first
npm run start
```

## There's a .env.example file but here's what you need:
### EXAMPLE:
PORT=3000
DB_URI=postgres://postgres:1234@localhost:5432/wisely

## License

MIT

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [repository]: <https://github.com/rubenromanvilasau/backend-wisely>
   [Sequelize]: <https://sequelize.org/>
