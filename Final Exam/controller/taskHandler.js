const taskSchema = require('../model/taskSchema')

module.exports.viewTask = async (req, res) => {
    await taskSchema.findOne({ user: req.user.id }).then((data) => {
        res.render('taskItem', { tasks: data, role: req.user.role })
    })
}
module.exports.taskForm = async (req, res) => {
    res.render('taskForm', { id: req.user.id })
}