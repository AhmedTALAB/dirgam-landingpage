const express = require('express');
const path = require('path');
const sendmail = require('./mail');
const app = express();

//--------------middlwares------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//=====
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//-----------main route--------------------
app.get('/', (req,res)=>{
    res.render('index');
});
//-----post request
app.post('/email', (req, res)=>{
    
const { subject, email, text } = req.body;
sendmail(email, subject, text, (err, data)=>{
    if(err){
        res.status(500).json({message: 'internal error'});
        console.log(err);
    }else{
        res.json('email send');
    }
});
console.log(req.body);

});

//-------------listening to server------------------
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));