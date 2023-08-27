const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.sendFile('/index.html', {root: __dirname })
})
app.listen(process.env.PORT || 3000)