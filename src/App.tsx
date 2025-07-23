import './App.css';
import ChatInput from './components/chatInput/ChatInput';
import Header from './components/header/Header';

import incognitoIcon from './assets/incognito.png';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <div className='content'>
      <Header />
      <div className='app-container'>
        <div className='box'>
          <img className='incognito-img' src={incognitoIcon} width={50} height={50} />
          <label className='app-name'>ChatGPT</label>
        </div>
        <ChatInput />
      </div>
      <Footer />
    </div>
  );    
}

export default App;