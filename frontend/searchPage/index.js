document.addEventListener("DOMContentLoaded",()=>{
    console.log("hello")
    let selectUsers = document.querySelector("#users")

    const fetchAllUsers = async(user)=>{

        let userUrl = "http://localhost:3000/users/"

        try{
            let usersDb = await axios.get(userUrl)
            let users = usersDb.data.body
            users.forEach(user =>{
                let option = document.createElement("option")
                option.innerText = `${user.first_name} ${user.last_name}`
                option.value = user.id
                selectUsers.appendChild(option)
            })

        } catch (err){
            console.log(err)
        }

    }
    fetchAllUsers()

    
})