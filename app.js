var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data


var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: "resumeinput1@gmail.com",
        pass: "ISHANT123"
    }
});
var port = 443;

app.use(express.static('public'));
app.use(express.static('views/src'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen(port,function(error){
    console.log('listing to port '+ port);

});
app.get('/',function(req,res){
    res.send('hello node');
});

app.post('/sendEmail',upload.array(),function(req,res){
    var mailOptions = {
        from: 'resumeinput1@gmail.com' , // sender address
        to: 'ishant.Wadhwa5@gmail.com, ishant.wadhwa4@gmail.com , resumeinput1@gmail.com', // list of receivers
        subject: req.body.contactSubject + '-Subject', // Subject line
        text:"Name = " + req.body.contactName  +" Mail Id = "+ req.body.contactEmail +" Message = " + req.body.contactMessage // plaintext body

    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }

    });
    res.send("Ok");

});