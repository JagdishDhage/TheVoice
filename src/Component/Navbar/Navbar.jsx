import { useState } from 'react';
import { Menu, LogOut, Settings, Activity, ChevronDown, Mail, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../../assets/Logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    hover: { 
      scale: 1.05,
      color: "#3B82F6",
      transition: { duration: 0.2 }
    }
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        staggerChildren: 0.05
      }
    }
  };
  
  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05 
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const logoVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.nav 
      className="bg-white dark:bg-gray-900 w-full shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand Name - Left Side */}
          <motion.div 
            className="flex items-center"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <a href="#" className="flex-shrink-0 flex items-center space-x-2">
              <motion.img 
                className="h-10 w-10 rounded-full shadow-md"
                src={img}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                alt="Logo"
              />
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                The Voice
              </motion.span>
            </a>
          </motion.div>
          
          {/* Center section - can be used for search or other centered elements */}
          <div className="hidden md:flex flex-1 justify-center">
            {/* Center content goes here if needed */}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
          
          {/* Desktop menu - Right Side */}
          <motion.div 
            className="hidden md:flex md:items-center md:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.a
              href="/dashboard"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center transition-all duration-200 ease-in-out"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Activity className="mr-1.5 h-4 w-4" />
              Dashboard
            </motion.a>
            
            <motion.a
              href="/settings"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center transition-all duration-200 ease-in-out"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Settings className="mr-1.5 h-4 w-4" />
              Settings
            </motion.a>
            
            {/* Dropdown */}
            <div className="relative">
              <motion.button
                onClick={toggleDropdown}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center transition-all duration-200 ease-in-out"
                aria-expanded={isDropdownOpen}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                Collections
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="ml-1.5 h-4 w-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10 overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -5, transition: { duration: 0.2 } }}
                  >
                    <motion.a
                      href="/unsolve"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150"
                      variants={navItemVariants}
                      whileHover={{ backgroundColor: "#EFF6FF", x: 5 }}
                    >
                      Unsolved Issues
                    </motion.a>
                    <motion.a
                      href="/solve"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150"
                      variants={navItemVariants}
                      whileHover={{ backgroundColor: "#EFF6FF", x: 5 }}
                    >
                      Solved Issues
                    </motion.a>
                    <motion.a
                      href="/spam"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150"
                      variants={navItemVariants}
                      whileHover={{ backgroundColor: "#EFF6FF", x: 5 }}
                    >
                      Spam Issues
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.a
              href="/logout"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center transition-all duration-200 ease-in-out"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, color: "#EF4444" }}
            >
              <LogOut className="mr-1.5 h-4 w-4" />
              Logout
            </motion.a>

            {/* New notification icon with badge */}
            <motion.div 
              className="relative"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.button
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile menu - Sliding panel for small screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.a
                href="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150 flex items-center"
                variants={navItemVariants}
                whileHover={{ x: 5, backgroundColor: "#F3F4F6" }}
              >
                <Activity className="mr-2 h-5 w-5" />
                Dashboard
              </motion.a>
              <motion.a
                href="/settings"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150 flex items-center"
                variants={navItemVariants}
                whileHover={{ x: 5, backgroundColor: "#F3F4F6" }}
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </motion.a>
              
              {/* Mobile dropdown */}
              <div>
                <motion.button
                  onClick={toggleDropdown}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150"
                  variants={navItemVariants}
                  whileHover={{ x: 5, backgroundColor: "#F3F4F6" }}
                >
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Collections
                  </div>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-1 h-5 w-5" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      className="pl-4 mt-1 space-y-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href="/unsolve"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150 border-l-2 border-gray-200 dark:border-gray-700"
                        variants={navItemVariants}
                        whileHover={{ x: 5, borderColor: "#3B82F6" }}
                      >
                        Unsolved Issues
                      </motion.a>
                      <motion.a
                        href="/solve"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150 border-l-2 border-gray-200 dark:border-gray-700"
                        variants={navItemVariants}
                        whileHover={{ x: 5, borderColor: "#3B82F6" }}
                      >
                        Solved Issues
                      </motion.a>
                      <motion.a
                        href="/spam"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150 border-l-2 border-gray-200 dark:border-gray-700"
                        variants={navItemVariants}
                        whileHover={{ x: 5, borderColor: "#3B82F6" }}
                      >
                        Spam Issues
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.a
                href="/logout"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 flex items-center"
                variants={navItemVariants}
                whileHover={{ x: 5, backgroundColor: "#FEF2F2" }}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}