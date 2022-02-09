var { response } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var result
var con = mysql.createConnection({
  host: "localhost",
  user: "cvbt2687_root",
  password: "rachuser@1998",
  database:"cvbt2687_itdb"
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
            let resultsTraining,resultsTitle1
            let resultsTitle2=[]
            let sql = `SELECT * FROM training where id_training=?;`
            let sql_title1 = `SELECT * FROM title1 where id_training=?;`
            let sql_title2 = `SELECT * FROM title2 where id_title1=?;`
            con.query(sql,[req.params.id],(err, result, fields) =>{
               
                if(err)
                {
      
                
                  return res.send({ status: 0, data: "Cannot find data from db" });
                }
                resultsTraining=result
                con.query(sql_title1,[req.params.id],(err, result, fields) =>{
               
                  if(err)
                  {
        
                  
                    return res.send({ status: 0, data: "Cannot find data from db" });
                  }
                  resultsTitle1=result
             /*     for(res of resultsTitle1){
                  con.query(sql_title2,res.id_title1,(err, result, fields) =>{
                      
                    if(err)
                    {
          
                    
                      return res.send({ status: 0, data: "Cannot find data from db" });
                    }
                    resultsTitle2=resultsTitle2.concat(result)
                  })}*/
                   return res.send({ status: 1, resultTraining:resultsTraining,resultsTitle1:resultsTitle1});
                               
})
})

}
catch (error) {
  console.log("error")
return res.send({ status: 0, data: "connection error"});

}

}
)
module.exports = router;