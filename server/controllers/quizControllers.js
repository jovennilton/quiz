const Movie = require('../models/db-models')

createQuestao = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Você deve fornecer uma questao',
        })
    }

    const questao = new Questao(body)

    if (!questao) {
        return res.status(400).json({ success: false, error: err })
    }

    questao
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: questao._id,
                message: 'Questão criada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Questão não criada!',
            })
        })
}

updateQuestao = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Você deve fornecer uma questao para atualizar',
        })
    }


    Questao.findOne({ _id: req.params.id }, (err, questao) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Questao não encontrada!',
            })
        }
        questao.pergunta = body.pergunta
        questao.resposta_1 = body.resposta_1
        questao.resposta_2 = body.resposta_2
        questao.resposta_3 = body.resposta_3
        questao.resposta_4 = body.resposta_4
        questao.gabarito = body.gabarito
        
        questao
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: questao._id,
                    message: 'Questão atualizada!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Questão não atualizada!',
                })
            })
    })
}

deleteQuestao = async (req, res) => {
    await Questao.findOneAndDelete({ _id: req.params.id }, (err, questao) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!questao) {
            return res
                .status(404)
                .json({ success: false, error: `Questao não encontrada` })
        }

        return res.status(200).json({ success: true, data: questao })
    }).catch(err => console.log(err))
}

getQuestaoById = async (req, res) => {
    await Questao.findOne({ _id: req.params.id }, (err, questao) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!questao) {
            return res
                .status(404)
                .json({ success: false, error: `Questao não encontrada` })
        }
        return res.status(200).json({ success: true, data: questao })
    }).catch(err => console.log(err))
}

getQuestoes = async (req, res) => {
    await Questao.find({}, (err, questoes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!questoes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Questões não encontradas` })
        }
        return res.status(200).json({ success: true, data: questoes })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuestao,
    updateQuestao,
    deleteQuestao,
    getQuestoes,
    getQuestaoById,
 }