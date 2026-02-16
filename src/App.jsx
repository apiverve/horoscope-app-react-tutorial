import { useState } from 'react';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY || 'your-api-key-here';
const API_URL = 'https://api.apiverve.com/v1/horoscope';

const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: '\u2648', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', symbol: '\u2649', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', symbol: '\u264A', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', symbol: '\u264B', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', symbol: '\u264C', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', symbol: '\u264D', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', symbol: '\u264E', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', symbol: '\u264F', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', symbol: '\u2650', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', symbol: '\u2651', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', symbol: '\u2652', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', symbol: '\u2653', dates: 'Feb 19 - Mar 20' }
];

function App() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchHoroscope = async (sign) => {
    setSelectedSign(sign);
    setLoading(true);
    setError('');
    setHoroscope(null);

    if (API_KEY === 'your-api-key-here') {
      setError('API key not configured. Add your key to .env file.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}?sign=${sign.name.toLowerCase()}`, {
        method: 'GET',
        headers: {
          'x-api-key': API_KEY
        }
      });

      const data = await response.json();

      if (data.status === 'ok') {
        setHoroscope(data.data);
      } else {
        setError(data.error || 'Failed to get horoscope');
      }
    } catch (err) {
      setError('Failed to connect to API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Daily Horoscope</h1>
        <p className="subtitle">Select your zodiac sign to reveal today's reading</p>
      </header>

      <div className="zodiac-grid">
        {ZODIAC_SIGNS.map((sign) => (
          <button
            key={sign.name}
            className={`zodiac-card ${selectedSign?.name === sign.name ? 'selected' : ''}`}
            onClick={() => fetchHoroscope(sign)}
          >
            <span className="zodiac-symbol">{sign.symbol}</span>
            <span className="zodiac-name">{sign.name}</span>
            <span className="zodiac-dates">{sign.dates}</span>
          </button>
        ))}
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Reading the stars...</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {horoscope && !loading && (
        <div className="horoscope-card">
          <div className="horoscope-header">
            <span className="big-symbol">{selectedSign.symbol}</span>
            <div>
              <h2>{horoscope.zodiac?.name || selectedSign.name}</h2>
              <p className="element">{horoscope.zodiac?.element} sign</p>
            </div>
          </div>

          <p className="horoscope-text">{horoscope.horoscope}</p>

          <div className="horoscope-details">
            <div className="detail">
              <span className="detail-label">Lucky Number</span>
              <span className="detail-value">{horoscope.luckyNumber}</span>
            </div>
            <div className="detail">
              <span className="detail-label">Lucky Time</span>
              <span className="detail-value">{horoscope.luckyTime}</span>
            </div>
            <div className="detail">
              <span className="detail-label">Mood</span>
              <span className="detail-value mood">{horoscope.mood}</span>
            </div>
            <div className="detail">
              <span className="detail-label">Color</span>
              <span className="detail-value">
                <span className="color-dot" style={{ background: horoscope.color }}></span>
                {horoscope.color}
              </span>
            </div>
          </div>

          {horoscope.zodiac?.stone && (
            <p className="birthstone">Birthstone: {horoscope.zodiac.stone}</p>
          )}
        </div>
      )}

      <footer>
        Powered by <a href="https://apiverve.com" target="_blank" rel="noopener">APIVerve</a>
      </footer>
    </div>
  );
}

export default App;
