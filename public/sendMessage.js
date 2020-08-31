const sendMessage = () => {
    const subject = document.getElementById('usr');
    const email = document.getElementById("pwd");
    const message = document.getElementById("comment");

    const subjectVal = subject.value
    const emailVal = email.value
    const messageVal = message.value

    console.log(emailVal, messageVal, subjectVal)

         fetch('/email', {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subject: subject.value ,
            email: email.value,
            message: message.value,
            })
        }).then((data) => data.json())
        .then(res => {
            if(res.ok) {
                console.log(res.ok, res.status);}
            else{
                throw new Error("error")
            }
            
        })
        .catch(err => console.log(err + "fucking errr"))
        
        

   
}