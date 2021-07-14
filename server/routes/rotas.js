const express = require('express')

const QuestaoController = require('../controllers/quizControllers')

const router = express.Router()

router.post('/questao', QuestaoController.createQuestao)
router.put('/questao/:id', QuestaoController.updateQuestao)
router.delete('/questao/:id', QuestaoController.deleteQuestao)
router.get('/questao/:id', QuestaoController.getQuestaoById)
router.get('/questoes', QuestaoController.getQuestoes)

module.exports = router