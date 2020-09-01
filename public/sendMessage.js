
window.onload = function(){

    const subjectInput = document.getElementById('usr')
    const emailInput = document.getElementById("pwd")
    const messageInput = document.getElementById("comment")

    subjectInput.addEventListener('change', () => {
        console.log("changing")
        subjectInput.classList.remove('is-invalid')
    })
    emailInput.addEventListener('change', () => {
        emailInput.classList.remove('is-invalid')
    })
    messageInput.addEventListener('change', () => {
        messageInput.classList.remove('is-invalid')
    })


}

const sendMessage = () => {

        
    const subjectInput = document.getElementById('usr')
    const emailInput = document.getElementById("pwd")
    const messageInput = document.getElementById("comment")

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

    console.log("failed")

    /// lisa dayer some shogol
    

        //  fetch('/email', {
        // method:"POST",
        // headers:{
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     subject,
        //     email,
        //     message,
        //     })
        // }).then((data) => data.json())
        // .then(res => {
        //     if(res.ok) {
        //         console.log(res.ok, res.status);
        //         // here i will do hanak almodal  tama irsal al email binajah
        //     }
        //     else{
        //         throw new Error("error")
        //         // lam yatem elrsal alemail binajah
        //     }
            
        // })
        // .catch(err => console.log(err + "fucking errr"))
        
        

   
}






