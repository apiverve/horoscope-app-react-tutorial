# Daily Horoscope App | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-18-61dafb)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff)](https://vitejs.dev)
[![APIVerve | Horoscope](https://img.shields.io/badge/APIVerve-Horoscope-purple)](https://apiverve.com/marketplace/horoscope?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial)

A beautiful daily horoscope app built with React. Select your zodiac sign and get personalized readings with lucky numbers, mood, and more.

![Screenshot](https://raw.githubusercontent.com/apiverve/horoscope-app-react-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial)** - no credit card required.

---

## Features

- All 12 zodiac signs with symbols
- Daily horoscope readings
- Lucky number and lucky time
- Mood and color of the day
- Zodiac element and birthstone info
- Beautiful dark cosmic theme
- Smooth animations
- Built with React 18 and Vite

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/horoscope-app-react-tutorial.git
   cd horoscope-app-react-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Open `.env` and add your API key:
   ```
   VITE_API_KEY=your-api-key-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Visit http://localhost:5173 and check your horoscope!

## Project Structure

```
horoscope-app-react-tutorial/
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # Styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── .env                # Environment variables (add your API key)
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. User clicks on their zodiac sign
2. App fetches today's horoscope from the API
3. Response includes reading, lucky numbers, mood, and more
4. Beautiful card displays the complete horoscope

### The API Call

```javascript
const response = await fetch(`https://api.apiverve.com/v1/horoscope?sign=aries`, {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY
  }
});
```

## API Reference

**Endpoint:** `GET https://api.apiverve.com/v1/horoscope`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sign` | string | Yes | Zodiac sign (aries, taurus, gemini, etc.) |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "sign": "aries",
    "horoscope": "Today, the celestial alignment initiates a deep dive into your emotional landscapes...",
    "luckyNumber": 12,
    "luckyTime": "8:00 AM",
    "mood": "excited",
    "color": "green",
    "compatibility": ["leo", "sagittarius"],
    "zodiac": {
      "name": "Aries",
      "element": "fire",
      "symbol": "\u2648",
      "stone": "bloodstone"
    }
  }
}
```

## Zodiac Signs

| Sign | Symbol | Dates | Element |
|------|--------|-------|---------|
| Aries | ♈ | Mar 21 - Apr 19 | Fire |
| Taurus | ♉ | Apr 20 - May 20 | Earth |
| Gemini | ♊ | May 21 - Jun 20 | Air |
| Cancer | ♋ | Jun 21 - Jul 22 | Water |
| Leo | ♌ | Jul 23 - Aug 22 | Fire |
| Virgo | ♍ | Aug 23 - Sep 22 | Earth |
| Libra | ♎ | Sep 23 - Oct 22 | Air |
| Scorpio | ♏ | Oct 23 - Nov 21 | Water |
| Sagittarius | ♐ | Nov 22 - Dec 21 | Fire |
| Capricorn | ♑ | Dec 22 - Jan 19 | Earth |
| Aquarius | ♒ | Jan 20 - Feb 18 | Air |
| Pisces | ♓ | Feb 19 - Mar 20 | Water |

## Customization Ideas

- Add weekly/monthly horoscopes
- Save favorite sign to localStorage
- Add share to social media
- Display compatibility matches
- Add notification reminders
- Create horoscope history

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial):

- [Moon Phases](https://apiverve.com/marketplace/moonphases?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial) - Get moon phase data
- [Chinese Zodiac](https://apiverve.com/marketplace/chinesezodiac?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial) - Chinese zodiac calculator
- [Fortune Cookie](https://apiverve.com/marketplace/fortunecookie?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial) - Random fortune cookies

## Free Plan Note

This tutorial works with the free APIVerve plan. Some APIs may have:
- **Locked fields**: Premium response fields return `null` on free plans
- **Ignored parameters**: Some optional parameters require a paid plan

The API response includes a `premium` object when limitations apply. [Upgrade anytime](https://dashboard.apiverve.com/plans) to unlock all features.

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial) - Browse 300+ APIs
- [Horoscope API](https://apiverve.com/marketplace/horoscope?utm_source=github&utm_medium=tutorial&utm_campaign=horoscope-app-react-tutorial) - API details
