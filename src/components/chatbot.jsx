import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Message d'accueil par défaut
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Bonjour ! 👋 Je suis l'assistant d'Authentic Performance Production. Nous sommes un atelier québécois spécialisé dans l'assemblage et la confection textile. Comment puis-je vous aider ?"
    }
  ]);

  // Fait défiler le chat vers le bas à chaque nouveau message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Le "cerveau" du bot : analyse les mots clés
  const analyzeAndRespond = (userText) => {
    const text = userText.toLowerCase();
    
    setTimeout(() => {
      let botResponse = "";

      // 1. Logique pour le Minimum de commande (MOQ)
      if (text.includes('minimum') || text.includes('quantité') || text.includes('combien') || text.includes('moq')) {
        botResponse = "Notre minimum de commande recommandé est de 50 unités, et nous n'avons pas de maximum ! Nous avons la capacité de gérer des productions à très grande échelle.";
        addBotMessage(botResponse, '/rendez-vous', 'Évaluer mon projet');
      }
      // 2. Logique pour les prototypes / échantillons
      else if (text.includes('prototype') || text.includes('échantillon') || text.includes('exemple') || text.includes('tester')) {
        botResponse = "Oui, tout à fait ! Nous réalisons toujours des échantillons et des prototypes avant de lancer la production finale pour nous assurer que tout correspond à vos attentes.";
        addBotMessage(botResponse, '/contact', 'Demander un prototype');
      }
      // 3. Logique pour les délais
      else if (text.includes('délai') || text.includes('temps') || text.includes('quand') || text.includes('longtemps') || text.includes('durée')) {
        botResponse = "Nos délais de production varient de 1 à 4 semaines, tout dépendant de l'envergure et de la complexité de votre projet.";
        addBotMessage(botResponse, '/contact', 'Vérifier nos disponibilités');
      }
      // 4. Logique pour les prix / soumissions
      else if (text.includes('prix') || text.includes('coût') || text.includes('soumission') || text.includes('tarif')) {
        botResponse = "Nos prix d'assemblage sont calculés sur mesure selon vos spécifications, le temps de coupe et de couture. Contactez-nous pour une soumission exacte !";
        addBotMessage(botResponse, '/contact', 'Demander une soumission');
      }
      // 5. Logique de Contact direct
      else if (text.includes('contact') || text.includes('email') || text.includes('appeler') || text.includes('téléphone')) {
        botResponse = "Pour toute question spécifique, notre équipe est là pour vous ! Voulez-vous aller sur notre page de contact ?";
        addBotMessage(botResponse, '/contact', 'Aller vers Contact');
      } 
      // 6. Logique de Rendez-vous
      else if (text.includes('rendez-vous') || text.includes('rencontre') || text.includes('visiter') || text.includes('rdv')) {
        botResponse = "Super ! Nous serions ravis de discuter de votre projet de production. Nos consultations se font le vendredi à notre atelier de Montréal.";
        addBotMessage(botResponse, '/rendez-vous', 'Prendre un rendez-vous');
      }
      // Réponse par défaut si le bot ne comprend pas
      else {
        botResponse = "Pour avoir une réponse précise sur notre confection textile ou discuter de votre projet, le mieux est de parler directement à l'un de nos experts.";
        addBotMessage(botResponse, '/contact', 'Contacter un expert');
      }
    }, 600);
  };

  const addBotMessage = (text, linkPath = null, linkText = null) => {
    setMessages(prev => [...prev, { sender: 'bot', text, linkPath, linkText }]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: inputValue }]);
    analyzeAndRespond(inputValue);
    setInputValue('');
  };

  // Les "Boutons Rapides"
  const handleQuickButton = (action) => {
    if (action === 'moq') {
      setMessages(prev => [...prev, { sender: 'user', text: "Quel est le minimum de commande ?" }]);
      analyzeAndRespond("quantité");
    } else if (action === 'delai') {
      setMessages(prev => [...prev, { sender: 'user', text: "Quels sont les délais ?" }]);
      analyzeAndRespond("délai");
    } else if (action === 'proto') {
      setMessages(prev => [...prev, { sender: 'user', text: "Faites-vous des prototypes ?" }]);
      analyzeAndRespond("prototype");
    } else if (action === 'rdv') {
      setMessages(prev => [...prev, { sender: 'user', text: "Prendre un rendez-vous" }]);
      analyzeAndRespond("rendez-vous");
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div>
              <h3>Assistant Authentic</h3>
              <p>Atelier de Confection</p>
            </div>
            <button className="close-bot" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.sender}`}>
                <p>{msg.text}</p>
                {msg.linkPath && (
                  <button 
                    className="bot-link-btn" 
                    onClick={() => {
                      navigate(msg.linkPath);
                      setIsOpen(false);
                    }}
                  >
                    {msg.linkText} →
                  </button>
                )}
              </div>
            ))}
            
            {/* Les boutons rapides sont maintenant affichés en permanence à la fin du chat */}
            <div className="quick-actions" style={{ marginBottom: '10px' }}>
              <button onClick={() => handleQuickButton('moq')}>Quantité minimale ?</button>
              <button onClick={() => handleQuickButton('delai')}>Délais de production ?</button>
              <button onClick={() => handleQuickButton('proto')}>Échantillons/Prototypes ?</button>
              <button onClick={() => handleQuickButton('rdv')}>Rendez-vous</button>
            </div>
            
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Posez votre question..." 
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