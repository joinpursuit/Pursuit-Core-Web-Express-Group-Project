console.log("hello World")
document.addEventListener("DOMContentLoaded", async()=>{
    try{
        debugger
        let res = await axios.get(`http://localhost:3000/users/${res.params.id}`);
        res.status(200).json({

        })




    }catch(err){
        res.status(400).json({

        })

    }
})