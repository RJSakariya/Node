const taskSchema = require('../model/taskSchema')

module.exports.viewTask = async (req, res) => {
    await taskSchema.findByOne({ user: res }).then((data) => {
        req.render('taskItem', { tasks: data })
    })
}