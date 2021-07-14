const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestaoSchema = new Schema(
    {
        pergunta: { type: String, required: true },
        resposta_1: { type: String, required: true },
        resposta_2: { type: String, required: true },
        resposta_3: { type: String, required: true },
        resposta_4: { type: String, required: true },
        gabarito: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('questoes', QuestaoSchema)