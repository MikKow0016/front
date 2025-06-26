// src/components/MailList.jsx
import React, { useState } from 'react';
import MailItem from './MailItem';
import './MailList.css';

function MailList({ mails, loading, onMailSelect, activeFolder }) {
  const [inboxViewMode, setInboxViewMode] = useState('standard');

  const getMailListHeading = () => {
    const folderNames = {
      inbox: 'Odebrane', sent: 'Wysłane', drafts: 'Wersje robocze', trash: 'Kosz'
    };
    return folderNames[activeFolder] || 'Maile';
  };

  return (
    <div className="mail-list-card aurora-glass">
      <div className="mail-list-content">
        {activeFolder === 'inbox' && (
          <div className="main-buttons-container">
            <button className={`main-button ${inboxViewMode === 'standard' ? 'active' : ''}`} onClick={() => setInboxViewMode('standard')}>Główna skrzynka</button>
            <button className={`main-button ${inboxViewMode === 'ai_sorted' ? 'active' : ''}`} onClick={() => setInboxViewMode('ai_sorted')}>AI Sortowane</button>
          </div>
        )}
        <h2 className="mail-list-heading">{getMailListHeading()}</h2>
        {loading ? (
          <div className="status-box"><p>Ładowanie maili...</p></div>
        ) : mails.length > 0 ? (
          <div className="mails-grid">
            {mails.map((mail) => (
              <MailItem key={mail.id} mail={mail} onSelectMail={onMailSelect} />
            ))}
          </div>
        ) : (
          <div className="status-box"><p>Brak maili do wyświetlenia.</p></div>
        )}
      </div>
    </div>
  );
}

export default MailList;