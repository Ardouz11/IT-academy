var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var md5 = require('md5');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'rachid.ardouz@itsren-academy.com',
    pass: 'nHl1v6vvvoXo'
  }
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb"
  });
  router.post('/',async function (req, res, next) {
    try {
      let mailOptions = {
        from: req.body.email,
        to: 'contact@itsren-academy.com',
        subject: 'Sending Email using Node.js',
        text: req.body.description
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Error",error);
          return res.send({ status: 0, data: error });
        } else {
          console.log('Email sent: ' + info.response);
          return res.send({ status: 1, data: "Email sent successfully" });
        }
      }); 
    }  
catch (error) {
  return  res.send({ status: 0, error: error });
}
  }
)
module.exports = router;