import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg">
                <span className="text-xs text-gray-400">FDIC Insured</span>
              </div>
              <div className="bg-gray-800 p-2 rounded-lg">
                <span className="text-xs text-gray-400">SSL Encrypted</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">{t('nav.howItWorks')}</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">{t('nav.features')}</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">{t('nav.faq')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">1-800-LENDTRUST</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">support@lendtrust.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 mt-1" />
                <span className="text-gray-300">{t('footer.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;