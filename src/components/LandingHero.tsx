
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Database, BarChart3, TrendingUp, Brain, PieChart, LineChart, Award, Users, DollarSign, Target } from 'lucide-react';

const LandingHero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Career progression data showing skill growth over time
  const careerData = [
    { year: '2019', skillLevel: 25, experience: 'Intern', projects: 2 },
    { year: '2020', skillLevel: 45, experience: 'Junior', projects: 5 },
    { year: '2021', skillLevel: 65, experience: 'Analyst', projects: 8 },
    { year: '2022', skillLevel: 80, experience: 'Senior', projects: 12 },
    { year: '2023', skillLevel: 95, experience: 'Expert', projects: 15 }
  ];

  // Personalized KPI data based on actual achievements
  const achievementData = [
    { label: 'Cost Reduction', value: '$3K/month', trend: 'up', icon: DollarSign },
    { label: 'Data Processed', value: '380M+ rows', trend: 'up', icon: Database },
    { label: 'Lead Cost Reduction', value: '49%', trend: 'up', icon: Target },
    { label: 'Experience', value: '3+ Years', trend: 'up', icon: Award }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-sky-100 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Profile and Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-48 h-48 mx-auto lg:mx-0"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 p-2">
              <img
                src="/lovable-uploads/b7864d27-37d4-457a-83b7-d54598fd9e8c.png"
                alt="Kunal Ghogare"
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </div>
            {/* Data Icons around profile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <Database className="absolute -top-2 left-1/2 w-6 h-6 text-blue-600" />
              <BarChart3 className="absolute top-1/2 -right-2 w-6 h-6 text-indigo-600" />
              <TrendingUp className="absolute -bottom-2 left-1/2 w-6 h-6 text-cyan-600" />
              <Brain className="absolute top-1/2 -left-2 w-6 h-6 text-sky-600" />
            </motion.div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-blue-600 font-medium mb-2"
            >
              Strategic Data Analyst
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="text-blue-600">Kunal</span> Ghogare
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-slate-600 leading-relaxed mb-8"
            >
              I transform complex datasets into compelling stories that drive strategic decisions. 
              With 3+ years of experience, I specialize in turning data chaos into actionable insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToAbout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore My Work
              </button>
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Download Resume
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Personalized Career Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Dashboard Header */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">Career Impact Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-600">Real Achievements</span>
                </div>
              </div>
            </div>
            
            {/* Achievement Cards */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {achievementData.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">{achievement.label}</span>
                        <IconComponent className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-slate-800">{achievement.value}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Career Growth Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Career Growth Journey
                  </h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">Skill Level</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-slate-600">Projects</span>
                    </div>
                  </div>
                </div>
                
                {/* Career Progression Chart */}
                <div className="flex items-end justify-between h-32 space-x-2">
                  {careerData.map((data, index) => (
                    <motion.div
                      key={data.year}
                      className="flex-1 flex flex-col items-center space-y-1"
                    >
                      {/* Skill Level Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${data.skillLevel}%` }}
                        transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm relative group max-h-24"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {data.experience}: {data.skillLevel}%
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Projects Indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                        className="w-3 h-3 bg-green-500 rounded-full relative group"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded">
                            {data.projects} projects
                          </div>
                        </div>
                      </motion.div>
                      
                      <div className="text-xs text-slate-600 font-medium">
                        {data.year}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center space-x-4">
                  <PieChart className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">SQL • Python • Tableau • Power BI</span>
                </div>
                <div className="text-sm text-slate-500">From intern to expert</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LandingHero;
