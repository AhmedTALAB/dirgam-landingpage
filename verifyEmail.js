require('dotenv').config()
const quickemailverification = require('quickemailverification').client(process.env.VERIFIER_API_KEY).quickemailverification();


module.exports = (email) => {
    quickemailverification.verify(email, (err, response) => {
        if(err) throw new Error("Error with email verifier")
        return response.body.result
    })
}
