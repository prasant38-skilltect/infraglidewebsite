import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-screen -mx-6 py-32 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 text-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
          <motion.div
            animate={{ 
              x: [100, 0, 100],
              y: [50, 0, 50],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 2 }}
            className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [100, 0, 100],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 4 }}
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Infrastructure Made <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Effortless</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
              >
                Deploy, manage, and scale your cloud infrastructure with the power of visual design and intelligent automation. Build faster, reduce complexity, and maintain security at every step.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-sm text-gray-300">Faster Deployment</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-sm text-gray-300">Active Users</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 flex-wrap"
              >
                <Link
                  to="/free-trial"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition transform hover:scale-105"
                >
                  Request Demo
                </Link>
              </motion.div>

              {/* Cloud Providers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 pt-8 border-t border-white border-opacity-20"
              >
                <p className="text-sm text-gray-300 mb-4">Trusted Cloud Providers:</p>
                <div className="flex items-center gap-6 flex-wrap">
                  {['AWS', 'Azure', 'GCP', 'OCI'].map((cloud, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="px-4 py-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-md text-sm font-semibold hover:bg-opacity-20 transition"
                    >
                      {cloud}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full h-96"
              >
                {/* Animated illustration box */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">☁️</div>
                    <p className="text-lg font-semibold">Cloud Infrastructure</p>
                    <p className="text-sm text-opacity-80 mt-2">Visualized & Simplified</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, linear: true }}
                  className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, linear: true }}
                  className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300 bg-opacity-20 rounded-full blur-2xl"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 pt-12 border-t border-white border-opacity-20"
          >
            <p className="text-center text-gray-300 mb-8 text-sm">Trusted by leading enterprises worldwide</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['TechCorp', 'CloudBase', 'DevOps+', 'Infrastructure Co', 'Cloud Systems'].map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="text-gray-400 font-semibold text-sm hover:text-white transition"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section id="features" className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Powerful Features
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '🚀',
              title: 'Fast Deployment',
              description: 'Deploy infrastructure in minutes, not hours. Reduce deployment time by up to 80%.'
            },
            {
              icon: '🔒',
              title: 'Enterprise Security',
              description: 'Role-based access control, encryption, and compliance with industry standards.'
            },
            {
              icon: '📊',
              title: 'Real-time Analytics',
              description: 'Monitor your infrastructure with comprehensive dashboards and insights.'
            },
            {
              icon: '📄',
              title: 'Multi-Cloud Support',
              description: 'Deploy across AWS, Azure, GCP, and on-premises with a single interface.'
            },
            {
              icon: '👥',
              title: 'Team Collaboration',
              description: 'Work together seamlessly with version control and audit trails.'
            },
            {
              icon: '⚙️',
              title: 'API-First Design',
              description: 'Integrate with your existing tools using our comprehensive REST API.'
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg-custom transition bg-white"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { step: '1', title: 'Connect', desc: 'Connect your cloud account' },
            { step: '2', title: 'Configure', desc: 'Set up your infrastructure' },
            { step: '3', title: 'Deploy', desc: 'Deploy with one click' },
            { step: '4', title: 'Monitor', desc: 'Monitor and optimize' }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section id="pricing" className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 text-center mb-16"
        >
          Choose the perfect plan for your infrastructure needs
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              name: 'Standard',
              price: '$49',
              period: '/month',
              description: 'Perfect for growing teams',
              features: [
                'Multi-cloud support (AWS, Azure, GCP)',
                'Real-time monitoring & analytics',
                'Email support',
                'Community support',
                'Working hours support (9-5 EST)',
                'API access',
                'Up to 5 team members',
                'Monthly reports',
                'Basic integrations'
              ],
              cta: 'Start Free Trial',
              highlight: false
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              period: 'pricing',
              description: 'For large-scale operations',
              features: [
                'Everything in Standard, plus:',
                'Dedicated Account Manager',
                '24/7 Premium Support',
                'Single Sign-On (SSO)',
                'Advanced Security & Compliance',
                'Custom Integrations',
                'Advanced Analytics & Reporting',
                'Unlimited team members',
                'SLA guarantee',
                'Custom workflows',
                'Priority deployments'
              ],
              cta: 'Contact Sales',
              highlight: true
            }
          ].map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-lg border-2 transition ${
                plan.highlight
                  ? 'border-purple-600 shadow-lg-custom bg-gradient-to-br from-purple-50 to-white'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-purple-600">{plan.price}</span>
                {plan.period === '/month' && <span className="text-gray-600 text-lg">/{plan.period}</span>}
                {plan.period === 'pricing' && <span className="text-gray-600 text-lg ml-2">{plan.period}</span>}
              </div>
              <Link
                to={plan.cta === 'Start Free Trial' ? '/free-trial' : '/contact'}
                className={`w-full py-3 mb-8 rounded-lg font-semibold transition block text-center ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg-custom'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                {plan.cta}
              </Link>
              <div className="border-t pt-6">
                <p className="font-semibold mb-4 text-gray-900">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {!feature.includes('Everything in') ? (
                        <>
                          <span className="text-green-500 font-bold text-lg">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </>
                      ) : (
                        <span className="text-gray-700 font-semibold italic">{feature}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: 'Can I switch plans anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
              },
              {
                q: 'Do you offer annual billing discounts?',
                a: 'Yes! Save 20% when you choose annual billing instead of monthly.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, wire transfer, and ACH for Enterprise customers.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Absolutely! Get 14 days free to explore all features with no credit card required.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <p className="font-semibold text-lg mb-2">{faq.q}</p>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-screen -mx-6 py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of teams already using Infraglide</p>
        <Link
          to="/free-trial"
          className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg-custom transition"
        >
          Start Your Free Trial Today
        </Link>
      </motion.section>
    </div>
  );
}
