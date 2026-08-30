import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [businessName, setBusinessName] = useState('Kaviareň u Samuela');
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState([]);
  const [generatedReview, setGeneratedReview] = useState('');
  const [copied, setCopied] = useState(false);

  const availableTags = [
    'Skvelá kávička',
    'Rýchla obsluha',
    'Príjemné prostredie',
    'Chutné dezerty',
    'Dobrá cena',
  ];

  // Detekuj dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const generateReview = () => {
    if (selectedTags.length === 0) {
      alert('Prosím, vyber aspoň jeden tag!');
      return;
    }

    const reviewTemplates = {
      5: {
        intro: [
          'Dnes som tu bol a musím povedať, že to bolo skvelé!',
          'Práve som navštívil túto prevádzku a som naozaj spokojný.',
          'Veľmi odporúčam túto miesto!',
          'Úžasný zážitok!',
        ],
        outro: [
          'Určite sa sem rád vrátim!',
          'Určite prídem znova!',
          'Budem sem chodiť pravidelne!',
          'Všetkým odporúčam!',
        ],
      },
      4: {
        intro: [
          'Dnes som tu bol a bol som spokojný.',
          'Navštívil som túto prevádzku a má to svoje výhody.',
          'Dobrá voľba!',
          'Páčilo sa mi tu.',
        ],
        outro: [
          'Odporúčam to všetkým!',
          'Určite prídem znova!',
          'Stojí to za návštevu!',
          'Budem sa sem vracať!',
        ],
      },
      3: {
        intro: [
          'Navštívil som túto prevádzku.',
          'Dnes som tu bol.',
          'Skúsil som túto prevádzku.',
          'Mám zmiešané pocity.',
        ],
        outro: [
          'Určitá vylepšenia by pomohla.',
          'Možnosti sú tu.',
          'Všetko závisí od očakávaní.',
          'Stojí za pokus.',
        ],
      },
      2: {
        intro: [
          'Návštevu tejto prevádzky som si predstavoval inak.',
          'Bol by som sklamaný.',
          'Niečo mi tu chýbalo.',
          'Nie som celkom spokojný.',
        ],
        outro: [
          'Dúfam v zlepšenie.',
          'Možné vylepšenia by boli vítané.',
          'Možno neskôr znova skúsim.',
          'Sú tu problémy na riešenie.',
        ],
      },
      1: {
        intro: [
          'Veľmi som sklamaný touto návštevou.',
          'Táto návšteva bola sklamením.',
          'Nemôžem odporučiť túto prevádzku.',
          'Veľmi som nespokojný.',
        ],
        outro: [
          'Nebudem sa vracať.',
          'Niekde inde je lepšie.',
          'Nezaslúži si mojich finančných prostriedkov.',
          'Musíte urobiť veľké zmeny.',
        ],
      },
    };

    const templates = reviewTemplates[rating];
    const intro = templates.intro[Math.floor(Math.random() * templates.intro.length)];
    const outro = templates.outro[Math.floor(Math.random() * templates.outro.length)];

    let middlePart = '';
    if (selectedTags.includes('Skvelá kávička')) {
      middlePart += 'Káva bola vynikajúca. ';
    }
    if (selectedTags.includes('Rýchla obsluha')) {
      middlePart += 'Obsluha bola rýchla a milá. ';
    }
    if (selectedTags.includes('Príjemné prostredie')) {
      middlePart += 'Prostredie je veľmi príjemné a pohodlné. ';
    }
    if (selectedTags.includes('Chutné dezerty')) {
      middlePart += 'Dezerty boli naozaj chutné. ';
    }
    if (selectedTags.includes('Dobrá cena')) {
      middlePart += 'Ceny sú veľmi spravodlivé. ';
    }

    const review = `${intro} ${middlePart}${outro}`;
    setGeneratedReview(review);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'}`}>
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white shadow-md'} border-b sticky top-0 z-50`}>
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl">⭐</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ReviewBoost AI
              </h1>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Business Name Input */}
          <div className="mb-8">
            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Názov prevádzky:
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 focus:border-blue-500'
                  : 'bg-white border-gray-300 focus:border-blue-500'
              } focus:outline-none`}
            />
          </div>

          {/* Card Container */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-6 md:p-8`}>
            {/* Step 1: Rating */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">1️⃣</span> Vyber hodnotenie
              </h2>
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-5xl transition-transform transform hover:scale-110 ${
                      star <= rating ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <p className="text-center mt-4 text-lg font-semibold">
                {rating} z 5 hviezdičiek
              </p>
            </div>

            {/* Divider */}
            <div className={`h-px my-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

            {/* Step 2: Tags */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">2️⃣</span> Vyber tagy (možno viacero)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`py-3 px-4 rounded-lg font-medium transition ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-600 text-white shadow-lg'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedTags.includes(tag) ? '✓ ' : ''} {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px my-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

            {/* Generate Button */}
            <div className="text-center mb-10">
              <button
                onClick={generateReview}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg w-full md:w-auto"
              >
                🚀 Vygenerovať moju recenziu
              </button>
            </div>

            {/* Generated Review Section */}
            {generatedReview && (
              <div className="mt-10">
                <div className={`h-px mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span> Tvoja recenzia
                </h3>
                <div className={`p-6 rounded-lg border-2 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600'
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <p className="text-lg leading-relaxed mb-4 italic">
                    "{generatedReview}"
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Prevádzka: <span className="font-semibold">{businessName}</span>
                  </p>
                </div>

                {/* Copy Button */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={copyToClipboard}
                    className={`flex-1 font-bold py-4 px-6 rounded-lg text-lg transition ${
                      copied
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {copied ? '✓ Skopírované!' : '📋 Skopírovať'}
                  </button>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition text-center"
                  >
                    🔗 Prejsť na Google Recenzie
                  </a>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className={`mt-16 py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 ReviewBoost AI • Pomáhame zákazníkom zdieľať své skúsenosti
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
