const express = require('express');
const path = require('path');
const sendmail = require('./mail');
const app = express();
require('dotenv').config()
const quickemailverification = require('quickemailverification').client(process.env.VERIFIER_API_KEY).quickemailverification();


//--------------middlwares------------------------
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//=====
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//-----------main route--------------------
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
//-----post request
app.post('/email', async (req, res)=>{ 
    const { subject, email, message } = req.body;
  
    quickemailverification.verify(email, (Err, response) => {
        console.log(response)
        console.log("in the function")
        if(Err) {
            console.log(Err)
            return res.status(500).json("error with verifer!")
        }
        if(response.body.result == 'valid'){
            console.log("vaild")
            sendmail(email, subject, message, (err, data) => {
                if(err) {
                    console.log(err);
                    res.status(500).json("error with nodemailer");
                }else{
                    console.log('success');
                    res.json("تم ارسال البريد بنجاح!")
                }
                
            }) 
        } else if(response.body.result == 'invalid'){
            console.log("wrong Email")
            return res.status(400).json("البريد الالكتروني غير صحيح")
        }else{
            return res.status(500).json("error with verifeier")
        }
    })
    console.log("waiting")
   
    }
    
        
//
    
);

//-------------listening to server------------------
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));