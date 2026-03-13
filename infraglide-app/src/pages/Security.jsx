import { motion } from 'framer-motion';

export default function Security() {
  const features = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols.'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Protect your account with multi-factor authentication for enhanced security.'
    },
    {
      title: 'GDPR Compliant',
      description: 'We comply with GDPR and other international data protection regulations.'
    },
    {
      title: 'Regular Security Audits',
      description: 'Our infrastructure undergoes regular third-party security audits and penetration testing.'
    },
    {
      title: 'SOC 2 Certified',
      description: 'We maintain SOC 2 Type II certification to ensure the highest security standards.'
    },
    {
      title: 'Incident Response Plan',
      description: 'We have a comprehensive incident response plan to address any security concerns promptly.'
    }
  ];

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
            Security at Infraglide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            We take security seriously. Here's how we protect your infrastructure and data.
          </motion.p>
        </div>
      </motion.section>

      {/* Security Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">Our Security Commitments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Compliance Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gray-50 w-screen -mx-6 px-6 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['GDPR', 'HIPAA', 'SOC 2 Type II', 'ISO 27001'].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="bg-white p-8 rounded-lg text-center shadow-md"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold text-lg">{cert}</h3>
                <p className="text-sm text-gray-600 mt-2">Certified & Compliant</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Security Concerns?</h2>
          <p className="mb-6">If you have any security concerns, please contact our security team.</p>
          <a
            href="mailto:security@infraglide.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition"
          >
            security@infraglide.com
          </a>
        </div>
      </motion.section>
    </div>
  );
}
