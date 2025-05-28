
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, BarChart3, Settings, Brain } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      icon: Code,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 95, color: 'bg-yellow-500' },
        { name: 'SQL', level: 90, color: 'bg-blue-500' },
        { name: 'R', level: 85, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
        { name: 'HTML/CSS', level: 85, color: 'bg-orange-500' },
        { name: 'DAX', level: 75, color: 'bg-green-500' },
      ]
    },
    libraries: {
      icon: Brain,
      title: 'Libraries & Frameworks',
      skills: [
        { name: 'Pandas', level: 95, color: 'bg-blue-500' },
        { name: 'NumPy', level: 90, color: 'bg-orange-500' },
        { name: 'Scikit-learn', level: 85, color: 'bg-orange-600' },
        { name: 'Matplotlib', level: 85, color: 'bg-green-500' },
        { name: 'Seaborn', level: 80, color: 'bg-blue-400' },
        { name: 'PyTorch', level: 75, color: 'bg-red-500' },
        { name: 'NLTK', level: 80, color: 'bg-green-600' },
        { name: 'OpenCV', level: 70, color: 'bg-purple-500' },
      ]
    },
    databases: {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 90, color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 80, color: 'bg-green-600' },
        { name: 'OracleDB', level: 85, color: 'bg-red-600' },
        { name: 'Snowflake', level: 75, color: 'bg-blue-400' },
        { name: 'DynamoDB', level: 70, color: 'bg-orange-600' },
        { name: 'Hadoop', level: 75, color: 'bg-yellow-600' },
      ]
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 85, color: 'bg-orange-500' },
        { name: 'Google Cloud', level: 80, color: 'bg-blue-500' },
        { name: 'Azure', level: 85, color: 'bg-blue-600' },
        { name: 'Salesforce', level: 75, color: 'bg-blue-400' },
      ]
    },
    tools: {
      icon: BarChart3,
      title: 'BI & Analytics Tools',
      skills: [
        { name: 'Tableau', level: 90, color: 'bg-blue-500' },
        { name: 'Power BI', level: 95, color: 'bg-yellow-500' },
        { name: 'Excel', level: 90, color: 'bg-green-600' },
        { name: 'SSIS', level: 85, color: 'bg-blue-600' },
        { name: 'Alteryx', level: 80, color: 'bg-blue-400' },
        { name: 'Oracle BI', level: 75, color: 'bg-red-600' },
      ]
    },
    devtools: {
      icon: Settings,
      title: 'Development Tools',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-600' },
        { name: 'JIRA', level: 85, color: 'bg-blue-600' },
        { name: 'Visual Studio', level: 85, color: 'bg-purple-600' },
        { name: 'Apache Kafka', level: 80, color: 'bg-gray-700' },
        { name: 'Airflow', level: 75, color: 'bg-red-500' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' },
        { name: 'IBM SPSS', level: 80, color: 'bg-blue-700' },
      ]
    }
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive toolkit spanning programming languages, databases, cloud platforms, 
            and advanced analytics tools for end-to-end data solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <category.icon size={20} />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-3 rounded-full ${skill.color} relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        x: ['100%', '-100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Skill Level Description */}
              <div className="mt-3 text-sm text-gray-400">
                {skill.level >= 90 && "Expert"}
                {skill.level >= 80 && skill.level < 90 && "Advanced"}
                {skill.level >= 70 && skill.level < 80 && "Proficient"}
                {skill.level < 70 && "Intermediate"}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Programming Languages', count: '6+', icon: Code },
            { label: 'Databases', count: '7+', icon: Database },
            { label: 'Cloud Platforms', count: '4+', icon: Cloud },
            { label: 'Analytics Tools', count: '10+', icon: BarChart3 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center"
            >
              <stat.icon size={32} className="text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.count}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
