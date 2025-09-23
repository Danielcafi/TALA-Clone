import React from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">LendTrust</span>
          </div>
          
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 font-medium">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-700 transition-colors rounded-full px-3 py-2 hover:bg-blue-50 whitespace-nowrap text-sm xl:text-base">{t('nav.howItWorks')}</a>
            <a href="#features" className="text-gray-600 hover:text-blue-700 transition-colors rounded-full px-3 py-2 hover:bg-blue-50 whitespace-nowrap text-sm xl:text-base">{t('nav.features')}</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-700 transition-colors rounded-full px-3 py-2 hover:bg-blue-50 whitespace-nowrap text-sm xl:text-base">{t('nav.faq')}</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors rounded-full px-3 py-2 hover:bg-blue-50 whitespace-nowrap text-sm xl:text-base">{t('nav.contact')}</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <LanguageSwitch />
            <button className="text-blue-700 hover:text-blue-800 font-medium transition-colors border border-blue-700 px-3 xl:px-6 py-2 rounded-full hover:bg-blue-50 whitespace-nowrap text-sm xl:text-base">
              {t('nav.signIn')}
            </button>
            <button className="bg-blue-700 text-white px-3 xl:px-6 py-2 rounded-full hover:bg-blue-800 transition-colors font-medium whitespace-nowrap text-sm xl:text-base">
              {t('nav.getStarted')}
            </button>
          </div>

          <button 
            className="lg:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t font-medium">
              <a href="#how-it-works" className="block px-4 py-3 text-gray-600 hover:text-blue-700 rounded-full hover:bg-blue-50">{t('nav.howItWorks')}</a>
              <a href="#features" className="block px-4 py-3 text-gray-600 hover:text-blue-700 rounded-full hover:bg-blue-50">{t('nav.features')}</a>
              <a href="#faq" className="block px-4 py-3 text-gray-600 hover:text-blue-700 rounded-full hover:bg-blue-50">{t('nav.faq')}</a>
              <a href="#contact" className="block px-4 py-3 text-gray-600 hover:text-blue-700 rounded-full hover:bg-blue-50">{t('nav.contact')}</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-4 py-2 mb-2">
                  <LanguageSwitch />
                </div>
                <button className="block w-full text-left px-4 py-3 text-blue-700 font-medium border border-blue-700 rounded-full hover:bg-blue-50 mb-2">
                  {t('nav.signIn')}
                </button>
                <button className="block w-full bg-blue-700 text-white px-4 py-3 rounded-full hover:bg-blue-800 transition-colors font-medium">
                  {t('nav.getStarted')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;