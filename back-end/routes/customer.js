var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb"
  });
  router.post('/',async function (req, res, next) {

    try {
      let { name, email, phone } = req.body;
              const sql = `Insert Into customers (name, email, phone) VALUES ( ?, ?, ? )`
              
              con.query(sql, [name, email, phone],(err, result, fields) =>{
                 
                  if(err)
                  {
                      res.send({ status: 0, data: err });
                  }
                  
  }
              )}
catch (error) {
  res.send({ status: 0, error: error });
}
  }
)
module.exports = router;