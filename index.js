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
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
//-----post request
app.post('/email', async (req, res)=>{ 
    const { subject, email, message } = req.body;
  
    quickemailverification.verify(email, (Err, response) => {
        console.log(response.body.result)
        console.log("in the function")
        if(Err) throw new Error("Error with email verifier")
        if(response.body.result == 'valid'){
            console.log("vaild")
            sendmail(email, subject, message, (err, data) => {
                if(err) {
                    console.log(err);
                    res.status(500).json("fucking error");
                }else{
                    console.log('success');
                    res.send('email sent!');
                }
                
            }) 
        } else{
            console.log("wrong Email")
            return res.status(400).json("invalid email")
        }
    })
    console.log("waiting")
   
    }
    
        
//
    
);

//-------------listening to server------------------
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));