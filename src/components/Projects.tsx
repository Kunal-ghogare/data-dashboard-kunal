
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Target, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Legal Digest - AI-Powered Legal Summarization',
      category: 'Deep Learning, Data Analysis',
      period: 'Jan 2025 – May 2025',
      description: 'Advanced AI system for legal document analysis and summarization using GPT-based NLP techniques.',
      fullDescription: 'Developed a comprehensive AI-powered legal summarization platform that processes complex legal documents and generates concise, accurate summaries. The system combines advanced preprocessing techniques with state-of-the-art natural language processing to deliver high-quality legal insights.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center',
      achievements: [
        'Preprocessed dataset of 2,000+ legal documents with advanced data cleaning',
        'Reduced document length by 60% while maintaining legal accuracy',
        'Implemented tokenization, lemmatization and named entity recognition (NER)',
        'Deployed via Flask-based backend API with interactive dashboard',
        'Achieved 95% accuracy in legal concept extraction'
      ],
      technologies: ['Python', 'GPT API', 'Flask', 'NLP', 'pandas', 'React', 'MongoDB'],
      metrics: {
        documents: '2,000+',
        reduction: '60%',
        accuracy: '95%'
      }
    },
    {
      id: 2,
      title: 'MediMatch – Healthcare Data Analysis',
      category: 'Healthcare Analytics, Predictive Analytics',
      period: 'Aug 2024 – Dec 2024',
      description: 'Comprehensive healthcare analytics platform for patient care optimization and predictive analysis.',
      fullDescription: 'Built an end-to-end healthcare analytics solution that transforms patient data into actionable insights. The platform combines data mining, predictive modeling, and AI-powered analysis to improve patient care outcomes and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center',
      achievements: [
        'Analyzed 1,300+ patient care issues using root cause analysis',
        'Designed dimensional data model with 5 fact and 10 dimension tables',
        'Created centralized data warehouse for improved decision-making',
        'Developed AI-powered symptom analysis platform',
        'Achieved 90% accuracy in prescription suggestions'
      ],
      technologies: ['Alteryx', 'SQL Server', 'Python', 'Machine Learning', 'Power BI', 'Azure'],
      metrics: {
        issues: '1,300+',
        accuracy: '90%',
        tables: '15'
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative data science projects that showcase advanced analytics, machine learning, 
            and AI-driven solutions for real-world challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Period Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-gray-900/80 px-3 py-1 rounded-full">
                    <Calendar size={14} className="text-gray-300" />
                    <span className="text-gray-300 text-sm">{project.period}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={key} className="text-center">
                      <div className="text-blue-400 font-bold text-lg">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.id);
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                  >
                    View Details
                  </button>
                  <button className="p-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors">
                    <ExternalLink size={16} className="text-gray-300" />
                  </button>
                  <button className="p-2 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors">
                    <Github size={16} className="text-gray-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div>
                      {/* Modal Header */}
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-gray-900/80 hover:bg-gray-900 rounded-full transition-colors"
                        >
                          <X size={20} className="text-white" />
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                          <p className="text-blue-400 font-medium">{project.category}</p>
                          <p className="text-gray-400">{project.period}</p>
                        </div>

                        <div className="mb-8">
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold mb-4 flex items-center">
                            <Target size={20} className="text-blue-400 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                                <span className="text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </button>
                          <button className="flex items-center space-x-2 border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg transition-colors">
                            <Github size={18} />
                            <span>View Code</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
