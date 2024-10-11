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

There's a data-model.jpg file where you can see data model.
There's also a Postman collection JSON file to test API easier.

Repository: [repository]
 on GitHub.

## Installation

I chose PostgreSQL as database, so you must have a PostgreSQL database, doesn't matter if it's empty, it will be synced with Sequelize.
#####  Dont forget to fill .ENV with your database URL

It requires [Node.js](https://nodejs.org/) v22.8.0 to run.
If you have nvm installed you can do 
```sh
nvm use
```
(there's a .nvmrc file that contains appropiate node version)

Install the dependencies and devDependencies, database will be seeded automatically.

```sh
cd backend-wisely
npm i
npm run dev
```

## There's a .env.example file but here's what you need:
### EXAMPLE:
PORT=<PORT>
DB_URI=postgres://user:password@host:5432/database

## License

MIT

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [repository]: <https://github.com/rubenromanvilasau/backend-wisely>
   [Sequelize]: <https://sequelize.org/>
