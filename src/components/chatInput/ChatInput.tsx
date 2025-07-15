import { AiOutlineArrowUp } from 'react-icons/ai';

import './ChatInput.css';


const ChatInput = () => {

    return (
        <div className="container">
            <textarea className="input" placeholder="Ask anything" />
            <button className="send-button">
                <AiOutlineArrowUp className="up-arrow-icon" />
            </button>
        </div>
    );
}

export default ChatInput;