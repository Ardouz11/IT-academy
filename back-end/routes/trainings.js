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
      res.setHeader('Content-Type', 'text/plain');
              let sql = `SELECT id_training, title, description, price, pathImage FROM training;`
              
              con.query(sql,(err, result, fields) =>{
                 
                  if(err)
                  {
        
                  
                   return res.send({ status: 0, data: "Cannot find data from db" });
                  }
                  
                  return res.send({ status: 1, data:result});
                  
  }
              )}
catch (error) {
  return res.send({ status: 0, data: "connection error"});

}

  }
)
router.get('/:id',async function (req, res, next) {
  try {

            let sql = `SELECT * FROM training where id_training=?;`
            
            con.query(sql,[req.params.id],(err, result, fields) =>{
               
                if(err)
                {
      
                
                  return res.send({ status: 0, data: "Cannot find data from db" });
                }
                
                return res.send({ status: 1, data:result});
                
}
            )}
catch (error) {
return res.send({ status: 0, data: "connection error"});

}

}
)
module.exports = router;