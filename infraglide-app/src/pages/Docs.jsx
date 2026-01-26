import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    subsections: [
      { id: 'intro', title: 'Introduction', content: 'Welcome to Infraglide documentation. Learn the basics of infrastructure management and get started with deploying your first application.' },
      { id: 'quickstart', title: 'Quick Start', content: 'Get up and running in 5 minutes. Follow our quick start guide to deploy your first infrastructure.' },
      { id: 'install', title: 'Installation', content: 'Install Infraglide CLI and set up your environment. Requires Node.js 14+ and npm 6+.' },
      { id: 'setup', title: 'Initial Setup', content: 'Configure your cloud accounts, set up authentication, and configure your first project.' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    subsections: [
      { id: 'deploy-infra', title: 'Deploying Infrastructure', content: 'Learn how to deploy infrastructure resources using Infraglide templates and configurations.' },
      { id: 'manage-envs', title: 'Managing Environments', content: 'Create and manage multiple environments (dev, staging, production) for your applications.' },
      { id: 'templates', title: 'Working with Templates', content: 'Use pre-built templates and create custom templates for your infrastructure needs.' },
      { id: 'monitoring', title: 'Monitoring & Alerts', content: 'Set up monitoring, create dashboards, and configure alerts for your infrastructure.' },
      { id: 'security', title: 'Security Best Practices', content: 'Implement security best practices including encryption, access control, and compliance.' },
      { id: 'scaling', title: 'Scaling Your Infrastructure', content: 'Scale your infrastructure horizontally and vertically with automatic scaling policies.' }
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    subsections: [
      { id: 'api-overview', title: 'API Overview', content: 'REST API overview, base URLs, and general conventions used throughout the Infraglide API.' },
      { id: 'authentication', title: 'Authentication', content: 'Authenticate API requests using API keys, OAuth 2.0, or JWT tokens.' },
      { id: 'endpoints', title: 'Endpoints', content: 'Complete reference of all available API endpoints with request/response examples.' },
      { id: 'webhooks', title: 'Webhooks', content: 'Configure webhooks to receive real-time notifications of infrastructure events.' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Topics',
    subsections: [
      { id: 'custom-scripts', title: 'Custom Scripts', content: 'Write custom scripts to automate infrastructure operations and deployments.' },
      { id: 'integrations', title: 'Integrations', content: 'Integrate Infraglide with your existing tools: CI/CD, monitoring, ticketing systems.' },
      { id: 'terraform', title: 'Terraform Integration', content: 'Import existing Terraform configurations and manage them with Infraglide.' },
      { id: 'performance', title: 'Performance Tuning', content: 'Optimize your deployments and reduce infrastructure costs with our tuning guide.' }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    subsections: [
      { id: 'faq', title: 'FAQ', content: 'Frequently asked questions about Infraglide, features, pricing, and support.' },
      { id: 'examples', title: 'Code Examples', content: 'Ready-to-use code examples for common use cases and infrastructure patterns.' },
      { id: 'community', title: 'Community', content: 'Join our community forum, GitHub discussions, and connect with other users.' },
      { id: 'support', title: 'Support', content: 'Get help from our support team, access documentation, and find known issues.' }
    ]
  }
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeSubsection, setActiveSubsection] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { type: 'assistant', text: 'Hi! I\'m the Infraglide AI Assistant. I can help you find information about our documentation, answer questions about infrastructure management, and guide you through our platform. What would you like to know?' }
  ]);
  const [aiInput, setAiInput] = useState('');

  const currentSection = docSections.find(s => s.id === activeSection);

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        setIsAIOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsAIOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    docSections.forEach(section => {
      section.subsections.forEach(subsection => {
        if (
          subsection.title.toLowerCase().includes(query) ||
          subsection.content.toLowerCase().includes(query)
        ) {
          results.push({
            sectionId: section.id,
            sectionTitle: section.title,
            subsectionId: subsection.id,
            subsectionTitle: subsection.title,
            subsectionContent: subsection.content,
          });
        }
      });
    });

    setSearchResults(results);
  }, [searchQuery]);

  const handleSearchResultClick = (sectionId, subsectionIdx) => {
    setActiveSection(sectionId);
    setActiveSubsection(subsectionIdx);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleAISend = () => {
    if (!aiInput.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: aiInput };
    setAiMessages([...aiMessages, userMessage]);
    setAiInput('');

    // Simulate AI response with a delay
    setTimeout(() => {
      const responses = [
        'Based on our documentation, here\'s what I found: Infrastructure deployment typically involves connecting your cloud account, configuring your resources, and then deploying with a single click.',
        'That\'s a great question! We recommend checking our Security Best Practices guide for detailed information on how to secure your infrastructure deployments.',
        'You can manage multiple environments (dev, staging, production) through our environment management tools. Would you like me to show you how?',
        'API-first design is one of our core features. You can integrate Infraglide with any tool using our comprehensive REST API. Check the API Reference section for details.',
        'For troubleshooting and more detailed assistance, I recommend visiting our FAQ section or contacting our support team directly.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage = { type: 'assistant', text: randomResponse };
      setAiMessages(prev => [...prev, assistantMessage]);
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-96 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="p-6 border-b border-gray-200">
                <div className="relative flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-lg outline-none"
                  />
                  <span className="text-xs text-gray-400 px-2 py-1 bg-gray-100 rounded">ESC</span>
                </div>
              </div>

              {/* Search Results */}
              <div className="overflow-y-auto max-h-80">
                {searchResults.length > 0 ? (
                  <div className="divide-y">
                    {searchResults.map((result, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          const subsectionIdx = docSections
                            .find(s => s.id === result.sectionId)
                            ?.subsections.findIndex(sub => sub.id === result.subsectionId);
                          handleSearchResultClick(result.sectionId, subsectionIdx);
                        }}
                        className="w-full text-left p-4 hover:bg-purple-50 transition"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-xs text-purple-600 font-semibold">{result.sectionTitle}</div>
                            <div className="text-sm font-semibold text-gray-900 mt-1">{result.subsectionTitle}</div>
                            <div className="text-sm text-gray-600 mt-1 line-clamp-2">{result.subsectionContent}</div>
                          </div>
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : searchQuery.trim() ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-500 text-sm">Start typing to search documentation</p>
                  </div>
                )}
              </div>

              {/* Footer with Ask AI */}
              <div className="border-t border-gray-200 p-4 bg-gray-50 flex items-center justify-between">
                <button 
                  onClick={() => setIsAIOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition text-sm font-medium text-gray-700"
                >
                  <span>✨</span>
                  Ask AI
                </button>
                <span className="text-xs text-gray-500">Use ⌘K or Ctrl+K to open</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isAIOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-end sm:items-center sm:justify-center p-4"
            onClick={() => setIsAIOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 100 }}
              className="bg-white rounded-lg shadow-2xl w-full sm:max-w-2xl h-96 sm:h-[32rem] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h2 className="font-semibold">Infraglide AI Assistant</h2>
                    <p className="text-xs text-purple-100">Powered by AI</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAIOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {aiMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-purple-600 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about Infraglide..."
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAISend()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <button
                    onClick={handleAISend}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition font-medium text-sm"
                  >
                    Send
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Press Enter or click Send. Use ⌘I or Ctrl+I to open</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-screen -mx-6 py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-purple-100 mb-8">Everything you need to know about Infraglide</p>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full max-w-md px-4 py-3 rounded-lg bg-white text-gray-800 flex items-center justify-between hover:shadow-lg transition group"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search documentation...</span>
            </div>
            <span className="text-xs text-gray-400 px-2 py-1 bg-gray-100 rounded group-hover:bg-gray-200 transition">⌘K</span>
          </button>
        </div>
      </motion.section>

      {/* Documentation Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar - Navigation */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <nav className="sticky top-24 space-y-6">
            {docSections.map(section => (
              <div key={section.id}>
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    setActiveSubsection(0);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                    activeSection === section.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 ml-2 space-y-1 border-l-2 border-purple-300 pl-3"
                  >
                    {section.subsections.map((sub, idx) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubsection(idx)}
                        className={`block w-full text-left px-3 py-1.5 rounded text-sm transition ${
                          activeSubsection === idx
                            ? 'bg-purple-100 text-purple-700 font-semibold'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          {currentSection && (
            <div>
              <h2 className="text-4xl font-bold mb-2">{currentSection.title}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded mb-8"></div>
              
              <div className="space-y-8">
                {currentSection.subsections.map((subsection, idx) => (
                  <motion.article
                    key={subsection.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`p-6 rounded-lg border-l-4 transition ${
                      activeSubsection === idx
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{subsection.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{subsection.content}</p>
                    
                    {/* Code Example */}
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                      <pre className="text-sm font-mono">
{`# Example: ${subsection.title.toLowerCase().replace(/\s+/g, '-')}
$ infraglide ${subsection.id}

✓ Operation completed successfully
✓ Resources created and configured
✓ Ready for deployment`}
                      </pre>
                    </div>

                    {activeSubsection === idx && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-purple-600 font-semibold hover:text-purple-800 transition"
                      >
                        Learn more →
                      </motion.button>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          )}
        </motion.main>

        {/* Right Sidebar - On This Page */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div className="sticky top-24 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-900">On This Page</h3>
            <nav className="space-y-2">
              {currentSection?.subsections.map((subsection, idx) => (
                <a
                  key={subsection.id}
                  onClick={() => setActiveSubsection(idx)}
                  className={`block text-sm py-2 px-3 rounded transition cursor-pointer ${
                    activeSubsection === idx
                      ? 'text-purple-600 font-semibold bg-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {subsection.title}
                </a>
              ))}
            </nav>
            
            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-3">Need Help?</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-purple-600 hover:text-purple-800 transition">→ API Reference</a></li>
                <li><a href="#" className="text-purple-600 hover:text-purple-800 transition">→ Code Examples</a></li>
                <li><a href="#" className="text-purple-600 hover:text-purple-800 transition">→ Contact Support</a></li>
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
