import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/emailService';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function FreeTrial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
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
      subject: 'Free Trial Request',
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      _subject: `New Free Trial Request from ${formData.name}`,
      _captcha: 'false'
    };

    sendEmail(emailData).then(result => {
      setLoading(false);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', phone: '' });
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
            Start Your 14-Day Free Trial
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl text-purple-100"
          >
            No credit card required. Full access to all features.
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
          <h2 className="text-3xl font-bold mb-8">Sign Up for Free</h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-green-50 border border-green-200 rounded-lg text-center"
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Welcome!</h3>
              <p className="text-green-600">
                Your free trial activation email has been sent. Please check your inbox.
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
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
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
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
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
              <label className="block text-gray-700 font-semibold mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
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
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold hover:shadow-lg-custom transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Starting Trial...' : 'Start Free Trial'}
            </button>
            </form>
          )}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
          <div className="space-y-6">
            {[
              {
                icon: '✓',
                title: '14 Days Free',
                desc: 'Full access to all features'
              },
              {
                icon: '✓',
                title: 'No Credit Card',
                desc: 'Sign up without payment information'
              },
              {
                icon: '✓',
                title: 'All Features Unlocked',
                desc: 'Access premium features during trial'
              },
              {
                icon: '✓',
                title: 'Priority Support',
                desc: 'Get help from our support team'
              },
              {
                icon: '✓',
                title: 'Easy Cancellation',
                desc: 'Cancel anytime, no questions asked'
              },
              {
                icon: '✓',
                title: 'Multi-Cloud Support',
                desc: 'Deploy across AWS, Azure, and GCP'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="text-green-500 text-2xl font-bold">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
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
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: 'Infraglide has transformed how we manage our infrastructure. Highly recommended!',
              author: 'John Doe',
              role: 'CTO at TechCorp'
            },
            {
              text: 'The ease of deployment and monitoring is unmatched. Best investment ever.',
              author: 'Jane Smith',
              role: 'DevOps Lead at StartupXYZ'
            },
            {
              text: 'Saved us thousands in cloud costs with the optimization features.',
              author: 'Mike Johnson',
              role: 'Cloud Architect at Enterprise Inc'
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-lg"
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
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {[
            {
              q: 'Do I need a credit card to start the trial?',
              a: 'No, you can sign up for the 14-day free trial without providing a credit card.'
            },
            {
              q: 'What happens after the trial ends?',
              a: 'You can choose to upgrade to a paid plan or your account will be downgraded to our free tier.'
            },
            {
              q: 'Can I use all features during the trial?',
              a: 'Yes, you have full access to all premium features during your 14-day trial period.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely. You can cancel your trial or subscription at any time with no penalties.'
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
