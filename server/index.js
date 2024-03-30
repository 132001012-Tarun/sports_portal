const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors')

app.use(cors())

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
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

