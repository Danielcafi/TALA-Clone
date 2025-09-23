import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{t('hero.trustedBy')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
              <span className="text-blue-700">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                {t('hero.getStartedNow')}
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-700 hover:text-blue-700 transition-colors">
                {t('hero.learnMore')}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>{t('hero.noHiddenFees')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>{t('hero.quickApproval')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>{t('hero.secureEncrypted')}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0c29c6c0a8b?auto=format&fit=crop&w=800&q=80" 
                alt="Professional Asian woman with credit card and smartphone"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">₱125,000</div>
              <div className="text-sm">{t('hero.averageLoan')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;