const app = require("./index")
const connect = require("./config/db")

app.listen(3500, async() => {
    await connect()
    console.log("listening to the port 3500")
})

