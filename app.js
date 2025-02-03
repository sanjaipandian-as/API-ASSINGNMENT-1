const express=require('express')
const app=express();

function greet() {
    let date=new Date()
    let day=date.getDate()

    if (day==1) {
        return{
            "dayMessage": "Happy Monday! Start your week with energy!"
        }
    }
    else if (day==5){
        return{
            "dayMessage": "It's Friday! The weekend is near!"
        }   
    }

    else{
        return{"dayMessage": "Have a wonderful day!."}
    }
}

app.get("/assistant/greet",async(req,res)=>{
    try {
        let user = req.query.name
        let message=greet()
        console.log(message)

        let welcomemessage = `welcomeMessage": "Hello, ${user} Welcome to our assistant app!`
        message["welcomeMessage"]=welcomemessage
        console.log(message)

        res.status(200).json(message)
    }catch (error){
        res.status(500).json({staus:false,message:"internal server error"})
    }
})



app.listen(3000,()=>{
    try{
        console.log("Working working succesfully")
    }catch(error) {
        console.log(error)
    }
})