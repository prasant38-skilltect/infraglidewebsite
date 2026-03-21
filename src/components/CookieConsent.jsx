import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setShowCookie(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookie(false);
    // Here you can initialize analytics or tracking code
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowCookie(false);
    console.log('Cookies declined');
  };

  return (
    <AnimatePresence>
      {showCookie && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
            <div className="p-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Policy</h3>
                  <p className="text-gray-700 mb-4">
                    This website uses cookies to collect information about how visitors use our website. For more information, please see our{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline transition">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p className="text-sm text-gray-600">
                    We use cookies to improve your experience, analyze traffic, and provide personalized content.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDecline}
                    className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition whitespace-nowrap"
                  >
                    Decline
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAccept}
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg transition whitespace-nowrap"
                  >
                    Accept
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
