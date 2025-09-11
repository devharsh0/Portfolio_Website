import React from 'react';
import { MapPin, User, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('about.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t('about.description')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-700">
                  Angular & React
                </span>
                <span className="px-4 py-2 bg-teal-900/50 text-teal-300 rounded-full text-sm font-medium border border-teal-700">
                  UX Research
                </span>
                <span className="px-4 py-2 bg-orange-900/50 text-orange-300 rounded-full text-sm font-medium border border-orange-700">
                  Usability Testing
                </span>
                <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-sm font-medium border border-green-700">
                  AI Integration
                </span>
                <span className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-700">
                 Web Development
                </span>
                <span className="px-4 py-2 bg-pink-900/50 text-pink-300 rounded-full text-sm font-medium border border-pink-700">
                 Dotnet Core
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-white">{t('about.location')}</h3>
                </div>
                <p className="text-gray-300">{t('about.location.value')}</p>
              </div>
              
              <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="flex items-center mb-3">
                  <User className="w-5 h-5 text-teal-600 mr-2" />
                  <h3 className="font-semibold text-white">{t('about.status')}</h3>
                </div>
                <p className="text-gray-300">{t('about.status.value')}</p>
              </div>
              
              <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-5 h-5 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-white">{t('about.interests')}</h3>
                </div>
                <p className="text-gray-300">{t('about.interests.value')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;