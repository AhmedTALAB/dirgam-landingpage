const Verifier = require('email-verifier')
require('dotenv').config()
const verifier = new Verifier(process.env.VERIFIER_API_KEY)

module.exports = verifyEmail = (email) => {
    console.log(email)
    return verifier.verify(email, (err, data) => {
        if(err){
            console.log(err, "it is fucking error")
            return err
        }
        return data
    })
    

}