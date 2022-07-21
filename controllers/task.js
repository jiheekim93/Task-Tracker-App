const express =  require('express')
const router = express.Router()
const Task = require('../models/task.js')

router.get('/', (req, res) => {
    Tasks.find({}, (err, foundTasks) => {
        res.json(foundTasks)
    })
})

module.exports = router