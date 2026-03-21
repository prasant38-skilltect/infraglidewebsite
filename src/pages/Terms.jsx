import { motion } from 'framer-motion';

export default function Terms() {
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-100"
          >
            Last updated: February 17, 2026
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-24 prose prose-lg"
      >
        <h2>1. Terms of Use</h2>
        <p>
          By accessing and using the Infraglide website and services, you accept and agree to be bound by the terms
          and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Infraglide's
          website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
          and under this license you may not:
        </p>
        <ul>
          <li>Modifying or copying the materials</li>
          <li>Using the materials for any commercial purpose or for any public display</li>
          <li>Attempting to decompile or reverse engineer any software contained on the website</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or 'mirroring' the materials on any other server</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Infraglide's website are provided as is. Infraglide makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall Infraglide or its suppliers be liable for any damages (including, without limitation, damages for loss
          of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Infraglide's website.
        </p>

        <h2>5. Accuracy of Materials</h2>
        <p>
          The materials appearing on Infraglide's website could include technical, typographical, or photographic errors. Infraglide
          does not warrant that any of the materials on the website are accurate, complete, or current. Infraglide may make changes
          to the materials contained on the website at any time without notice.
        </p>

        <h2>6. Links</h2>
        <p>
          Infraglide has not reviewed all of the sites linked to its website and is not responsible for the contents of any such
          linked site. The inclusion of any link does not imply endorsement by Infraglide of the site. Use of any such linked website
          is at the user's own risk.
        </p>

        <h2>7. Modifications</h2>
        <p>
          Infraglide may revise these terms of service for the website at any time without notice. By using this website, you are
          agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United States, and you
          irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </motion.section>
    </div>
  );
}
