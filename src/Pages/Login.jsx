import { useState } from 'react';
import { User, Shield } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, role });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Login Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600 mb-8">
                Sign in to access your community feedback platform
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Role
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setRole('user')}
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        role === 'user'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <User className="w-5 h-5" />
                      <span className="font-medium">User</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('admin')}
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        role === 'admin'
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Admin</span>
                    </button>
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all ${
                    role === 'admin'
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    role === 'admin' ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
                  }`}
                >
                  Sign In as {role === 'admin' ? 'Admin' : 'User'}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 flex items-center justify-center hidden lg:block">
            <div className="max-w-md">
              <img
                src="login2.png"
                alt="Community Feedback Platform"
                className="w-auto h-auto rounded-2xl shadow-2xl"
              />
              {/* <div className="mt-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Connect with Your Community</h2>
                <p className="text-blue-100">
                  Share feedback, engage with ideas, and build a better experience together.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}