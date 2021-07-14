const mongoose = require('mongoose')

//mongoose.connect('mongodb://mongo:27017/quiz', { useNewUrlParser: true })
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/quiz', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log('MongoDB Conectado...')
}).catch((e) => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection
module.exports = db

