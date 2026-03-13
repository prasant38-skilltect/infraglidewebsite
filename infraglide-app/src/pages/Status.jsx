import { motion } from 'framer-motion';

export default function Status() {
  const services = [
    { name: 'API', status: 'operational', uptime: '99.99%' },
    { name: 'Dashboard', status: 'operational', uptime: '99.98%' },
    { name: 'Infrastructure', status: 'operational', uptime: '99.99%' },
    { name: 'Webhooks', status: 'operational', uptime: '99.97%' },
    { name: 'Authentication', status: 'operational', uptime: '100%' },
    { name: 'Documentation', status: 'operational', uptime: '99.99%' }
  ];

  const incidents = [
    {
      date: 'Feb 10, 2026',
      title: 'Brief API Latency',
      status: 'resolved',
      duration: '15 minutes'
    },
    {
      date: 'Feb 5, 2026',
      title: 'Scheduled Maintenance',
      status: 'completed',
      duration: 'Planned'
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
            System Status
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-100"
          >
            Check the status of Infraglide services and infrastructure.
          </motion.p>
        </div>
      </motion.section>

      {/* Overall Status */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">All Systems Operational</h2>
              <p className="text-green-700">All Infraglide services are running normally.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Status */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold mb-8">Service Status</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{service.name}</h3>
                <p className="text-gray-600 text-sm">Uptime: {service.uptime}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-semibold capitalize">{service.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Incident History */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gray-50 w-screen -mx-6 px-6 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{incident.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{incident.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-green-600 capitalize">{incident.status}</span>
                    <p className="text-gray-600 text-sm mt-2">Duration: {incident.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
