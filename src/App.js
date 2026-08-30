import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [businessName, setBusinessName] = useState('Naša Prevádzka');
  const [googleReviewUrl, setGoogleReviewUrl] = useState('https://www.google.com/maps');
  const [logoUrl, setLogoUrl] = useState('');
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState([]);
  const [generatedReview, setGeneratedReview] = useState('');
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const availableTags = [
    'Skvelá kávička',
    'Rýchla obsluha',
    'Príjemné prostredie',
    'Chutné dezerty',
    'Dobrá cena',
  ];

  // Načítaj parametre z URL a detekuj dark mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    // Čítaj parametre z URL
    const urlName = params.get('name');
    const urlGoogle = params.get('google');
    const urlLogo = params.get('logo');

    if (urlName) setBusinessName(decodeURIComponent(urlName));
    if (urlGoogle) setGoogleReviewUrl(decodeURIComponent(urlGoogle));
    if (urlLogo) setLogoUrl(decodeURIComponent(urlLogo));

    // Detekuj dark mode preferencu
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    setIsLoading(false);
  }, []);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const generateReview = () => {
    if (selectedTags.length === 0) {
      alert('Prosím, vyber aspoň jeden tag pre generovanie recenzie!');
      return;
    }

    // Dokonalá slovenčina - prirodzené, gramaticky správne vety
    const reviewTemplates = {
      5: {
        templates: [
          (tags) => {
            let review = 'Moja nedávna návšteva tejto prevádzky bola naozaj skvelým zážitkom.';
            
            const tagTexts = [];
            if (tags.includes('Skvelá kávička')) {
              tagTexts.push('výbornou kávou');
            }
            if (tags.includes('Rýchla obsluha')) {
              tagTexts.push('milou a pozornou obsluhou');
            }
            if (tags.includes('Príjemné prostredie')) {
              tagTexts.push('príjemnou atmosférou');
            }
            if (tags.includes('Chutné dezerty')) {
              tagTexts.push('lahodnými dezertmi');
            }
            if (tags.includes('Dobrá cena')) {
              tagTexts.push('férovou cenou');
            }

            if (tagTexts.length > 0) {
              const tagList = tagTexts.slice(0, -1).join(', ') + 
                (tagTexts.length > 1 ? ' a ' + tagTexts[tagTexts.length - 1] : tagTexts[0]);
              review += ` Bol som veľmi rád za ${tagList}. `;
            }
            
            review += 'Určite sa sem rád vrátim a odporúčam to všetkým svojim známym.';
            return review;
          },
          (tags) => {
            let review = 'Úžasný zážitok! ';
            
            const tagTexts = [];
            if (tags.includes('Rýchla obsluha')) {
              tagTexts.push('rýchla obsluha');
            }
            if (tags.includes('Skvelá kávička')) {
              tagTexts.push('vynikajúca káva');
            }
            if (tags.includes('Príjemné prostredie')) {
              tagTexts.push('krásne prostredie');
            }
            if (tags.includes('Chutné dezerty')) {
              tagTexts.push('chutné dezerty');
            }
            if (tags.includes('Dobrá cena')) {
              tagTexts.push('rozumná cena');
            }

            if (tagTexts.length > 0) {
              const tagList = tagTexts.slice(0, -1).join(', ') + 
                (tagTexts.length > 1 ? ' a ' + tagTexts[tagTexts.length - 1] : tagTexts[0]);
              review += `Tu nájdeš ${tagList}. `;
            }
            
            review += 'Jednoznačne jedna z najlepších prevádzok, ktoré som navštívil. Gratulujem!';
            return review;
          },
          (tags) => {
            let review = 'Vrelo odporúčam túto prevádzku každému! ';
            
            if (tags.includes('Rýchla obsluha') && tags.includes('Skvelá kávička')) {
              review += 'Obsluha bola neuveriteľne rýchla a milá, a káva bola z najlepších, aké som pil. ';
            } else if (tags.includes('Skvelá kávička')) {
              review += 'Káva bola naozaj vynikajúca, presne tak, ako si ju predstavujem. ';
            } else if (tags.includes('Rýchla obsluha')) {
              review += 'Personál sa venuje zákazníkom s rešpektom a efektivitou. ';
            }
            
            if (tags.includes('Príjemné prostredie')) {
              review += 'Prostredie je elegantné a priam ideálne na relaxáciu. ';
            }
            if (tags.includes('Dobrá cena')) {
              review += 'Kvalita za peniaze je tu naozaj výnimočná. ';
            }
            
            review += 'Určite sa budem vracať!';
            return review;
          }
        ]
      },
      4: {
        templates: [
          (tags) => {
            let review = 'Veľmi sa mi tu páčilo. ';
            
            const tagTexts = [];
            if (tags.includes('Skvelá kávička')) {
              tagTexts.push('kvalitnou kávou');
            }
            if (tags.includes('Rýchla obsluha')) {
              tagTexts.push('slušnou obsluhou');
            }
            if (tags.includes('Príjemné prostredie')) {
              tagTexts.push('príjemným prostredím');
            }
            if (tags.includes('Chutné dezerty')) {
              tagTexts.push('chutným dezertmi');
            }
            if (tags.includes('Dobrá cena')) {
              tagTexts.push('rozumnou cenou');
            }

            if (tagTexts.length > 0) {
              const tagList = tagTexts.slice(0, -1).join(', ') + 
                (tagTexts.length > 1 ? ' a ' + tagTexts[tagTexts.length - 1] : tagTexts[0]);
              review += `Potešila ma najmä ${tagList}. `;
            }
            
            review += 'Odporúčam a určite prídem znova.';
            return review;
          },
          (tags) => {
            let review = 'Dobrá voľba pre návštevu. ';
            
            if (tags.includes('Rýchla obsluha') || tags.includes('Skvelá kávička')) {
              review += 'Veci fungujú tu bez problémov. ';
            }
            
            if (tags.includes('Príjemné prostredie')) {
              review += 'Atmosféra je prívetivá a pohostinná. ';
            }
            
            if (tags.includes('Dobrá cena')) {
              review += 'Ceny sú regulačné a korešpondujú s kvalitou. ';
            }
            
            review += 'Určite prídem znova.';
            return review;
          }
        ]
      },
      3: {
        templates: [
          (tags) => {
            let review = 'Návšteva bola celkom v poriadku. ';
            
            const pozitives = [];
            if (tags.includes('Skvelá kávička')) {
              pozitives.push('káva bola dobrá');
            }
            if (tags.includes('Rýchla obsluha')) {
              pozitives.push('obsluha bola pohotová');
            }
            if (tags.includes('Príjemné prostredie')) {
              pozitives.push('prostredie je v poriadku');
            }
            if (tags.includes('Dobrá cena')) {
              pozitives.push('cena je regulačná');
            }

            if (pozitives.length > 0) {
              review += `${pozitives.join(', ')}. `;
            }
            
            review += 'Má to svoje klady aj zápory, ale stojí to za pokus.';
            return review;
          }
        ]
      },
      2: {
        templates: [
          (tags) => {
            let review = 'Návšteva bola menej sklamáním ako skôr. ';
            
            if (tags.length > 0) {
              review += `Všímam si pozitívna: ${tags.join(', ')}. `;
            }
            
            review += 'Celkovo som v tejto prevádzke zažil miešané skúsenosti. Dúfam v budúce zlepšenie.';
            return review;
          }
        ]
      },
      1: {
        templates: [
          (tags) => {
            let review = 'Bohužiaľ, táto návšteva ma sklamala. ';
            
            if (tags.length > 0) {
              review += `Jedinou pozitívnosťou bolo: ${tags.join(', ')}. `;
            }
            
            review += 'Celkovo však nemôžem prevádzku vrele odporučiť. Verím, že budú viac snažiť.';
            return review;
          }
        ]
      }
    };

    const templates = reviewTemplates[rating].templates;
    const template = templates[Math.floor(Math.random() * templates.length)];
    const review = template(selectedTags);
    setGeneratedReview(review);
  };

  const copyAndOpenGoogle = () => {
    // Skopíruj text do schránky
    navigator.clipboard.writeText(generatedReview).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      // Otvor Google Reviews v novom okne
      window.open(googleReviewUrl, '_blank');
    }).catch((err) => {
      console.error('Nepodarilo sa skopírovať:', err);
      alert('Nepodarilo sa skopírovať text. Skúste znova.');
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <div className="text-center">
          <div className="text-5xl mb-4">⭐</div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Načítavam...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 text-gray-900'}`}>
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-900 border-gray-800 shadow-2xl' : 'bg-white/80 backdrop-blur-md shadow-lg border-gray-100'} border-b sticky top-0 z-50`}>
          <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              {logoUrl && (
                <img 
                  src={logoUrl} 
                  alt="Logo" 
                  className="h-10 w-10 object-contain rounded-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              )}
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ReviewBoost
                </h1>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>AI Recenzie</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl transition-all transform hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-yellow-600'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-12">
          {/* Business Info Section */}
          <div className={`mb-10 p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-white/40 backdrop-blur-sm border border-white/60'} shadow-lg`}>
            <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              📍 Názov prevádzky
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className={`w-full px-5 py-3 rounded-xl border-2 transition-all focus:scale-105 ${
                darkMode
                  ? 'bg-gray-900 border-gray-600 focus:border-purple-500 text-white placeholder-gray-500'
                  : 'bg-white/80 border-gray-300 focus:border-purple-500 text-gray-900 placeholder-gray-400'
              } focus:outline-none font-semibold text-lg shadow-md`}
            />
          </div>

          {/* Main Card */}
          <div className={`${darkMode ? 'bg-gray-800/30 backdrop-blur-xl border border-gray-700/50' : 'bg-white/40 backdrop-blur-xl border border-white/60'} rounded-3xl shadow-2xl p-8 md:p-10`}>
            
            {/* Step 1: Rating */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">⭐</span> 
                <span>Akú si dáš známku?</span>
              </h2>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-5xl transition-all transform hover:scale-125 duration-200 ${
                      star <= rating ? 'opacity-100 drop-shadow-lg' : 'opacity-40 hover:opacity-60'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <p className={`text-center mt-6 text-xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {rating} {rating === 1 ? 'hviezdička' : rating < 5 ? 'hviezdičky' : 'hviezdičiek'}
              </p>
            </div>

            {/* Divider */}
            <div className={`h-px my-10 bg-gradient-to-r ${darkMode ? 'from-gray-700 via-gray-600 to-gray-700' : 'from-gray-200 via-gray-300 to-gray-200'}`}></div>

            {/* Step 2: Tags */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏷️</span>
                <span>Čo sa ti páčilo?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`py-4 px-5 rounded-2xl font-semibold transition-all transform hover:scale-105 duration-200 shadow-lg ${
                      selectedTags.includes(tag)
                        ? darkMode
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-purple-500/50'
                          : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-purple-400/50'
                        : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <span className="mr-2">{selectedTags.includes(tag) ? '✓' : '+'}</span>
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px my-10 bg-gradient-to-r ${darkMode ? 'from-gray-700 via-gray-600 to-gray-700' : 'from-gray-200 via-gray-300 to-gray-200'}`}></div>

            {/* Generate Button */}
            <div className="text-center mb-12">
              <button
                onClick={generateReview}
                disabled={selectedTags.length === 0}
                className={`px-8 py-5 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 duration-200 shadow-xl ${
                  selectedTags.length > 0
                    ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                🚀 Vygenerovať recenziu
              </button>
            </div>

            {/* Generated Review Section */}
            {generatedReview && (
              <div className="mt-12 animate-fadeIn">
                <div className={`h-px mb-8 bg-gradient-to-r ${darkMode ? 'from-gray-700 via-gray-600 to-gray-700' : 'from-gray-200 via-gray-300 to-gray-200'}`}></div>
                
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  <span>Tvoja recenzia</span>
                </h3>
                
                <div className={`p-8 rounded-2xl border-2 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700/50 border-gray-600/50'
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border-purple-200/50'
                } shadow-lg`}>
                  <p className={`text-lg leading-relaxed mb-6 italic font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    "{generatedReview}"
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-xl">📍</span>
                    <span><strong>{businessName}</strong></span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={copyToClipboard}
                    className={`flex-1 font-bold py-4 px-6 rounded-2xl text-lg transition-all transform hover:scale-105 duration-200 shadow-lg ${
                      copied
                        ? 'bg-green-500 text-white shadow-green-500/50'
                        : darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
                    }`}
                  >
                    {copied ? '✓ Skopírované!' : '📋 Skopírovať'}
                  </button>
                  <button
                    onClick={copyAndOpenGoogle}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all transform hover:scale-105 duration-200 shadow-lg shadow-red-500/50"
                  >
                    🔗 Kopírovať a otvoriť Google
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className={`mt-20 py-10 border-t ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white/30 backdrop-blur-sm border-gray-200'}`}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              © 2024 <strong>ReviewBoost AI</strong> • Pomáhame zákazníkom zdieľať autentické skúsenosti
            </p>
            <p className={`text-xs mt-2 ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
              ✨ Vygenerované s láskou ku kvalitným recenziám
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;