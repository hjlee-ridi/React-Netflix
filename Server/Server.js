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
    password: "8975",
    database: "netflix",
    wait_timeout : 28800,
    connect_timeout :10
})



app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM login WHERE id = ? AND password = ?";

    db.query(sql, [req.body.id,  req.body.password], (err, data) => {
        if(err) return res.json(err);
        if(req.body.id.length == 0) {
            return res.json(<div dangerouslySetInnerHTML={ErrorIdMessage()} />);
        }
        if(data.length > 0) {
            return res.json("Login Successfully")
        } else {
            return res.json("실패")
        }
    })
})

app.listen(8080, () => {
    console.log("Listening...");
})

