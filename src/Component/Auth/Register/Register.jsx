import { useState } from "react";
import { Image, Eye, EyeOff } from "lucide-react";

// Dummy auth hook (replace with actual implementation)
const useAuth = () => {
  const register = (name, userId, password) => {
    console.log("Registering with:", name, userId, password);
    alert("Registration logic would go here");
  };

  return { register };
};

export default function RegisterComponent() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("Please enter your name");
    if (!userId.trim()) return alert("Please enter User ID");
    if (!password.trim()) return alert("Please enter password");

    register(name, userId, password);
    setName("");
    setUserId("");
    setPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="p-8 flex flex-col items-center bg-gradient-to-r from-blue-500 to-cyan-400">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg mb-6">
              <Image size={40} color="#3B82F6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-blue-100 text-sm">Register to start your journey</p>
          </div>

          {/* Form */}
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-900 placeholder-gray-400 outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* User ID */}
              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                  User ID
                </label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-900 placeholder-gray-400 outline-none transition"
                  placeholder="Choose a user ID"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-900 placeholder-gray-400 outline-none transition"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Register
              </button>

              {/* Login Link */}
              <div className="text-center text-sm text-gray-600 mt-2">
                Already have an account?{" "}
                <a href="#" className="font-medium text-blue-500 hover:text-blue-700">
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
