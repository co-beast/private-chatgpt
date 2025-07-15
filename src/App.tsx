import './App.css';
import ChatInput from './components/chatInput/ChatInput';

const App = () => {

  return (
    <div className='app-container'>
      <label className='app-name'>ChatGPT</label>
      <div className='chat-input'>
         <ChatInput />
      </div>
    </div>
  );
}

export default App;