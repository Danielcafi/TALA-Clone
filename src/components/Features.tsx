import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('features.fastApproval.title'),
      description: t('features.fastApproval.description'),
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t('features.security.title'),
      description: t('features.security.description'),
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t('features.rates.title'),
      description: t('features.rates.description'),
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t('features.support.title'),
      description: t('features.support.description'),
      image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t('features.noFees.title'),
      description: t('features.noFees.description'),
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t('features.mobile.title'),
      description: t('features.mobile.description'),
      image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="flex-1">
                <div className="border-2 border-gray-200 bg-white p-8 rounded-3xl hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;