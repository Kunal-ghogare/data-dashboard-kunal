
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Database, BarChart3, TrendingUp, Brain, PieChart, LineChart } from 'lucide-react';

const LandingHero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock data for visualizations
  const salesData = [
    { month: 'Jan', sales: 12000, profit: 3200 },
    { month: 'Feb', sales: 19000, profit: 4100 },
    { month: 'Mar', sales: 15000, profit: 3800 },
    { month: 'Apr', sales: 22000, profit: 5200 },
    { month: 'May', sales: 28000, profit: 6800 },
    { month: 'Jun', sales: 31000, profit: 7400 }
  ];

  const kpiData = [
    { label: 'Revenue Growth', value: '+24.5%', trend: 'up' },
    { label: 'Customer Satisfaction', value: '94.2%', trend: 'up' },
    { label: 'Market Share', value: '18.7%', trend: 'up' },
    { label: 'Cost Reduction', value: '-12.3%', trend: 'down' }
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

        {/* Right Side - Data Visualization Dashboard */}
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
                <h3 className="text-lg font-semibold text-slate-800">Sales Performance Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-600">Live Data</span>
                </div>
              </div>
            </div>
            
            {/* KPI Cards */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {kpiData.map((kpi, index) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">{kpi.label}</span>
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-slate-800">{kpi.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                    <LineChart className="w-4 h-4" />
                    Revenue Trend (6 months)
                  </h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">Sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-slate-600">Profit</span>
                    </div>
                  </div>
                </div>
                
                {/* Simple Bar Chart Visualization */}
                <div className="flex items-end justify-between h-32 space-x-2">
                  {salesData.map((data, index) => (
                    <motion.div
                      key={data.month}
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.sales / 35000) * 100}%` }}
                      transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm relative group"
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded">
                          ${data.sales.toLocaleString()}
                        </div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-600">
                        {data.month}
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
                  <span className="text-sm font-medium text-slate-700">Built with Tableau & Python</span>
                </div>
                <div className="text-sm text-slate-500">380M+ rows processed</div>
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
