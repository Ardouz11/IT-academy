var { response } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"itdb"
  });
  router.get('/',async function (req, res, next) {
  
    try {
      
              let sql = `SELECT id_training, title, description, price, pathImage FROM training;`
              
              con.query(sql,(err, result, fields) =>{
                 
                  if(err)
                  {
        
                  
                    res.send({ status: 0, data: "Cannot find data from db" });
                  }
                  
                  res.send({ status: 1, data:result});
                  
  }
              )}
catch (error) {
  res.send({ status: 0, data: "connection error"});

}

  }
)
module.exports = router;