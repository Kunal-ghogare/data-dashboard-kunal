
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Database, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Simplify Healthcare Ltd',
      period: 'Dec 2021 – Apr 2023',
      location: 'Remote',
      achievements: [
        'Optimized SQL Server architecture reducing storage costs by $3,000/month',
        'Accelerated data retrieval speed by 10% through multi-tenancy support',
        'Reduced insurance plan edit turnaround time from 25 to 8 minutes',
        'Automated workflows resulting in 80% reduction in manual tasks',
        'Improved data accuracy and reduced integrity violations by 68%',
        'Processed 380M+ rows using Spark ETL pipelines'
      ],
      technologies: ['SQL Server', 'SSIS', 'Azure Data Lake', 'Apache Kafka', 'Spark', 'REST APIs'],
      color: 'blue'
    },
    {
      title: 'Data Analyst Intern',
      company: 'The Mahua Store',
      period: 'Mar 2021 – Nov 2021',
      location: 'Remote',
      achievements: [
        'Reduced cost per lead by 49% ($8 → $4.08) through optimization',
        'Drove 16% revenue increase ($9,000) via data-driven strategies',
        'Created real-time Power BI dashboards for trend forecasting',
        'Optimized pricing strategy using pivot tables and VBA Macros',
        'Conducted clickstream analysis to identify user drop-off points'
      ],
      technologies: ['Power BI', 'Power Query', 'VBA Macros', 'Excel Analytics'],
      color: 'green'
    },
    {
      title: 'Data Analyst Intern',
      company: 'National Education Foundation',
      period: 'Jan 2019 – Jan 2020',
      location: 'India',
      achievements: [
        'Processed 1.2M+ participant data extracting 8+ KPIs',
        'Increased registration completion rates by 29% through A/B testing',
        'Boosted event engagement by 66.7% using statistical analysis',
        'Led technical management for national events',
        'Performed comprehensive EDA and data structuring in T-SQL'
      ],
      technologies: ['T-SQL', 'R', 'Tableau', 'Statistical Analysis', 'A/B Testing'],
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'border-blue-400 bg-blue-400/10',
    green: 'border-green-400 bg-green-400/10',
    purple: 'border-purple-400 bg-purple-400/10'
  };

  const iconColorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400'
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through data transformation, from intern to strategic analyst, 
            delivering measurable business impact through advanced analytics.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 pl-20"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className={`absolute left-6 w-4 h-4 rounded-full border-2 ${colorClasses[exp.color as keyof typeof colorClasses]}`}
              ></motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-400 font-semibold mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className={iconColorClasses[exp.color as keyof typeof iconColorClasses]} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className={iconColorClasses[exp.color as keyof typeof iconColorClasses]} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg ${colorClasses[exp.color as keyof typeof colorClasses]}`}
                  >
                    <TrendingUp size={24} className={iconColorClasses[exp.color as keyof typeof iconColorClasses]} />
                  </motion.div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-4 flex items-center">
                    <Award size={18} className={`mr-2 ${iconColorClasses[exp.color as keyof typeof iconColorClasses]}`} />
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 ${iconColorClasses[exp.color as keyof typeof iconColorClasses]} bg-current`}></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-semibold mb-3 flex items-center">
                    <Database size={18} className={`mr-2 ${iconColorClasses[exp.color as keyof typeof iconColorClasses]}`} />
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-sm rounded-full border ${colorClasses[exp.color as keyof typeof colorClasses]} text-white`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
