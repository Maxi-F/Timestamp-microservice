const express = require('express');
const app = express();
const { verifyDateInput } = require('../logic/logic')

app.get('/api/timestamp/:date_string?', (req, res) => {
    const dateString = req.params.date_string;

    let dateToRespond = verifyDateInput(dateString);
    res.json(dateToRespond);
})

module.exports = app;