import React from 'react';
import { Search, Palette, Code, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.frontend'),
      items: t('skills.frontend.items'),
      color: 'blue',
      percentage: 95
    },
    {
      icon: Palette,
      title: t('skills.ux'),
      items: t('skills.ux.items'),
      color: 'teal',
      percentage: 88
    },
    {
      icon: Search,
      title: t('skills.backend'),
      items: t('skills.backend.items'),
      color: 'orange',
      percentage: 85
    },
    {
      icon: BarChart3,
      title: t('skills.other'),
      items: t('skills.other.items'),
      color: 'purple',
      percentage: 80
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-gray-900',
        icon: 'text-blue-600',
        progress: 'bg-blue-600',
        progressBg: 'bg-gray-700'
      },
      teal: {
        bg: 'bg-gray-900',
        icon: 'text-teal-600',
        progress: 'bg-teal-600',
        progressBg: 'bg-gray-700'
      },
      orange: {
        bg: 'bg-gray-900',
        icon: 'text-orange-600',
        progress: 'bg-orange-600',
        progressBg: 'bg-gray-700'
      },
      purple: {
        bg: 'bg-gray-900',
        icon: 'text-purple-600',
        progress: 'bg-purple-600',
        progressBg: 'bg-gray-700'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('skills.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              const IconComponent = category.icon;
              
              return (
                <div
                  key={index}
                  className={`p-6 ${colors.bg} rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-600`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gray-700 rounded-lg mr-4 shadow-sm`}>
                      <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{category.items}</p>
                  
                  {/* <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Proficiency</span>
                      <span>{category.percentage}%</span>
                    </div>
                    <div className={`w-full ${colors.progressBg} rounded-full h-2`}>
                      <div
                        className={`h-2 ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;