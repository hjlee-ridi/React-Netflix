const express = require("express"); // npm i express | yarn add express
const cors    = require("cors");    // npm i cors | yarn add cors
const mysql   = require("mysql");   // npm i mysql | yarn add mysql
const app     = express();
const PORT    = 3000; // 포트번호 설정

// MySQL 연결
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "", 
    database: "netflix", 
});

app.use(cors({
    origin: "*",
    credentials: true, 
    optionsSuccessStatus: 200, 
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.get("/api/company", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    const sqlQuery = "SELECT * FROM login";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

<Button onClick={() => {
    // npm i axios | yarn add axios
    axios.get("http://localhost:3001/api/company")
        .then((res: any) => {
            console.log(res);
        }).catch((err: any) => {
            console.log(err);
        })
}}>api 호출하기</Button>