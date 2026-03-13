import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md-custom"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Menu */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Infraglide" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Infraglide
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-8 items-center">
            <Link to="/#features" className="text-gray-700 hover:text-blue-500 transition">Features</Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-blue-500 transition">How It Works</Link>
            <Link to="/#pricing" className="text-gray-700 hover:text-blue-500 transition">Pricing</Link>
            <Link to="/docs" className="text-gray-700 hover:text-blue-500 transition">Docs</Link>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex gap-4 items-center">
          <Link 
            to="/free-trial" 
            className="px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg-custom transition"
          >
            Free Trial
          </Link>
          <Link 
            to="/demo" 
            className="px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg-custom transition"
          >
            Get Demo
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
