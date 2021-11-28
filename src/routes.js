const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const credentials = {
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'blood_bank_schema'
}
const connection = mysql.createPool(credentials);

const app = express();

app.get('/patients', (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query('SELECT * FROM patients', (error, results, fields) => {
            if (error) throw error;

            res.send(results)
        });
    });
});

app.listen(3001, () => {
    console.log('Go to http://localhost:3001/patients so you can see the data.')
});