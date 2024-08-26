import { useState } from 'react';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const languages = [
  { code: 'en', name: 'English', countryCode: 'us' },
  { code: 'fr', name: 'Français', countryCode: 'fr' }
  // Add more languages here
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(lang => lang.code === i18n.language) || languages[0]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (lang : any) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 text-white rounded bg-main"
      >
        <Flag code={selectedLanguage.countryCode} height="20px" style={{ marginRight: '8px',width:"30px" }} />
        {selectedLanguage.name}
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        
        
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white rounded shadow-lg">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className="flex items-center px-6 py-2 cursor-pointer hover:bg-gray-200"
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
