import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Infraglide ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information in connection with our website, applications, and services (collectively, the "Services").'
    },
    {
      title: '2. Information We Collect',
      subsections: [
        {
          subtitle: 'Information You Provide',
          text: 'We collect information you provide directly to us, such as when you create an account, sign up for a free trial, request a demo, or contact us for support. This may include your name, email address, company name, phone number, and any other information you choose to provide.'
        },
        {
          subtitle: 'Information Collected Automatically',
          text: 'When you visit our website or use our Services, we automatically collect certain information about your device and how you interact with our Services, including IP address, browser type, operating system, referring URLs, and pages visited. We use cookies and similar technologies to collect this information.'
        },
        {
          subtitle: 'Third-Party Information',
          text: 'We may receive information about you from third parties, such as analytics providers, advertising networks, and data brokers, which we may combine with other information we collect about you.'
        }
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect for various purposes, including:\n• Providing, maintaining, and improving our Services\n• Processing transactions and sending related information\n• Sending promotional communications (with your consent)\n• Responding to your inquiries and customer support requests\n• Analyzing usage patterns and improving user experience\n• Detecting and preventing fraud and security incidents\n• Complying with legal obligations'
    },
    {
      title: '4. Information Sharing and Disclosure',
      subsections: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as hosting providers, payment processors, and analytics services. These service providers are contractually obligated to use your information only for the purposes necessary to perform services for us.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information when required by law or when we believe in good faith that such disclosure is necessary to comply with legal obligations, enforce our terms and policies, or protect the rights, property, and safety of Infraglide, our users, or the public.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'If we are involved in a merger, acquisition, bankruptcy, or other business transaction or proceeding, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.'
        }
      ]
    },
    {
      title: '5. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.'
    },
    {
      title: '6. Your Privacy Rights',
      subsections: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, correct, or update your personal information. You can manage your account settings or contact us to exercise these rights.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You may request deletion of your personal information, subject to certain exceptions. We will respond to your request within 30 days, or as required by applicable law.'
        },
        {
          subtitle: 'Opt-Out of Marketing',
          text: 'You can opt out of receiving promotional emails from us by following the unsubscribe instructions in our emails or by contacting us directly.'
        },
        {
          subtitle: 'Cookie Control',
          text: 'You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent.'
        }
      ]
    },
    {
      title: '7. Cookies and Tracking Technologies',
      content: 'We use cookies, web beacons, and similar technologies to enhance your experience on our Services. These technologies help us remember your preferences, understand how you use our Services, and deliver personalized content. You can control cookies through your browser settings, though disabling cookies may affect the functionality of our Services.'
    },
    {
      title: '8. Third-Party Links',
      content: 'Our Services may contain links to third-party websites and services that are not operated by Infraglide. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete such information promptly.'
    },
    {
      title: '10. International Data Transfers',
      content: 'Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may differ from those of your jurisdiction. By using our Services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.'
    },
    {
      title: '11. California Privacy Rights',
      content: 'If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale or sharing of personal information. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: '12. European Union Privacy Rights',
      content: 'If you are a resident of the European Union, United Kingdom, or other European country, you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, and delete your data. You may also have the right to data portability and to object to processing. To exercise these rights, please contact us directly.'
    },
    {
      title: '13. Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last Updated" date of this Privacy Policy. Your continued use of our Services after any modifications constitutes your acceptance of the updated Privacy Policy.'
    },
    {
      title: '14. Contact Us',
      content: 'If you have questions about this Privacy Policy, concerns about our privacy practices, or wish to exercise your privacy rights, please contact us at:\n\nInfraglide\nEmail: privacy@infraglide.io\nPhone: +1 (555) 123-4567\nAddress: 123 Infrastructure Way, Tech City, TC 12345, USA\n\nWe will respond to your inquiry within 30 days or as otherwise required by applicable law.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-screen -mx-6 py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-purple-100"
          >
            Your privacy is important to us. Learn how we protect and handle your data.
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-600 mb-12">
            <strong>Last Updated: January 26, 2026</strong>
          </p>

          {sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
              
              {section.content && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                  {section.content}
                </p>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="ml-4 border-l-4 border-purple-300 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {subsection.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {subsection.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <p className="text-gray-700">
              <strong className="text-gray-900">Important:</strong> This privacy policy is provided for informational purposes. By using Infraglide's Services, you agree to the terms outlined in this Privacy Policy. If you do not agree with our privacy practices, please do not use our Services.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
