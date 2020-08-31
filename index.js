const express = require('express');
const path = require('path');
const sendmail = require('./mail');
const verifiy = require('./verifyEmail')
const app = express();



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
  
    console.log(email)
    const IsValid = await verifiy(email)
    if(IsValid === 'valid'){

    }
        
//   sendmail(email, subject, message, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.status(500).json("fucking error");
//         }else{
//             console.log('success');
//             res.send('email sent!');
//         }
      
//     }) 
    
});

//-------------listening to server------------------
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));