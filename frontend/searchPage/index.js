document.addEventListener("DOMContentLoaded",()=>{
    console.log("hello")
    let selectUsers = document.querySelector("#users")
    let results = document.querySelector("#results")

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

    let newUser = document.querySelector("#newUser");

    newUser.addEventListener("submit", async (event)=>{
        event.preventDefault()
        results.innerHTML = ""

        let userInfo = {first_name:newUser.firstName.value,last_name:newUser.lastName.value,age:newUser.age.value,about_statement:aboutStatement.value}
        debugger
        let userUrl = "http://localhost:3000/users/"

        try{
            let usersDb = await axios.post(userUrl,userInfo)
            debugger
            if(usersDb.status = 200){
                let h4 = document.createElement("h4")
                h4.innerText = `${usersDb.data.status} ${usersDb.data.message}`
                results.appendChild(h4)
            }
            fetchAllUsers()

            newUser.reset()
        } catch (err){
            console.log(err)
        }


    })

    newUser.addEventListener("input",()=>{
        results.innerHTML=""
    })
})