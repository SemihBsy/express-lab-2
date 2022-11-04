const express = require('express')
const app = express()

const PORT = 3000

app.get('/greeting/:name', (request, response) => {
    response.send(`"Wow! Hello there, ${request.params.name}"`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
    response.send("The tip is " + (parseInt(request.params.total) * parseInt(request.params.tipPercentage) / parseInt(100)))
})

const ballResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]



app.get('/magic/:question', (request, response) => {
    const randomResponse = ballResponses[Math.floor(Math.random() * ballResponses.length)]
    response.send(`${request.params.question}` + `<h1>${randomResponse}</h1>`)
})


app.listen(PORT, () => {
    console.log('Express is listening on port: ', PORT)
})



