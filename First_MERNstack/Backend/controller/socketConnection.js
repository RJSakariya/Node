const jwt = require('jsonwebtoken');
const messageSchema = require('../model/messageSchema');

module.exports = async (socket) => {
    const messages = await messageSchema.find({}).populate({ path: 'user' });
    socket.emit('Messages', messages);
    socket.on('data', async (data) => {
        try {
            const user = jwt.verify(data.token, "messengerissecure");
            if (user.user._id) {
                await messageSchema.create({ message: data.message, user: user.user._id });
            }
        } catch (error) {
            console.error(error.message);
        }
        const messages = await messageSchema.find({}).populate({ path: 'user' });
        socket.emit('Messages', messages);
        socket.broadcast.emit('Messages', messages);
    });
    socket.on('delete', async (data) => {
        try {
            const user = jwt.verify(data.token, "messengerissecure");
            if (user.user._id) {
                await messageSchema.findByIdAndDelete(data.id)
            }
        } catch (error) {
            console.error(error.message);
        }
        const messages = await messageSchema.find({}).populate({ path: 'user' });
        socket.emit('Messages', messages);
        socket.broadcast.emit('Messages', messages);
    });
};
