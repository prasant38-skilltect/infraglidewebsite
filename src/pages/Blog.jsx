import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Infrastructure as Code',
      excerpt: 'Learn the fundamentals of Infrastructure as Code and how Infraglide simplifies the process.',
      date: 'Feb 15, 2026',
      author: 'Manish Sharma'
    },
    {
      id: 2,
      title: 'Best Practices for Cloud Security',
      excerpt: 'Discover the top security practices for managing your cloud infrastructure safely.',
      date: 'Feb 10, 2026',
      author: 'XXXX-XXXX'
    },
    {
      id: 3,
      title: 'Scaling Your Infrastructure: A Complete Guide',
      excerpt: 'Everything you need to know about horizontal and vertical scaling with Infraglide.',
      date: 'Feb 5, 2026',
      author: 'XXXX-XXXX'
    },
    {
      id: 4,
      title: 'DevOps Trends in 2026',
      excerpt: 'Explore the latest trends shaping the DevOps landscape this year.',
      date: 'Jan 28, 2026',
      author: 'XXXX-XXXX'
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
            Infraglide Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-100"
          >
            Insights, tutorials, and best practices for infrastructure management.
          </motion.p>
        </div>
      </motion.section>

      {/* Blog Posts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date} by {post.author}</span>
                  <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
