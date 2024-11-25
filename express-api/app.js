const express = require('express')
const logger = require('morgan')


// instancia aplicación
const app = express()



// configuraciones
app.use(logger('dev'))
app.use(express.json())

// endpoints
app.get('/api/products', (req, res) => {

    const backeryProductsData = [
        {
            _id: 1,
            name: 'Tarta sacher',
            cost: 22
        },
        {
            _id: 2,
            name: 'Natillas',
            cost: 10
        }
    ]

    res.json(backeryProductsData)
})

app.get('/api/comments', (req, res) => {

    const commentsData = [
        {
            _id: 1,
            productId: 2,
            comment: 'Rico'
        }
    ]

    res.json(commentsData)
})



// levantamiento server
app.listen(5005, () => console.log('Server running on port 5005'))