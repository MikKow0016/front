// src/components/MailList.jsx
import React from 'react';
import MailItem from './MailItem';
import './MailList.css';

function MailList({ mails, loading, onMailSelect, activeFolder }) {

  const getMailListHeading = () => {
    const folderNames = {
      inbox: 'Odebrane', sent: 'Wysłane', drafts: 'Wersje robocze', trash: 'Kosz'
    };
    return folderNames[activeFolder] || 'Maile';
  };

  return (
    // ZMIANA: Usunęliśmy klasy 'aurora-glass' i 'mail-list-card', 
    // zastępując je prostą klasą 'mail-list-container'.
    <div className="mail-list-container">
      <h2 className="mail-list-heading">{getMailListHeading()}</h2>
      
      {loading ? (
        <div className="status-box"><p>Ładowanie maili...</p></div>
      ) : mails.length > 0 ? (
        // Nazwa 'mails-grid' pozostaje, ponieważ nadal używamy siatki do układu.
        <div className="mails-grid"> 
          {mails.map((mail) => (
            <MailItem key={mail.id} mail={mail} onSelectMail={onMailSelect} />
          ))}
        </div>
      ) : (
        <div className="status-box"><p>Brak maili do wyświetlenia.</p></div>
      )}
    </div>
  );
}

export default MailList;