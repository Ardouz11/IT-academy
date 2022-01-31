var { response } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var result
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"itdb"
  });

router.get('/:id',async function (req, res, next) {
  try {     
            let listOfCustomers
            let sql = `SELECT * FROM person where id_training=?;`
            con.query(sql,[req.params.id],(err, result, fields) =>{
               
                if(err)
                {
      
                
                  return res.send({ status: 0, data: "Cannot find data from db" });
                }
                listOfCustomers=result
  
                   return res.send({ status: 1, listOfCustomers:listOfCustomers});

})

}
catch (error) {
  console.log("error")
return res.send({ status: 0, data: "connection error"});

}

}
)
module.exports = router;