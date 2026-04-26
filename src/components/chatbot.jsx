import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import './chatbot.css';

function Chatbot() {
  const { t } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);


  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      textKey: 'chatbot.welcome' 
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const analyzeAndRespond = (userText) => {
    const text = userText.toLowerCase();
    
    setTimeout(() => {
      // Minimum de commande
      if (text.includes('minimum') || text.includes('quantité') || text.includes('moq') || text.includes('quantity') || text.includes('how many')) {
        addBotMessage('chatbot.resp_moq', '/rendez-vous', 'chatbot.link_moq');
      }
      // Prototypes 
      else if (text.includes('prototype') || text.includes('échantillon') || text.includes('echantillon') || text.includes('sample') || text.includes('test')) {
        addBotMessage('chatbot.resp_proto', '/contact', 'chatbot.link_proto');
      }
      // Delais
      else if (text.includes('délai') || text.includes('temps') || text.includes('quand') || text.includes('time') || text.includes('delay') || text.includes('how long')) {
        addBotMessage('chatbot.resp_delai', '/contact', 'chatbot.link_delai');
      }
      // Prix 
      else if (text.includes('prix') || text.includes('coût') || text.includes('soumission') || text.includes('tarif') || text.includes('price') || text.includes('cost') || text.includes('quote')) {
        addBotMessage('chatbot.resp_prix', '/contact', 'chatbot.link_prix');
      }
      // Contact 
      else if (text.includes('contact') || text.includes('email') || text.includes('appeler') || text.includes('call') || text.includes('phone')) {
        addBotMessage('chatbot.resp_contact', '/contact', 'chatbot.link_contact');
      } 
      // Rendez-vous
      else if (text.includes('rendez-vous') || text.includes('rencontre') || text.includes('rdv') || text.includes('appointment') || text.includes('meeting')) {
        addBotMessage('chatbot.resp_rdv', '/rendez-vous', 'chatbot.link_rdv');
      }
      else {
        addBotMessage('chatbot.resp_default', '/contact', 'chatbot.link_default');
      }
    }, 600);
  };

  const addBotMessage = (textKey, linkPath = null, linkTextKey = null) => {
    setMessages(prev => [...prev, { sender: 'bot', textKey, linkPath, linkTextKey }]);
  };

  const addUserMessage = (text, textKey = null) => {
    setMessages(prev => [...prev, { sender: 'user', text, textKey }]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    analyzeAndRespond(inputValue);
    setInputValue('');
  };

  const handleQuickButton = (action) => {
    if (action === 'moq') {
      addUserMessage(null, 'chatbot.user_moq');
      analyzeAndRespond("quantité");
    } else if (action === 'delai') {
      addUserMessage(null, 'chatbot.user_delai');
      analyzeAndRespond("délai");
    } else if (action === 'proto') {
      addUserMessage(null, 'chatbot.user_proto');
      analyzeAndRespond("prototype");
    } else if (action === 'rdv') {
      addUserMessage(null, 'chatbot.user_rdv');
      analyzeAndRespond("rendez-vous");
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div>
              <h3>{t('chatbot.title')}</h3>
              <p>{t('chatbot.subtitle')}</p>
            </div>
            <button className="close-bot" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.sender}`}>
                <p>{msg.textKey ? t(msg.textKey) : msg.text}</p> 
                
                {msg.linkPath && (
                  <button 
                    className="bot-link-btn" 
                    onClick={() => {
                      navigate(msg.linkPath);
                      setIsOpen(false);
                    }}
                  >
                    {t(msg.linkTextKey)} →
                  </button>
                )}
              </div>
            ))}
            
            <div className="quick-actions" style={{ marginBottom: '10px' }}>
              <button onClick={() => handleQuickButton('moq')}>{t('chatbot.btn_moq')}</button>
              <button onClick={() => handleQuickButton('delai')}>{t('chatbot.btn_delai')}</button>
              <button onClick={() => handleQuickButton('proto')}>{t('chatbot.btn_proto')}</button>
              <button onClick={() => handleQuickButton('rdv')}>{t('chatbot.btn_rdv')}</button>
            </div>
            
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder={t('chatbot.placeholder')} 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      )}

      <button className="chatbot-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>
    </div>
  );
}

export default Chatbot;