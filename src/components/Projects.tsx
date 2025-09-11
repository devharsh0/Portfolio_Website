import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: './src/assets/SQL.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Gemini API'],
      details: {
        duration: '4 months',
        role: 'Full Stack Developer',
        tools: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Render'],
        highlights: [
          'Converts human-language queries into optimized SQL statements',
          'REST API integration with Gemini AI for intelligent SQL generation',
          'PostgreSQL database hosted on Supabase with backend on Render',
          'Real-time query preview and results with security features'
        ]
      }
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: './src/assets/Flashcard.png',
      tags: ['Angular', 'Gemini AI', 'Firebase', 'WCAG'],
      details: {
        duration: '3 months',
        role: 'Frontend Developer & UX Designer',
        tools: ['Angular', 'Gemini AI API', 'Firebase', 'Firestore'],
        highlights: [
          'AI-driven flashcards with contextual learning prompts',
          'Spaced repetition algorithm for adaptive scheduling',
          'Learning progress tracking via Firestore database',
          'Accessible UI following UX heuristics and WCAG standards'
        ]
      }
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: './src/assets/Expanse Tracker.png',
      tags: [  'React (TypeScript)',
        'Gemini AI',
        'Chart.js',
        'Vite'],
      details: {
        duration: '12 months',
        role: 'Project Engineer',
        tools: ['Angular', '.NET Core', 'AI Code Analysis', 'Micro-frontends'],
        highlights: [
          'AI-powered expense categorization using GPT-4o',
          'Real-time financial insights with Chart.js visualizations',
          'Secure authentication with OpenID Connect integration',
          'Cloud-native architecture with serverless Neon PostgreSQL',
          'Personalized analytics and spend recommendations via Gemini AI'
        ]
      }
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('projects.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openModal(project.id)}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-600"
                    >
                      {t('projects.viewDetails')}
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="relative">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white transition-colors border border-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProjectData.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProjectData.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Duration</h4>
                  <p className="text-gray-300">{selectedProjectData.details.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Role</h4>
                  <p className="text-gray-300">{selectedProjectData.details.role}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.details.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProjectData.details.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;