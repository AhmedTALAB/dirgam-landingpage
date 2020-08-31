const Verifier = require('email-verifier')
const apiKey = "at_0PlhkkvsB2xJNZqJAZojYHYCfU9By"
const verifier = new Verifier(apiKey)

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