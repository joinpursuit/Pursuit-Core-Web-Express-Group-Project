document.addEventListener("DOMContentLoaded", async () => {
    debugger
    let userName = document.querySelector("#name");
    try {
        let res = await axios.get(`http://localhost:3000/users/${req.params.id}`);
        res.status(200).json({
            // userName =  full_name.value
        })
        debugger

    } catch (error) {
        
    }
})












//DISPLAY USER NAME
//GET ALL POSTS
//GET ALL COMMENTS ON A SINGLE POST