import React from 'react';
import { ArrowRight, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          {t('cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center">
            {t('cta.getStartedNow')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
            {t('cta.learnMore')}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-blue-100">
          <div className="flex items-center justify-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>{t('cta.approval')}</span>
          </div>
          <div className="flex items-center justify-center">
            <Shield className="h-5 w-5 mr-2" />
            <span>{t('cta.security')}</span>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="h-5 w-5 mr-2" />
            <span>{t('cta.funding')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;