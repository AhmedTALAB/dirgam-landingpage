const sendMessage = () => {
    const subject = document.getElementById('usr').value;
    const email = document.getElementById("pwd").value;
    const message = document.getElementById("comment").value;



         fetch('/email', {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subject,
            email,
            message,
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