import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-crypto-blue/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crypto-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[60px]">
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <path
                    d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
                    fill="white"
                  />
                  <path
                    d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
                    fill="white"
                  />
                  <path
                    d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-inter font-semibold text-lg tracking-[0.72px]">
                CRAPPO
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-[32px]">
              <Link
                to="/products"
                className="font-rubik text-base text-white hover:text-crypto-grey transition-colors"
              >
                Products
              </Link>
              <Link
                to="/features"
                className="font-rubik text-base text-white hover:text-crypto-grey transition-colors"
              >
                Features
              </Link>
              <Link
                to="/about"
                className="font-rubik text-base text-white hover:text-crypto-grey transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-rubik text-base text-white hover:text-crypto-grey transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/login"
                className="font-rubik font-medium text-base text-crypto-blue"
              >
                Login
              </Link>
              <div className="w-px h-6 bg-white opacity-30"></div>
              <Link
                to="/register"
                className="px-8 py-[14px] bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl font-rubik font-medium text-base text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-16">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-4">
              Welcome Back
            </h1>
            <p className="font-rubik text-lg text-crypto-grey">
              Sign in to your account to continue
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-rubik font-medium text-sm text-white"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-crypto-grey" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 bg-white/5 border-white/20 text-white placeholder:text-crypto-grey focus:border-crypto-blue focus:ring-crypto-blue"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block font-rubik font-medium text-sm text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-crypto-grey" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-12 pr-12 bg-white/5 border-white/20 text-white placeholder:text-crypto-grey focus:border-crypto-blue focus:ring-crypto-blue"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-crypto-grey hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  to="#"
                  className="font-rubik text-sm text-crypto-blue hover:text-blue-400 transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-crypto-blue hover:bg-blue-600 text-white font-rubik font-medium py-3 rounded-xl transition-colors"
                size="lg"
              >
                Sign In
              </Button>
            </form>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="font-rubik text-crypto-grey">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-crypto-blue hover:text-blue-400 transition-colors font-medium"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
