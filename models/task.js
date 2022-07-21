const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: String,
    day: String,
    reminder: Boolean
})

const Tasks = mongoose.model('Task', taskSchema)

module.exports = Tasks