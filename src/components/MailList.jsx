// src/components/MailList.jsx
import React from 'react'; // Usunięto 'useState', ponieważ nie jest już potrzebny
import MailItem from './MailItem';
import './MailList.css';

function MailList({ mails, loading, onMailSelect, activeFolder }) {
  // Usunięto stan 'inboxViewMode', który nie jest już używany
  // const [inboxViewMode, setInboxViewMode] = useState('standard');

  const getMailListHeading = () => {
    const folderNames = {
      inbox: 'Odebrane', sent: 'Wysłane', drafts: 'Wersje robocze', trash: 'Kosz'
    };
    return folderNames[activeFolder] || 'Maile';
  };

  return (
    <div className="mail-list-card aurora-glass">
      <div className="mail-list-content">
        {/* Usunięto cały blok z przyciskami 'Główna skrzynka' i 'AI Sortowane' */}
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