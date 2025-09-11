import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ProfileCard from './ProfileCard';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text content */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 font-medium mb-2 animate-fade-in-delay-1">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-gray-300 mb-6 animate-fade-in-delay-2">
                {t('hero.university')}
              </p>
            </div>

            <p className="text-lg text-gray-200 leading-relaxed mb-8 animate-fade-in-delay-3 md:max-w-xl md:mx-0 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-fade-in-delay-4"
            >
              {t('hero.cta')}
            </button>
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1kRWr0Hj3A-EOrZQ2PiimBywFVJM8einn/view?usp=sharing&usp=embed_facebook', '_blank')}
              className="inline-flex items-center px-8 py-4 bg-white-600 text-blue-600 font-semibold rounded-lg  border border-blue-600 hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-fade-in-delay-4 hover:text-white "
              style={{ marginLeft: '10px' }}
            >
              {t('hero.cta2')}
            </button>
          </div>

          {/* Right: Image placeholder */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <ProfileCard
                name="Harsh Devaser"
                title="Developer"
                handle="harshdevaser"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/src/assets/avatar.png"
                showUserInfo={false}
                enableTilt={false}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-200 transition-colors"
          onClick={scrollToAbout}
        />
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-4 {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;