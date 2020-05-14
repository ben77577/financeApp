const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function rowTOObject(row){
  return{
    username: row.username,
    amount: row.amount,
    description: row.description,
  };
}

app.get('/finance/:username/:description', (request, response) => {
  const query = 'SELECT username, amount, description FROM purchase WHERE username = ? AND description = ?';
  const params = [request.params.username, request.params.description];
  connection.query(query, params, (error, rows) => {
    response.send({
     ok: true,
     purchases: rows.map(rowTOObject),
    });
  });
});

app.post('/finance', (request, response) => {
  const query = 'INSERT INTO purchase(username, amount, description) VALUES (?, ?, ?)';
  const params = [request.body.username, request.body.amount, request.body.description];
  connection.query(query, params, (error, result) => {
    response.send({
     ok: true,
     id: result.insertId,
    });
  });
});

app.patch('/finance:id', (request, response) => {
  const query = 'UPDATE purchase SET username = ?, amount = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
  const params = [request.body.username, request.body.amount, request.body.description, request.params.id];
  connection.query(query, params, (error, result) => {
    response.send({
     ok: true,
    });
  });
});

app.delete('/finance:id', (request, response) => {
  const query = 'DELETE FROM purchase WHERE id = ?';
  const params = [request.params.id];
  connection.query(query, params, (error, result) => {
    response.send({
     ok: true,
    });
  });
});


const port = 3443;
app.listen(port, () => {
  console.log(`Live on port ${port}`);
});
