// Backend (server.js)
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tarun#4060',
  database: 'SignUp',
});

app.post('/signup',(req,res)=>{
  const sql="INSERT INTO users(`name`,`email`,`password`) VALUES(?)";
  const values=[
    req.body.name,
    req.body.email,
    req.body.password
  ]
  db.query(sql,[values],(error,data)=>{
    if(error){
      return res.json("Error");
    }
    return res.json(data);
  })
})
app.post('/login',(req,res)=>{
  const sql="select*from users where `email`=? AND `password`=?";
  db.query(sql,[req.body.email,req.body.password],(error,data)=>{
    if(error){
      return res.json("Error");
    }
    if(data.length>0){
      return res.json("success");
    }else{
      return res.json("fail");
    }
  })
})
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tarun#4060',
  database: 'List_Of_Equipments'
});
connection.connect();
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM equipments', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(8081,()=>{
  console.log("listening");
})