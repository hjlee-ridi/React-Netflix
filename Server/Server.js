const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root1",
    password: "",
    database: "netflix"
})



app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM login WHERE id = ? AND password = ?";

    db.query(sql, [req.body.id,  req.body.password], (err, data) => {
        if(err) return res.json(err);
        if(data.length > 0) {
            return res.json("Login Successfully")
        } else {
            return res.json("No Record")
        }
    })
})

app.listen(8080, () => {
    console.log("Listening...");
})

