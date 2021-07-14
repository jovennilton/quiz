const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./db')
const questaoRouter = require('./routes/rotas')

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//require('./controllers/authControllers')(app);  ---

app.use('/api', questaoRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))