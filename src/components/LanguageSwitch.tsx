import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ph' as Language, name: 'Filipino', flag: '🇵🇭' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-gray-300 hover:border-blue-700 transition-colors bg-white">
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {languages.find(lang => lang.code === language)?.name}
        </span>
      </button>
      
      <div className="absolute left-0 mt-2 w-48 bg-white border-2 border-gray-200 rounded-3xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors first:rounded-t-3xl last:rounded-b-3xl ${
              language === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;