import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/emailService';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const emailData = {
      subject: `Demo Request - ${formData.preferredDate} at ${formData.preferredTime}`,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
      _subject: `New Demo Request from ${formData.name}`,
      _captcha: 'false'
    };

    sendEmail(emailData).then(result => {
      setLoading(false);
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(result.message);
      }
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-screen -mx-6 py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Schedule Your Personalized Demo
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl text-purple-100"
          >
            See how Infraglide can transform your infrastructure management
          </motion.p>
        </div>
      </motion.section>

      {/* Form and Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Request a Demo</h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-green-50 border border-green-200 rounded-lg text-center"
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Demo Scheduled!</h3>
              <p className="text-green-600">
                Thank you! A member of our team will contact you shortly to confirm your demo.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  {error}
                </motion.div>
              )}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold hover:shadow-lg-custom transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Scheduling...' : 'Request Demo'}
            </button>
            </form>
          )}
        </motion.div>

        {/* What You'll Learn */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">What You'll Learn</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Infrastructure Automation',
                desc: 'See how to automate your entire infrastructure deployment process'
              },
              {
                title: 'Cost Optimization',
                desc: 'Discover how to reduce your cloud spending by up to 40%'
              },
              {
                title: 'Real-time Monitoring',
                desc: 'Get insights into your infrastructure health and performance metrics'
              },
              {
                title: 'Team Collaboration',
                desc: 'Learn how teams can work together more efficiently'
              },
              {
                title: 'Security & Compliance',
                desc: 'Understand our enterprise-grade security features'
              },
              {
                title: 'Advanced Features',
                desc: 'Explore APIs, integrations, and custom workflows'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials */}
      <motion.section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: 'The demo gave us exactly what we needed. Infraglide is a game-changer.',
              author: 'Sarah Williams',
              role: 'Infrastructure Manager at CloudCorp'
            },
            {
              text: 'The personalized demo really helped us understand the capabilities.',
              author: 'David Brown',
              role: 'VP of Engineering at InnovateTech'
            },
            {
              text: 'Amazing product and fantastic demo session. Highly recommended!',
              author: 'XXXX-XXXX',
              role: 'DevOps Engineer at DataFlow Systems'
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Demo FAQs
        </motion.h2>

        <div className="space-y-6">
          {[
            {
              q: 'How long is the demo?',
              a: 'Our personalized demos typically last 45-60 minutes, tailored to your specific needs.'
            },
            {
              q: 'Do I need to prepare anything?',
              a: 'No preparation needed! Our experts will guide you through everything during the demo.'
            },
            {
              q: 'Can I request a specific time?',
              a: 'Yes, you can select your preferred date and time when requesting the demo.'
            },
            {
              q: 'What if I have questions after the demo?',
              a: 'We provide follow-up support. You can reach our team anytime with questions.'
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-6"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
