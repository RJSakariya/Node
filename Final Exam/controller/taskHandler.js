const taskSchema = require('../model/taskSchema')

module.exports.viewTask = async (req, res) => {
    await taskSchema.find({}).populate({ path: 'user' }).then((data) => {
        res.render('taskItem', { tasks: data.filter((task) => task.user._id == req.user._id), role: req.user })
    })
}
module.exports.taskForm = async (req, res) => {
    res.render('taskForm', { id: req.user._id, role: req.user })
}
module.exports.add = async (req, res) => {
    await taskSchema.create(req.body).then((data) => {
        res.redirect('/task/taskForm')
    })
}