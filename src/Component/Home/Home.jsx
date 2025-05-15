import { useState, useEffect } from 'react';
import { Activity, AlertCircle, CheckCircle, Award, ChevronRight, Search, Filter, RefreshCw, BarChart2, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  // Sample data for the dashboard
  const [stats, setStats] = useState({
    totalReports: 128,
    unsolvedCount: 43,
    solvedCount: 75,
    spamCount: 10,
    recentActivity: 12
  });
  
  const [issues, setIssues] = useState([
    {
      id: 1,
      description: "Suspicious activity reported near Central Park",
      imageurl: "https://media.nbcnewyork.com/2024/11/central-park-police-activity.png?fit=1920%2C1080&quality=85&strip=all&w=1175&h=661&crop=1",
      location: "Central Park, Block 4",
      date: "2025-05-12",
      priority: "high",
      category: "Theft"
    },
    {
      id: 2,
      description: "Vandalism at Downtown Metro Station",
      imageurl: "https://img.freepik.com/premium-photo/view-train-road_1048944-29787751.jpg?semt=ais_hybrid&w=740",
      location: "Metro Station, West Avenue",
      date: "2025-05-11",
      priority: "medium",
      category: "Vandalism"
    },
    {
      id: 3,
      description: "Noise complaint from Highland Residences",
      imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZlUw3kBOiHTj6-DGuSplgLHb9cXzY7ToOg&s",
      location: "Highland Residences, Block 7",
      date: "2025-05-10",
      priority: "low",
      category: "Disturbance"
    }
  ]);

  const [solveIssues, setSolveIssues] = useState([
    {
      id: 101,
      description: "Hit and run case solved with CCTV footage",
      imageurl: "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1200x900/vasant-kunj-hit-and-run-case_202505920689.jpeg",
      location: "Main Street Junction",
      date: "2025-05-08",
      resolutionDate: "2025-05-14",
      category: "Traffic"
    },
    {
      id: 102,
      description: "Shoplifting case resolved at North Mall",
      imageurl: "https://www.hindustantimes.com/ht-img/img/2024/04/18/550x309/GLb6snSW4AAvrcD_1713455472463_1713455479640.jpg",
      location: "North Mall, East Wing",
      date: "2025-05-05",
      resolutionDate: "2025-05-13",
      category: "Theft"
    }
  ]);

  const [spamIssues, setSpamIssues] = useState([
    {
      id: 201,
      description: "Duplicate report of graffiti already filed",
      imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2BhEObWzWz1Q3OSyRH9s8-o4oQK1KH_YIw&s",
      date: "2025-05-09",
      category: "Duplicate"
    }
  ]);

  // Mock loading state for demonstration
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Priority badge color mapping
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-blue-100 text-blue-800"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardHoverVariants = {
    hover: { 
      scale: 1.02, 
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
      transition: { type: "spring", stiffness: 300 } 
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Dashboard Header */}
      <motion.div 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-indigo-900">Admin Dashboard</h1>
              <p className="text-indigo-500 mt-1">Crime Reporting System Management</p>
            </motion.div>
            <motion.div 
              className="mt-4 md:mt-0 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-indigo-400" />
                </div>
                <input 
                  type="text" 
                  className="bg-gray-100 block w-full pl-10 pr-3 py-2 border border-indigo-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Search reports..." 
                />
              </div>
              <motion.button 
                className="ml-3 inline-flex items-center px-3 py-2 border border-indigo-300 shadow-sm text-sm leading-4 font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </motion.button>
              <motion.button 
                className="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Stats Cards */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Reports */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm p-6 flex items-center justify-between border-l-4 border-blue-600"
            variants={itemVariants}
            whileHover={cardHoverVariants.hover}
          >
            <div>
              <p className="text-sm font-medium text-gray-500">Total Reports</p>
              <motion.p 
                className="text-2xl font-bold text-gray-900 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {stats.totalReports}
              </motion.p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                +4% <span className="ml-1 text-gray-500">since last week</span>
              </p>
            </div>
            <motion.div 
              className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center"
              variants={pulseVariants}
              animate="pulse"
            >
              <BarChart2 className="h-6 w-6 text-blue-600" />
            </motion.div>
          </motion.div>
          
          {/* Unsolved Reports */}
          <motion.div 
            className="bg-gradient-to-br from-white to-red-50 rounded-lg shadow-sm p-6 flex items-center justify-between border-l-4 border-red-500"
            variants={itemVariants}
            whileHover={cardHoverVariants.hover}
          >
            <div>
              <p className="text-sm font-medium text-gray-500">Unsolved Reports</p>
              <motion.p 
                className="text-2xl font-bold text-gray-900 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {stats.unsolvedCount}
              </motion.p>
              <p className="text-xs text-red-600 mt-1 flex items-center">
                +2% <span className="ml-1 text-gray-500">requires attention</span>
              </p>
            </div>
            <motion.div 
              className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center"
              variants={pulseVariants}
              animate="pulse"
            >
              <AlertCircle className="h-6 w-6 text-red-500" />
            </motion.div>
          </motion.div>
          
          {/* Solved Reports */}
          <motion.div 
            className="bg-gradient-to-br from-white to-green-50 rounded-lg shadow-sm p-6 flex items-center justify-between border-l-4 border-green-500"
            variants={itemVariants}
            whileHover={cardHoverVariants.hover}
          >
            <div>
              <p className="text-sm font-medium text-gray-500">Solved Reports</p>
              <motion.p 
                className="text-2xl font-bold text-gray-900 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {stats.solvedCount}
              </motion.p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                +6% <span className="ml-1 text-gray-500">this month</span>
              </p>
            </div>
            <motion.div 
              className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center"
              variants={pulseVariants}
              animate="pulse"
            >
              <CheckCircle className="h-6 w-6 text-green-500" />
            </motion.div>
          </motion.div>
          
          {/* Spam Reports */}
          <motion.div 
            className="bg-gradient-to-br from-white to-yellow-50 rounded-lg shadow-sm p-6 flex items-center justify-between border-l-4 border-yellow-500"
            variants={itemVariants}
            whileHover={cardHoverVariants.hover}
          >
            <div>
              <p className="text-sm font-medium text-gray-500">Spam Reports</p>
              <motion.p 
                className="text-2xl font-bold text-gray-900 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {stats.spamCount}
              </motion.p>
              <p className="text-xs text-gray-600 mt-1 flex items-center">
                -2% <span className="ml-1 text-gray-500">since last week</span>
              </p>
            </div>
            <motion.div 
              className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center"
              variants={pulseVariants}
              animate="pulse"
            >
              <Award className="h-6 w-6 text-yellow-500" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Unsolved Issues Section */}
      <motion.section 
        id="unsolve" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-indigo-900 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              Unsolved Issues
            </h2>
            <motion.a 
              href="/details-unsolve" 
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              whileHover={{ x: 3 }}
            >
              View All Unsolved Issues
              <ChevronRight className="h-4 w-4 ml-1" />
            </motion.a>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <motion.div 
                className="rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {issues.map((issue, index) => (
                <motion.div 
                  key={issue.id} 
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  variants={itemVariants}
                  whileHover={cardHoverVariants.hover}
                  custom={index}
                >
                  <div className="relative">
                    <img src={issue.imageurl} className="w-full h-48 object-cover" alt="Issue" />
                    <div className="absolute top-2 right-2">
                      <motion.span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[issue.priority]}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)} Priority
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {issue.date}
                      <span className="mx-2">•</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {issue.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-indigo-900 mb-2">{issue.description}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {issue.location}
                    </div>
                    <div className="mt-4 flex justify-between">
                      <motion.button 
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Take Action
                      </motion.button>
                      <motion.button 
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
      
      {/* Solved Issues Section */}
      <motion.section 
        id="solveIssues" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-indigo-900 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Solved Issues
            </h2>
            <motion.a 
              href="/details-solve" 
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              whileHover={{ x: 3 }}
            >
              View All Solved Issues
              <ChevronRight className="h-4 w-4 ml-1" />
            </motion.a>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <motion.div 
                className="rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {solveIssues.map((issue, index) => (
                <motion.div 
                  key={issue.id} 
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  variants={itemVariants}
                  whileHover={cardHoverVariants.hover}
                  custom={index}
                >
                  <div className="relative">
                    <img src={issue.imageurl} className="w-full h-48 object-cover" alt="Issue" />
                    <div className="absolute top-2 right-2">
                      <motion.span 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Resolved
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {issue.date}
                      <span className="mx-2">•</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {issue.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-indigo-900 mb-2">{issue.description}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {issue.location}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium text-green-600">Resolved on:</span> {issue.resolutionDate}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <motion.button 
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
      
      {/* Spam Issues Section */}
      <motion.section 
        id="spamIssues" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-indigo-900 flex items-center">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              Spam Issues
            </h2>
            <motion.a 
              href="/Spam-details" 
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              whileHover={{ x: 3 }}
            >
              View All Spam Issues
              <ChevronRight className="h-4 w-4 ml-1" />
            </motion.a>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <motion.div 
                className="rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {spamIssues.map((issue, index) => (
                <motion.div 
                  key={issue.id} 
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  variants={itemVariants}
                  whileHover={cardHoverVariants.hover}
                  custom={index}
                >
                  <div className="relative">
                    <img src={issue.imageurl} className="w-full h-48 object-cover" alt="Issue" />
                    <div className="absolute top-2 right-2">
                      <motion.span 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Spam
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {issue.date}
                      <span className="mx-2">•</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {issue.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-indigo-900 mb-2">{issue.description}</h3>
                    <div className="mt-4 flex justify-between">
                      <motion.button 
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Review
                      </motion.button>
                      <motion.button 
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}