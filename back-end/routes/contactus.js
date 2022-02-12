var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: 'true',
  port: '465',
  auth: {
    user: 'rachid.ardouz@itsren-academy.com',
    pass: 'nHl1v6vvvoXo'
  }
})
  router.post('/',async function (req, res, next) {
    try {
      if(req.headers.authorization=='rachuser@1998'){
      console.log("email is ",req.body.email)
      let mailOptions = {
        from: req.body.email,
        to: 'contact@itsren-academy.com',
        subject: 'Message from '+req.body.email,
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
  }  
catch (error) {
  return  res.send({ status: 0, error: error });
}
  }
)
module.exports = router;