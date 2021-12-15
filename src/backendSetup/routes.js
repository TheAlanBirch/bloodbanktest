const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());

const credentials = {
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'blood_bank_schema'
}

// create database conn
const conn = mysql.createConnection(credentials);

// connect to database
conn.connect((err) => {
    if(err) throw err;
    console.log('MySQL Connected...');
});

// show all patients
app.get('/api/patients', (req, res) => {
    let sql = "SELECT * FROM patients";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//show single patient
app.get('/api/patients/:patient_ID',(req, res) => {
    let sql = "SELECT * FROM patients WHERE patient_ID="+req.params.patient_ID;
    let query = conn.query(sql, (err, results) => {
        if(err) console.log("Error occurred:" + err);
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//add new patient
app.post('/api/patients',(req, res) => {
    let data = {
        patient_ID: req.body.patient_ID, first_name: req.body.first_name,
        last_name: req.body.last_name, blood_group: req.body.blood_group,

    };
    let sql = "INSERT INTO patients SET "+data;
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//update product
// app.put('/api/patients/:id',(req, res) => {
//     let sql = "UPDATE patients SET patient_name="+req.body.patient_name+", product_price="+req.body.product_price+" WHERE product_id="+req.params.id;
//     let query = conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     });
// });

//Delete product
app.delete('/api/patients/:id',(req, res) => {
    let sql = "DELETE FROM patients WHERE patient_ID="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Server listening
app.listen(3001,() =>{
    console.log('Server started on port 3001...');
});
