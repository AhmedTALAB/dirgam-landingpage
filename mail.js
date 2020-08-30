const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth:{
        api_key:'278d3ed909b2b1798470f126ec8423d4-4d640632-728bcafb',
        domain: 'sandbox28f8f16ad56641a0b3d1c35a5ad10ad0.mailgun.org'
    }
};
// create transporter
const transporter = nodemailer.createTransport(mailgun(auth));
//-----------function send email---------------------------
const sendmail = (email, subject,text, cb)=>{
const mailoption = {
    from: email,
    to: 'ahmdbirthday@gmail.com',
    subject,
    text
};
//send data
transporter.sendMail(mailoption, (err, data)=>{
    if(err){
        cb(err, null);
    }else{
        cb(null, data);
    }
});
}

module.exports = sendmail;
