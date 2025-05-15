import { useState } from "react";
import { Image, Eye, EyeOff } from "lucide-react";

// This would come from your auth context/service in a real application
const useAuth = () => {
  const login = (id, password) => {
    // Implementation would connect to your auth service
    console.log("Logging in with:", id, password);
    alert("Login functionality would connect to your auth service");
  };

  return { login };
};

export default function LoginComponent() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === "") {
      alert("Please enter ID");
      return;
    }

    if (password === "") {
      alert("Please enter password");
      return;
    }

    login(id, password);
    setId("");
    setPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
   <>
    <div className=" flex items-center min-h-screen w-screen overflow-hidden  justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Logo and header */}
          <div className="p-8 flex flex-col items-center bg-gradient-to-r from-blue-500 to-cyan-400">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg mb-6">
              <Image size={40} color="#3B82F6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-blue-100 text-sm mb-2">Sign in to continue to your account</p>
          </div>

          {/* Form */}
          <div className="px-8 py-6">
            <div className="space-y-5">
              {/* User ID field */}
              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                  User ID
                </label>
                <input
                  id="userId"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-900 placeholder-gray-400 outline-none transition"
                  placeholder="Enter your user ID"
                />
              </div>

              {/* Password field */}
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
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex justify-end mt-1">
                  <a href="#" className="text-xs text-blue-500 hover:text-blue-700 transition">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Login button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Sign In
              </button>

              {/* Sign up link */}
              <div className="text-center text-sm text-gray-600 mt-2">
                Don't have an account?{" "}
                <a href="#" className="font-medium text-blue-500 hover:text-blue-700">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}