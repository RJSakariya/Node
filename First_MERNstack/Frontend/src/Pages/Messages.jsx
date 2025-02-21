import { useEffect, useState } from "react";
import "./Messages.css";
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:2000')
const Messages = () => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')
    const email = sessionStorage.getItem('email')
    const [input, setInput] = useState("");
    const [message, setMessage] = useState([])
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [])
    useEffect(() => {
        socket.on('Messages', (data) => {
            setMessage(data)
        })
    }, [socket])

    const handleSend = () => {
        if (input.trim()) {
            socket.emit('data', { message: input, token })
            setInput("");
        }
    };
    const handleDeleteMessage = (id) => {
        socket.emit('delete', { id, token })
    };
    return (
        <div className="messages-container">
            <h2 className="messages-title">Messages</h2>
            <div className="messages-list">
                {message.length > 0 && message.map((msg, ind) => (
                    <div
                        key={ind}
                        className={`message ${msg.user.email === email ? "user-message" : "other-message"}`}
                    >
                        <div>
                            <p>{msg.message}</p>
                            <span className="message-sender">{msg.user.name}</span>
                        </div>

                        {msg.user.email === email && (
                            <button className="delete-button" onClick={() => handleDeleteMessage(msg._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 6h18"></path>
                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <path d="M10 11v6"></path>
                                    <path d="M14 11v6"></path>
                                    <path d="M5 6h14v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6z"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    className="message-input"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSend} className="send-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>
        </div>
    );
};

export default Messages;
