const express = require('express')
const app = express()

const PORT = 3000

app.get('/greeting/:name', (request, response) => {
    response.send(`"Wow! Hello there, ${request.params.name}"`)
})





app.listen(PORT, () => {
    console.log('Express is listening on port: ', PORT)
})