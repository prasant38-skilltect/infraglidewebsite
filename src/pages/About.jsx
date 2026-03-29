import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-screen -mx-6 py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Infraglide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            We're on a mission to simplify infrastructure management and empower teams to build faster.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-4">
              Infraglide was founded with the belief that infrastructure management should be accessible to everyone. We're committed to removing complexity and enabling teams of all sizes to deploy, manage, and scale their infrastructure with confidence.
            </p>
            <p className="text-gray-600 text-lg">
              Our vision is to become the go-to platform for modern infrastructure management, where visual design meets powerful automation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-400">Mission Illustration</p>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gray-50 w-screen -mx-6 px-6 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Simplicity', desc: 'We believe complexity is the enemy. Everything we build is designed to be simple and intuitive.' },
              { title: 'Reliability', desc: 'Infrastructure must be reliable. Our platform is built on enterprise-grade reliability principles.' },
              { title: 'Innovation', desc: 'We continuously innovate to provide cutting-edge solutions for modern infrastructure challenges.' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Umesh Sharma', role: 'Managing Director' },
            { name: 'Manish Sharma', role: 'Founder & CEO' },
            { name: 'Monika Sharma', role: 'Head of Engineering' },
            { name: 'Ravindra Sharma', role: 'Head of Marketing' },
            { name: 'Nakshtra Singh Bhati', role: 'Engineering Manager' },
            { name: 'Harsh Shrivastav', role: 'Engineering Manager' },
            { name: 'Kamal Gaur', role: 'Engineering Manager' },
            { name: 'Sunil Kumar', role: 'Chief Sales Officer' }
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="text-center"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${member.name.replace(/\s+/g, '+')}&background=random&color=fff&size=128`}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Guiding Build Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 w-screen -mx-6 px-6 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Guiding Build Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: 'Mukesh Purohit', role: 'CTO' },
              { name: 'Prashant Kumar Jinega', role: 'Mentor' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${member.name.replace(/\s+/g, '+')}&background=random&color=fff&size=256`}
                  alt={member.name}
                  className="w-48 h-48 rounded-lg mx-auto mb-6 shadow-lg object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-lg text-gray-600 mt-2">{member.role}</p>
                <p className="text-gray-500 mt-3 max-w-sm">Leading the technical vision and strategic guidance for our platform development</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
