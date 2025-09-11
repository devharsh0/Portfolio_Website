import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('education.title')}
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            <div className="relative space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-grow bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-green-900 text-green-200 text-sm font-medium rounded-full">
                      {t('education.current')}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      2024 - Present
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('education.masters.degree')}
                  </h3>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {t('education.masters.school')}
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {t('education.masters.location')}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {t('education.masters.description')}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700">
                      Human-Computer Interaction
                    </span>
                    <span className="px-3 py-1 bg-teal-900/50 text-teal-300 text-sm rounded-full border border-teal-700">
                      User Experience Research
                    </span>
                    <span className="px-3 py-1 bg-orange-900/50 text-orange-300 text-sm rounded-full border border-orange-700">
                      Usability Evaluation
                    </span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full border border-purple-700">
                      Interaction Design
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center relative z-10">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      2017 - 2021
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('education.bachelors.degree')}
                  </h3>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {t('education.bachelors.school')}
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {t('education.bachelors.location')}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {t('education.bachelors.description')}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-teal-900/50 text-teal-300 text-sm rounded-full border border-teal-700">
                      Programming
                    </span>
                    <span className="px-3 py-1 bg-orange-900/50 text-orange-300 text-sm rounded-full border border-orange-700">
                      Computer Science
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;