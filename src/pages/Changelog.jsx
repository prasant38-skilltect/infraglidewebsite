import { motion } from 'framer-motion';

const changelog = [
  {
    version: '2026.03.12 - Mar 27, 2026',
    improvements: [],
    bugFixes: [
      {
        category: 'Leftbar',
        items: [
          'Restored the default leftbar width for users without AI chat enabled (private alpha), providing a more comfortable design workspace and bringing back the expected layout behavior.'
        ]
      }
    ],
    notes: []
  },
  {
    version: '2026.03.11 - Mar 26, 2026',
    improvements: [],
    bugFixes: [
      {
        category: 'Node / Containers',
        items: [
          'Line and arrow shapes now validate correctly, so these diagram elements work more reliably in real architectures.',
          'Text and other nodes now consistently respect minimum sizing rules, preventing save and rendering issues in edge-case layouts.'
        ]
      }
    ],
    notes: []
  },
  {
    version: '2026.03.10 - Mar 26, 2026',
    improvements: [
      {
        category: 'New architecture',
        items: [
          'The new architecture screen now prioritizes Create from scratch as the first option, making the most common starting path quicker to access.'
        ]
      }
    ],
    bugFixes: [
      {
        category: 'Import from cloud provider',
        items: [
          'Cloud import failures now display clear, dedicated error messages in the interface, helping teams diagnose issues and recover faster.'
        ]
      }
    ],
    notes: []
  },
  {
    version: '2026.03.9 - Mar 19, 2026',
    improvements: [],
    bugFixes: [
      {
        category: 'Design area / diagram',
        items: [
          'Deleting nodes now reliably cleans up related connectors, preventing diagram inconsistencies during node removal workflows.'
        ]
      },
      {
        category: 'Resource Configurator',
        items: [
          'Switching between modules now correctly keeps each module\'s own card data, avoiding unintended overwrites when editing.'
        ]
      }
    ],
    notes: [
      'The "Create with AI" option has been removed from the new architecture flow. Its successor will soon be released under alpha feature flag. Contact support team if you want to be in the Alpha waiting list.'
    ]
  },
  {
    version: '2026.03.8 - Mar 18, 2026',
    improvements: [
      {
        category: 'Design area / diagram',
        items: [
          'Architecture revision history is now more resilient by keeping a larger recent revision window (10), making rollback and recovery safer when users need to restore a previous working state.'
        ]
      }
    ],
    bugFixes: [
      {
        category: 'RBAC/Permissions',
        items: [
          'Permission policy initialization was stabilized to ensure access rules are created and updated more reliably, reducing risk of inconsistent authorization behavior across organizations and projects.'
        ]
      }
    ],
    notes: []
  }
];

export default function Changelog() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Changelog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-purple-100"
          >
            Latest updates and improvements to Infraglide
          </motion.p>
        </div>
      </motion.section>

      {/* Changelog Entries with Sidebar */}
      <motion.section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Content - Main Changelog */}
          <div className="md:col-span-3">
            <div className="space-y-12">
              {changelog.map((entry, idx) => {
                // Extract just the version number for ID
                const versionId = entry.version.split(' - ')[0];
                return (
                  <motion.div
                    key={idx}
                    id={versionId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-purple-600 pl-6"
                  >
                    {/* Version Header */}
                    <motion.h2
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
                    >
                      <span className="text-2xl">⏰</span>
                      {entry.version}
                    </motion.h2>

                    {/* Features and Improvements */}
                    {entry.improvements.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-8"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <span>🎉</span> Features and Improvements
                        </h3>
                        <div className="space-y-4 ml-6">
                          {entry.improvements.map((item, i) => (
                            <div key={i}>
                              <p className="font-semibold text-gray-700 mb-2">• {item.category}</p>
                              <ul className="space-y-2">
                                {item.items.map((subItem, j) => (
                                  <li key={j} className="text-gray-600 ml-4">
                                    ◦ {subItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Bug Fixes */}
                    {entry.bugFixes.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-8"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <span>✅</span> Bug Fixes
                        </h3>
                        <div className="space-y-4 ml-6">
                          {entry.bugFixes.map((item, i) => (
                            <div key={i}>
                              <p className="font-semibold text-gray-700 mb-2">• {item.category}</p>
                              <ul className="space-y-2">
                                {item.items.map((subItem, j) => (
                                  <li key={j} className="text-gray-600 ml-4">
                                    ◦ {subItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Notes */}
                    {entry.notes.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 p-4 rounded-lg border border-blue-200"
                      >
                        <h4 className="font-semibold text-gray-800 mb-2">📌 Notes</h4>
                        <ul className="space-y-2">
                          {entry.notes.map((note, i) => (
                            <li key={i} className="text-gray-700">
                              • {note}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar - Date Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="sticky top-24 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                ⏰ Versions
              </h3>
              <nav className="space-y-2">
                {changelog.map((entry, idx) => {
                  const versionId = entry.version.split(' - ')[0];
                  return (
                    <motion.a
                      key={idx}
                      href={`#${versionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(versionId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      whileHover={{ x: 4 }}
                      className="block text-sm text-gray-700 hover:text-purple-600 hover:font-semibold transition py-2 px-3 rounded hover:bg-white cursor-pointer"
                    >
                      {entry.version}
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-screen -mx-6 py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-xl mb-8">Check this page regularly for the latest features and improvements</p>
      </motion.section>
    </div>
  );
}
