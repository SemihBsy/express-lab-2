const express = require('express')
const app = express()

const PORT = 3000


app.get('/', (request, response) => {
    request.params = 99
    response.send(`${request.params} Bottles of beer on the wall`)
})



app.get('/:number_of_bottles', (request, response) => {
    let bottlesLeft = parseInt(request.params.number_of_bottles) -1;
    if(bottlesLeft >= 1) {
        response.send(`${bottlesLeft} Bottles of beer on the wall <br/> <a href="http://localhost:3000/${bottlesLeft}"> take one down, pass it around</a>`)
    }else{
        response.send(`${bottlesLeft} Bottles of beer on the wall <br/> <a href="http://localhost:3000/100">Start Over</a>`)
    }
})

app.listen(PORT, () => {
    console.log('Listening')
})