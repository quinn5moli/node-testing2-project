const express = require('express')

const Footballers = require('./footballersModel')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const players = await Footballers.getAll()
        res.status(200).json(players)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const player = await Footballers.findById(id)
        res.status(200).json(player)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const created = await Footballers.create(req.body)
        res.status(201).json(created)
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', (req, res, next) => {
    Footballers.remove(req.params.id)
        .then(deleted => {
            res.json(deleted)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router