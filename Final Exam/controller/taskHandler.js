const taskSchema = require('../model/taskSchema')

module.exports.viewTask = async (req, res) => {
    await taskSchema.findOne({ user: req.user.id }).then((data) => {
        res.render('taskItem', { tasks: data })
    })
}