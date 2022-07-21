const express =  require('express')
const router = express.Router()
const Task = require('../models/task.js')

router.get('/', (req, res) => {
    Tasks.find({}, (err, fioundTasks) => {
        res.json(fioundTasks)
    })
})

module.exports = router