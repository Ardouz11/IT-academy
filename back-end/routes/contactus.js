var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var md5 = require('md5');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb"
  });
  router.post('/',async function (req, res, next) {
    try {

      let { name, email, phone ,description} = req.body;
      console.log(req.body)
     // const hashed_phone = md5(phone.toString())
              let sql = `Insert Into contactus (name, email, phone,description) VALUES ( ?, ?, ?,?)`
              con.query(sql, [name, email, phone,description],(err, result, fields) =>{
                 
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