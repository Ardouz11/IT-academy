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
  router.post('/',async function (req, res, next) {
    try {
      if(req.headers.authorization=='rachuser@1998'){
      let { name, email, phone,id_training } = req.body;
      
              let sql = `Insert Into person (full_name, email, phone,id_training) VALUES ( ?, ?, ?,?)`
              
              con.query(sql, [name, email, phone,id_training],(err, result, fields) =>{
                 
                  if(err)
                  {
        
                    
                    return  res.send({ status: 0, data: "Cannot Insert to db" });
                  }
                  
                  return  res.send({ status: 1, data: "Succesffuly added to db"});
                  
  }
              )}}
catch (error) {
  return res.send({ status: 0, data: "connection error"});

}

  }
)
module.exports = router;