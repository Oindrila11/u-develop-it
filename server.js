const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'SwapnilOindrila062020',
        database: 'election'
    },
    console.log('connected to the elction database.')
);

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     //console.log(rows);
// });
// app.use((req,res) => {
//     res.status(404).end();
// });
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err,row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row);
// });
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});