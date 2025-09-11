import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Harsh Devaser',
    'hero.subtitle': 'Master\'s Student in Usability Engineering',
    'hero.university': 'Rhein-Waal University of Applied Sciences',
    'hero.description': 'Passionate about creating intuitive, user-centered digital experiences through research-driven design, usability testing, and modern web technologies.',
    'hero.cta': 'Contact Me!!',
    'hero.cta2': 'Download My CV',
    // About Section
    'about.title': 'About Me',
    'about.description': 'I am a dedicated Master\'s student in Usability Engineering at Rhein-Waal University of Applied Sciences, combining theoretical knowledge with practical experience in user experience design, human-computer interaction, and usability research. With 3+ years of professional experience at Wipro Technologies, I specialize in creating accessible, user-centered digital solutions.',
    'about.location': 'Location',
    'about.location.value': 'Duisburg, Germany',
    'about.status': 'Status',
    'about.status.value': 'Master\'s Student',
    'about.interests': 'Experience',
    'about.interests.value': '3y in fullstack Development using dotnet and angular',
    
    // Education Section
    'education.title': 'Education',
    'education.current': 'Current',
    'education.masters.degree': 'Master of Science in Usability Engineering',
    'education.masters.school': 'Rhein-Waal University of Applied Sciences',
    'education.masters.location': 'Germany',
    'education.masters.description': 'Comprehensive program focusing on human-computer interaction, user experience research, interaction design, and usability evaluation methods. Current Grade: 1.95',
    'education.bachelors.degree': 'Bachelor of Engineering in Computer Science',
    'education.bachelors.school': 'Chitkara University',
    'education.bachelors.location': 'India',
    'education.bachelors.description': 'Strong foundation in computer science fundamentals, software engineering, and programming. CGPA: 7.75/10 (German Grade: 2.2)',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.frontend': 'Frontend Development',
    'skills.frontend.items': 'Angular 17+, TypeScript, JavaScript, React, HTML5, CSS3, SASS, Tailwind CSS',
    'skills.ux': 'UX/UI Design',
    'skills.ux.items': 'Figma, Responsive Design, Design Systems',
    'skills.backend': 'Backend & Tools',
    'skills.backend.items': 'C#, .NET Core, Node.js, Express.js, REST APIs, MongoDB, MySQL',
    'skills.other': 'Additional Skills',
    'skills.other.items': 'Git, GitLab CI/CD, Docker, Agile/Scrum, Ionic Framework',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.viewDetails': 'View Details',
    'projects.project1.title': 'Natural Language to SQL Generator',
    'projects.project1.description': 'AI-powered application that converts human-language queries into optimized SQL statements using React, Node.js, PostgreSQL, and Gemini API.',
    'projects.project2.title': 'AI Flashcard App (Language Learning)',
    'projects.project2.description': 'Angular-based language learning application with AI-driven flashcards, spaced repetition, and accessibility features following WCAG standards.',
    'projects.project3.title': 'AI-Powered Personal Finance Manager',
    'projects.project3.description': "AI-first web app for smart expense management with secure login, progress tracking, and AI-driven categorization. Built with React, Tailwind, Express.js, and serverless PostgreSQL for scalability and live financial insights.",
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always interested in discussing opportunities related to Web devlopment , UI Design and UX research , or connecting with fellow professionals in usability engineering and web development.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.designed': 'Designed with attention to usability and accessibility.',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.education': 'Ausbildung',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Harsh Devaser',
    'hero.subtitle': 'Master-Student in Usability Engineering',
    'hero.university': 'Rhein-Waal University of Applied Sciences',
    'hero.description': 'Leidenschaftlich daran interessiert, intuitive, nutzerzentrierte digitale Erfahrungen durch forschungsbasiertes Design, Usability-Tests und moderne Webtechnologien zu schaffen.',
    'hero.cta': 'Meine Kontakt !!!',
    'hero.cta2': 'Meine CV herunterladen',
    
    // About Section
    'about.title': 'Über mich',
    'about.description': 'Ich bin ein engagierter Master-Student in Usability Engineering an der Rhein-Waal University of Applied Sciences und verbinde theorisches Wissen mit praktischer Erfahrung in User Experience Design, Mensch-Computer-Interaktion und Usability-Forschung. Mit über 3 Jahren Berufserfahrung bei Wipro Technologies spezialisiere ich mich auf barrierefreie, nutzerzentrierte digitale Lösungen.',
    'about.location': 'Standort',
    'about.location.value': 'Duisburg, Deutschland',
    'about.status': 'Status',
    'about.status.value': 'Master-Student',
    'about.interests': 'Erfahrung',
    'about.interests.value': '3 Jahre in Fullstack-Entwicklung mit Dotnet und Angular',
    
    // Education Section
    'education.title': 'Ausbildung',
    'education.current': 'Aktuell',
    'education.masters.degree': 'Master of Science in Usability Engineering',
    'education.masters.school': 'Rhein-Waal University of Applied Sciences',
    'education.masters.location': 'Deutschland',
    'education.masters.description': 'Umfassendes Programm mit Schwerpunkt auf Mensch-Computer-Interaktion, User Experience-Forschung, Interaktionsdesign und Usability-Evaluationsmethoden. Aktuelle Note: 1,95',
    'education.bachelors.degree': 'Bachelor of Engineering in Informatik',
    'education.bachelors.school': 'Chitkara University',
    'education.bachelors.location': 'Indien',
    'education.bachelors.description': 'Solide Grundlage in Informatik-Grundlagen, Software-Engineering und Programmierung. CGPA: 7,75/10 (Deutsche Note: 2,2)',
    
    // Skills Section
    'skills.title': 'Fähigkeiten & Expertise',
    'skills.frontend': 'Frontend-Entwicklung',
    'skills.frontend.items': 'Angular 17+, TypeScript, JavaScript, React, HTML5, CSS3, SASS, Tailwind CSS',
    'skills.ux': 'UX/UI Design',
    'skills.ux.items': 'Figma, Responsive Design, Design Systems',
    'skills.backend': 'Backend & Tools',
    'skills.backend.items': 'C#, .NET Core, Node.js, Express.js, REST APIs, MongoDB, MySQL',
    'skills.other': 'Weitere Fähigkeiten',
    'skills.other.items': 'Git, GitLab CI/CD, Docker, Agile/Scrum, Ionic Framework',
    
    // Projects Section
    'projects.title': 'Projekte',
    'projects.viewDetails': 'Details ansehen',
    'projects.project1.title': 'Natural Language zu SQL Generator',
    'projects.project1.description': 'KI-gestützte Anwendung, die natürlichsprachliche Abfragen in optimierte SQL-Anweisungen mit React, Node.js, PostgreSQL und Gemini API umwandelt.',
    'projects.project2.title': 'KI Lernkarten-App (Sprachenlernen)',
    'projects.project2.description': 'Angular-basierte Sprachlern-Anwendung mit KI-gesteuerten Lernkarten, Spaced Repetition und Barrierefreiheitsfunktionen nach WCAG-Standards.',
    'projects.project3.title': 'KI-gestützte Anwendung für persönliches Finanzmanagement',
    'projects.project3.description': "KI-basierte Web-App zur intelligenten Verwaltung von Ausgaben mit sicherer Anmeldung, Echtzeit-Tracking und automatischer Kategorisierung. Entwickelt mit React, Tailwind, Express.js und serverlosem PostgreSQL für Skalierbarkeit und Live-Finanzanalysen.",
    // Contact Section
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Ich bin immer daran interessiert, Möglichkeiten im Zusammenhang mit Webentwicklung, UI-Design und UX-Forschung zu besprechen oder Kontakte zu anderen Fachleuten im Bereich Usability Engineering und Webentwicklung zu knüpfen.',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.sending': 'Wird gesendet...',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.designed': 'Mit Fokus auf Usability und Barrierefreiheit gestaltet.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}