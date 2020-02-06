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
            
            full_name:fullName.value,
            email: email.value,
            date_of_birth:birthday.value,
            gender: gender.value,
            profile_pic:"None set",
            join_date: ""

        })
        debugger
       fullName.value = ""
       email.value = ""
       birthday.value = ""
       gender.value = ""
    }catch(err){
        console.log(err)
    }
})

})