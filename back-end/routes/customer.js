var { response } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "cvbt2687_root",
    password: "rachuser@1998",
    database:"cvbt2687_itdb"
  });
  router.post('/',async function (req, res, next) {
    try {
      if(req.headers.authorization=='rachuser@1998'){
      let { name, email, phone } = req.body;
      
              let sql = `Insert Into person (full_name, email, phone,id_training) VALUES ( ?, ?, ?,"home")`
              
              con.query(sql, [name, email, phone],(err, result, fields) =>{
                 
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