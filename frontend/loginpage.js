document.addEventListener("DOMContentLoaded",()=>{
let newUser = document.querySelector("#newUser")
newUser.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let fullName = document.querySelector("#fullName")
    let email = document.querySelector("#email")
    let birthday = document.querySelector("#dateOfBirth")
    let gender = document.querySelector("#gender")
    let testFunction = document.querySelector("#testFunction")
    try{
        let res = await axios.post("http://localhost:3000/users",{
            
            fullName:fullName.value,
            email: email.value,
            birthday:birthday.value,
            gender: gender.value,

        })

       fullName.value = ""
       email.value = ""
       birthday.value = ""
       gender.value = ""
       testFunction.innerText = res.config.data
    }catch(err){
        console.log(err)
    }
})

})