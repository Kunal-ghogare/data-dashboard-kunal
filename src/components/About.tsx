
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Github, Globe } from 'lucide-react';

const About = () => {
  const contactInfo = [
    { icon: MapPin, text: 'Fullerton, CA (Open to Relocation)' },
    { icon: Phone, text: '+1-747-324-8464' },
    { icon: Mail, text: 'kunalghogare09@gmail.com' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/kunalghogare', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/kunalghogare', label: 'GitHub' },
    { icon: Globe, href: 'https://portfolio.kunalghogare.com', label: 'Portfolio' },
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '380M+', label: 'Rows Processed' },
    { number: '68%', label: 'Data Accuracy Improvement' },
  ];

  return (
    <section id="about" className="min-h-screen bg-white text-slate-800 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-blue-600">Data</span> Analyst
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Strategic Data Analyst with 3+ years of experience turning complex data into actionable visualizations and KPIs. 
                Skilled at stakeholder collaboration, uncovering insights through data storytelling and driving data-informed decisions.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-600">
                  <item.icon size={18} className="text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">Master of Science in Information Technology</h3>
              <p className="text-slate-600 mb-2">California State University, Long Beach</p>
              <p className="text-slate-500 text-sm mb-3">Aug 2023 – May 2025</p>
              <p className="text-slate-600 text-sm">Business Data Analysis, Machine Learning, Big Data Management, AI</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">Bachelor of Engineering in Information Technology</h3>
              <p className="text-slate-600 mb-2">Pune University</p>
              <p className="text-slate-500 text-sm mb-3">Aug 2017 – May 2021 | GPA: 4.0/4.0</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 text-sm font-medium">Perfect GPA</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
