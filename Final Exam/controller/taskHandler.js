const taskSchema = require('../model/taskSchema')

module.exports.viewTasks = async (req, res) => {
    await taskSchema.find({}).populate({ path: 'user' }).then((data) => {
        res.render('taskItem', { tasks: data.filter((task) => task.user._id == req.user._id), role: req.user.role })
    })
}
module.exports.viewAllTasks = async (req, res) => {
    if (req.user.role === 'admin') {
        await taskSchema.find({}).populate({ path: 'user' }).then((data) => {
            res.render('taskList', { tasks: data, role: req.user.role })
        })
    } else {
        res.redirect('/tasks')
    }
}
module.exports.taskForm = async (req, res) => {
    res.render('taskForm', { id: req.user._id, role: req.user.role })
}
module.exports.add = async (req, res) => {
    await taskSchema.create(req.body).then((data) => {
        res.redirect('/tasks/taskForm')
    })
}
module.exports.delete = async (req, res) => {
    await taskSchema.findByIdAndDelete(req.params.id).then((data) => {
        res.redirect('/tasks')
    })
}