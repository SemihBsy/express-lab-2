const express = require('express')
const app = express()

const PORT = 3000

app.get('/greeting/:name', (request, response) => {
    response.send(`"Wow! Hello there, ${request.params.name}"`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
    response.send("The tip is " + (parseInt(request.params.total) * parseInt(request.params.tipPercentage) / parseInt(100)))
})





app.listen(PORT, () => {
    console.log('Express is listening on port: ', PORT)
})