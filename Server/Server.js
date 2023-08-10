const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app =  express();
app.use(express.json());
// app.use(express.urlencoded({ extended: ture }));

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8975",
    database: "netflix"
})



app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [
        req.body.id,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Login Failed");
        return res.json(data);
    })
})

app.listen(3306, () => {
    console.log("Listening...");
})