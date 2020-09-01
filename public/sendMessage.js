
const sendMessage = () => {

        
    const subjectInput = document.getElementById('usr')
    const emailInput = document.getElementById("pwd")
    const messageInput = document.getElementById("comment")

    const alert = document.getElementById("alert-itself")
    const alertContainer = document.getElementById("alert-container")
    const alertMessgae = document.getElementById('alert-message')

    const subject = subjectInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    console.log(subject, email, message)


    if(subject == ""){
        console.log("checking 1")
        subjectInput.placeholder = "يجب ادخال العنوان"
        subjectInput.classList.add('is-invalid')
        return
    }else if(email == ""){
        emailInput.placeholder = "يجب ادخال البريد الالكتروني"
        emailInput.classList.add('is-invalid')
        return
    }else if(message == ""){
        messageInput.placeholder = "يجب ادخال الاستفسار"
        messageInput.classList.add('is-invalid')
        console.log("checking 3")
        return
    }

    

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
        }).then((res) => {
            if(res.ok) {
                 console.log(res.ok, res.status, res);
                 
                     alert.classList.add('alert-success')
                 
                // here i will do hanak almodal  tama irsal al email binajah
            }
            else{
                console.log(res, res.ok, res.status)
                alert.classList.add('alert-danger')
            }

            return res.json()
        })
        .then(data => {
            alertMessgae.innerText = data
            alertContainer.classList.toggle('d-none', false)

            console.log(data)
            
        })
        .catch(err => {
            console.log(err + "some error happend")
            alertMessgae.innerText = "حدث خطأ ما اعد المحاولة"
            alertContainer.classList.toggle('d-none', false)
        })
        
        

   
}






