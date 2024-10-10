const express = require('express');
const sequelize = require('./database/database');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/error-middleware');
require('dotenv').config();

require('./models/task.model');
require('./models/user.model');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

app.listen(app.get('port'), async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        console.log('------SYNCING DATABASE------');
        await sequelize.sync();
        console.log('Database sync completed');

    } catch (error) {
        console.error('Unable to connect or sync to the database:', error);
    }

    console.log('Server running on port', app.get('port'));
});