const express = require('express');
const app = express();

app.use(require('./routes/routes'));

process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT));