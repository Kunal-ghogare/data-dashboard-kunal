
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Database, BarChart3, TrendingUp, Brain } from 'lucide-react';

const LandingHero = () => {
  const codeSnippet = `// Welcome to my data universe
const dataAnalyst = {
  name: 'Kunal Ghogare',
  title: 'Strategic Data Analyst',
  skills: [
    'Python', 'SQL', 'Tableau', 'Power BI',
    'Machine Learning', 'Statistical Analysis'
  ],
  passion: 'Turning data into insights',
  experience: '3+ years',
  dataProcessed: '380M+ rows',
  
  transformData: function() {
    return this.skills
      .map(skill => skill + ' expertise')
      .filter(insight => insight.includes('data'))
      .reduce((impact, insight) => impact + insight, '');
  }
};

console.log('Ready to analyze your data! 📊');`;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* Right Side - Code Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-700 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-slate-300 text-sm ml-4">data_analyst.js</span>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="text-slate-300 whitespace-pre-wrap leading-relaxed"
              >
                <span className="text-green-400">// Welcome to my data universe</span>
                {'\n'}<span className="text-blue-400">const</span> <span className="text-yellow-300">dataAnalyst</span> = {'{'}
                {'\n'}  <span className="text-red-300">name</span>: <span className="text-green-300">'Kunal Ghogare'</span>,
                {'\n'}  <span className="text-red-300">title</span>: <span className="text-green-300">'Strategic Data Analyst'</span>,
                {'\n'}  <span className="text-red-300">skills</span>: [
                {'\n'}    <span className="text-green-300">'Python'</span>, <span className="text-green-300">'SQL'</span>, <span className="text-green-300">'Tableau'</span>,
                {'\n'}    <span className="text-green-300">'Power BI'</span>, <span className="text-green-300">'Machine Learning'</span>
                {'\n'}  ],
                {'\n'}  <span className="text-red-300">passion</span>: <span className="text-green-300">'Turning data into insights'</span>,
                {'\n'}  <span className="text-red-300">experience</span>: <span className="text-green-300">'3+ years'</span>,
                {'\n'}  <span className="text-red-300">dataProcessed</span>: <span className="text-green-300">'380M+ rows'</span>
                {'\n'}{'}'};
                {'\n\n'}<span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-300">'Ready to analyze! 📊'</span>);
              </motion.pre>
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
