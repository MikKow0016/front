// src/App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MailList from './components/MailList';
import MailDetail from './components/MailDetail';
import ComposeMail from './components/ComposeMail';
import ThemeSwitcher from './components/ThemeSwitcher';
import VideoBackground from './components/VideoBackground'; // Import nowego komponentu
import './App.css'; 

// ... (reszta kodu fakeMails bez zmian)

function App() {
  // ... (reszta haków stanu bez zmian)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // ... (reszta kodu useEffect i handlerów bez zmian)

  const selectedMail = mails.find(mail => mail.id === selectedMailId);
  
  return (
    <div className="app-container">
      {/* NOWOŚĆ: Dodajemy komponent tła wideo */}
      <VideoBackground theme={theme} />

      <header className="app-header">
        <div className="app-header-content">
          <h1 className="app-title">NeuraMail</h1>
          <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
        </div>
      </header>
      <div className="app-content">
        <Sidebar 
          onComposeClick={handleToggleCompose} 
          onFolderChange={handleFolderChange} 
          activeFolder={activeFolder}
        />
        <main className="main-content">
          {selectedMailId ? (
            <MailDetail mail={selectedMail} onBack={handleBackToList} />
          ) : (
            <MailList 
              mails={mails}
              loading={loading}
              onMailSelect={handleSelectMail}
              activeFolder={activeFolder}
            />
          )}
        </main>
      </div>
      {isComposing && <ComposeMail onClose={handleToggleCompose} />}
    </div>
  );
}

export default App;