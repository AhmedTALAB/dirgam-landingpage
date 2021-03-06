const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth:{
        api_key: process.env.MAIL_GUN_API_KEY,
        domain: process.env.MAIL_GUN_DOMAIN,
    }
};
// create transporter
const transporter = nodemailer.createTransport(mailgun(auth));
//-----------function send email---------------------------
const sendmail = (email, subject, text, cb)=>{
const mailoption = {
    from: email,
    to: 'ahmdbirthday@gmail.com',
    subject,
    text,
    
};
//send data
transporter.sendMail(mailoption, (err, data)=>{
    console.log("error with nodemailer")
    if(err){
        cb(err, null);
    }else{
        cb(null, data);
    }
});
}

module.exports = sendmail;
