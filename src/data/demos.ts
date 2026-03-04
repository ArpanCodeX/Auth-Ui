export interface Demo {
  id: string;
  name: string;
  type: "Login" | "Register" | "Forgot Password" | "OTP";
  style: "Minimal" | "Glassmorphism" | "Card-based" | "Split-screen" | "Animated";
  htmlCode: string;
  reactCode: string;
  preview: string;
}

export const demos: Demo[] = [
  // LOGIN DEMOS
  {
    id: "login-minimal",
    name: "Minimal Login",
    type: "Login",
    style: "Minimal",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm scale-75"><div class="space-y-2"><div class="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-6 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-6 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-6 bg-indigo-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minimal Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <!-- Logo -->
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-slate-900">Welcome back</h1>
      <p class="text-slate-500 mt-2">Sign in to your account</p>
    </div>
    
    <!-- Form -->
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input 
          type="email" 
          class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
          placeholder="you@example.com"
        >
      </div>
      
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
        <input 
          type="password" 
          class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
          placeholder="••••••••"
        >
      </div>
      
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-200">
          <span class="text-sm text-slate-600">Remember me</span>
        </label>
        <a href="#" class="text-sm text-indigo-500 hover:text-indigo-600">Forgot password?</a>
      </div>
      
      <button 
        type="submit" 
        class="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
      >
        Sign in
      </button>
    </form>
    
    <p class="text-center mt-6 text-slate-500">
      Don't have an account? <a href="#" class="text-indigo-500 hover:text-indigo-600 font-medium">Sign up</a>
    </p>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function MinimalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-slate-500 mt-2">Sign in to your account</p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-200"
              />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
          >
            Sign in
          </button>
        </form>
        
        <p className="text-center mt-6 text-slate-500">
          Don't have an account? <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "login-glass",
    name: "Glassmorphism Login",
    type: "Login",
    style: "Glassmorphism",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 scale-75"><div class="space-y-2"><div class="h-2 w-16 bg-white/40 rounded"></div><div class="h-6 bg-white/20 rounded"></div><div class="h-6 bg-white/20 rounded"></div><div class="h-6 bg-violet-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    }
    .glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body class="gradient-bg min-h-screen flex items-center justify-center p-4">
  <div class="glass w-full max-w-md rounded-3xl p-8 shadow-2xl">
    <!-- Logo -->
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-white">Welcome Back</h1>
      <p class="text-white/70 mt-2">Sign in to continue</p>
    </div>
    
    <!-- Form -->
    <form class="space-y-5">
      <div>
        <input 
          type="email" 
          class="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
          placeholder="Email address"
        >
      </div>
      
      <div>
        <input 
          type="password" 
          class="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
          placeholder="Password"
        >
      </div>
      
      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2 cursor-pointer text-white/80">
          <input type="checkbox" class="w-4 h-4 rounded bg-white/10 border-white/20">
          <span>Remember me</span>
        </label>
        <a href="#" class="text-white hover:text-white/80">Forgot password?</a>
      </div>
      
      <button 
        type="submit" 
        class="w-full py-4 px-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg"
      >
        Sign In
      </button>
      
      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-white/20"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-4 text-white/60 bg-transparent">or continue with</span>
        </div>
      </div>
      
      <div class="grid grid-cols-3 gap-3">
        <button type="button" class="py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
          <svg class="w-5 h-5 mx-auto text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        </button>
        <button type="button" class="py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
          <svg class="w-5 h-5 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </button>
        <button type="button" class="py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
          <svg class="w-5 h-5 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </button>
      </div>
    </form>
    
    <p class="text-center mt-8 text-white/70">
      Don't have an account? <a href="#" class="text-white font-semibold hover:underline">Sign up</a>
    </p>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function GlassmorphismLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-400">
      <div className="w-full max-w-md rounded-3xl p-8 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/70 mt-2">Sign in to continue</p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
            placeholder="Email address"
          />
          
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40 outline-none transition-all"
            placeholder="Password"
          />
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-white/80">
              <input type="checkbox" className="w-4 h-4 rounded bg-white/10 border-white/20" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-white hover:text-white/80">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-4 px-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-center mt-8 text-white/70">
          Don't have an account? <a href="#" className="text-white font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "login-split",
    name: "Split Screen Login",
    type: "Login",
    style: "Split-screen",
    preview: `<div class="w-full max-w-[200px] flex rounded-lg overflow-hidden scale-75"><div class="w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 p-2"><div class="h-full flex items-center justify-center"><div class="w-8 h-8 rounded-full bg-white/30"></div></div></div><div class="w-1/2 bg-white dark:bg-slate-900 p-2"><div class="space-y-1"><div class="h-2 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-4 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-4 bg-indigo-500 rounded"></div></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Split Screen Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen flex">
  <!-- Left Panel - Branding -->
  <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
      <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h1 class="text-4xl font-bold mb-4">Welcome Back!</h1>
      <p class="text-xl text-white/80 text-center max-w-md">Sign in to access your dashboard and manage your projects with ease.</p>
      
      <!-- Testimonial -->
      <div class="mt-16 p-6 bg-white/10 backdrop-blur-xl rounded-2xl max-w-md">
        <p class="text-white/90 italic">"This platform has transformed how we manage our team projects. Highly recommended!"</p>
        <div class="mt-4 flex items-center gap-3">
          <div class="w-10 h-10 bg-white/20 rounded-full"></div>
          <div>
            <p class="font-semibold">Sarah Johnson</p>
            <p class="text-sm text-white/70">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Panel - Login Form -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
    <div class="w-full max-w-md">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Sign in</h2>
        <p class="text-gray-500 mt-2">Enter your credentials to access your account</p>
      </div>
      
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
            placeholder="name@company.com"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
            placeholder="••••••••"
          >
        </div>
        
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-200">
            <span class="text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" class="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Forgot password?</a>
        </div>
        
        <button type="submit" class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200">
          Sign in
        </button>
        
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">or continue with</span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
            <svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span class="text-gray-700 font-medium">Google</span>
          </button>
          <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span class="text-gray-700 font-medium">GitHub</span>
          </button>
        </div>
      </form>
      
      <p class="text-center mt-8 text-gray-500">
        Don't have an account? <a href="#" class="text-indigo-600 hover:text-indigo-700 font-semibold">Create one</a>
      </p>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function SplitScreenLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-xl text-white/80 text-center max-w-md">Sign in to access your dashboard and manage your projects with ease.</p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
            <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200">
              Sign in
            </button>
          </form>
          
          <p className="text-center mt-8 text-gray-500">
            Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "login-animated",
    name: "Animated Gradient Login",
    type: "Login",
    style: "Animated",
    preview: `<div class="w-full max-w-[200px] p-4 bg-slate-900 rounded-lg scale-75 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 animate-pulse"></div><div class="relative space-y-2"><div class="h-2 w-16 bg-white/30 rounded"></div><div class="h-6 bg-white/10 rounded border border-white/20"></div><div class="h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Gradient Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    .animate-gradient {
      background-size: 400% 400%;
      animation: gradient 8s ease infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float 6s ease-in-out infinite;
      animation-delay: -3s;
    }
  </style>
</head>
<body class="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
  <!-- Animated Background -->
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
  </div>

  <!-- Login Card -->
  <div class="relative z-10 w-full max-w-md">
    <div class="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-4 shadow-lg shadow-purple-500/30">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-white">Welcome back</h1>
        <p class="text-slate-400 mt-2">Enter your credentials to continue</p>
      </div>
      
      <!-- Form -->
      <form class="space-y-5">
        <div class="group">
          <label class="block text-sm font-medium text-slate-300 mb-2">Email</label>
          <div class="relative">
            <input 
              type="email" 
              class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
              placeholder="name@email.com"
            >
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-focus-within:opacity-100 -z-10 blur transition-opacity"></div>
          </div>
        </div>
        
        <div class="group">
          <label class="block text-sm font-medium text-slate-300 mb-2">Password</label>
          <div class="relative">
            <input 
              type="password" 
              class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
              placeholder="••••••••"
            >
          </div>
        </div>
        
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-300">
            <input type="checkbox" class="w-4 h-4 rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-cyan-500/20">
            <span>Remember me</span>
          </label>
          <a href="#" class="text-cyan-400 hover:text-cyan-300">Forgot password?</a>
        </div>
        
        <button 
          type="submit" 
          class="relative w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-purple-500/30"
        >
          <span class="relative z-10">Sign in</span>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
        
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-slate-900/80 text-slate-500">or continue with</span>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-3">
          <button type="button" class="py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all group">
            <svg class="w-5 h-5 mx-auto text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          </button>
          <button type="button" class="py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all group">
            <svg class="w-5 h-5 mx-auto text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </button>
          <button type="button" class="py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all group">
            <svg class="w-5 h-5 mx-auto text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
        </div>
      </form>
      
      <p class="text-center mt-8 text-slate-400">
        Don't have an account? <a href="#" class="text-cyan-400 hover:text-cyan-300 font-semibold">Sign up</a>
      </p>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function AnimatedGradientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient bg-400%" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-4 shadow-lg shadow-purple-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="text-slate-400 mt-2">Enter your credentials to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                placeholder="name@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit" 
              className="relative w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-purple-500/30"
            >
              <span className="relative z-10">Sign in</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
          
          <p className="text-center mt-8 text-slate-400">
            Don't have an account? <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "login-neon",
    name: "Neon Dark Login",
    type: "Login",
    style: "Animated",
    preview: `<div class="w-full max-w-[200px] p-4 bg-black rounded-lg scale-75 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"><div class="space-y-2"><div class="h-2 w-16 bg-cyan-500/30 rounded"></div><div class="h-6 bg-slate-900 rounded border border-cyan-500/30"></div><div class="h-6 bg-cyan-500 rounded shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Dark Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .neon-border {
      box-shadow: 0 0 5px theme('colors.cyan.400'),
                  0 0 20px theme('colors.cyan.400'),
                  inset 0 0 5px theme('colors.cyan.400');
    }
    .neon-text {
      text-shadow: 0 0 10px theme('colors.cyan.400'),
                   0 0 20px theme('colors.cyan.400'),
                   0 0 30px theme('colors.cyan.400');
    }
    .neon-glow {
      box-shadow: 0 0 20px theme('colors.cyan.400'),
                  0 0 40px theme('colors.cyan.400');
    }
    @keyframes flicker {
      0%, 100% { opacity: 1; }
      41.99% { opacity: 1; }
      42% { opacity: 0.8; }
      43% { opacity: 1; }
      45% { opacity: 0.3; }
      46% { opacity: 1; }
    }
    .animate-flicker {
      animation: flicker 5s infinite;
    }
  </style>
</head>
<body class="min-h-screen bg-black flex items-center justify-center p-4">
  <!-- Grid Background -->
  <div class="fixed inset-0 z-0 opacity-20" style="background-image: linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px); background-size: 50px 50px;"></div>
  
  <!-- Login Card -->
  <div class="relative z-10 w-full max-w-md">
    <div class="bg-black/90 border-2 border-cyan-500/50 rounded-2xl p-8 neon-border">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 border-2 border-cyan-400 rounded-full mb-4 neon-border animate-flicker">
          <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-cyan-400 neon-text tracking-wider">ACCESS</h1>
        <p class="text-cyan-600 mt-2 font-mono text-sm">// ENTER CREDENTIALS</p>
      </div>
      
      <!-- Form -->
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-mono text-cyan-500 mb-2 uppercase tracking-wider">User_ID</label>
          <input 
            type="email" 
            class="w-full px-4 py-3 bg-black border-2 border-cyan-900 rounded-lg text-cyan-400 placeholder-cyan-800 font-mono focus:border-cyan-500 focus:ring-0 outline-none transition-all"
            placeholder="user@system.net"
          >
        </div>
        
        <div>
          <label class="block text-sm font-mono text-cyan-500 mb-2 uppercase tracking-wider">Password</label>
          <input 
            type="password" 
            class="w-full px-4 py-3 bg-black border-2 border-cyan-900 rounded-lg text-cyan-400 placeholder-cyan-800 font-mono focus:border-cyan-500 focus:ring-0 outline-none transition-all"
            placeholder="••••••••••"
          >
        </div>
        
        <div class="flex items-center justify-between text-sm font-mono">
          <label class="flex items-center gap-2 cursor-pointer text-cyan-600">
            <input type="checkbox" class="w-4 h-4 bg-black border-2 border-cyan-900 rounded text-cyan-500 focus:ring-0">
            <span>REMEMBER</span>
          </label>
          <a href="#" class="text-cyan-500 hover:text-cyan-400 hover:underline">RECOVER?</a>
        </div>
        
        <button 
          type="submit" 
          class="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono uppercase tracking-widest rounded-lg transition-all neon-glow hover:shadow-[0_0_30px_theme('colors.cyan.400'),0_0_60px_theme('colors.cyan.400')]"
        >
          Initialize
        </button>
        
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t-2 border-cyan-900"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-black text-cyan-700 font-mono">OR_CONNECT_VIA</span>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-3">
          <button type="button" class="py-3 bg-black border-2 border-cyan-900 hover:border-cyan-500 rounded-lg transition-all group">
            <svg class="w-5 h-5 mx-auto text-cyan-700 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          </button>
          <button type="button" class="py-3 bg-black border-2 border-cyan-900 hover:border-cyan-500 rounded-lg transition-all group">
            <svg class="w-5 h-5 mx-auto text-cyan-700 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </button>
          <button type="button" class="py-3 bg-black border-2 border-cyan-900 hover:border-cyan-500 rounded-lg transition-all group">
            <svg class="w-5 h-5 mx-auto text-cyan-700 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
        </div>
      </form>
      
      <p class="text-center mt-8 text-cyan-700 font-mono text-sm">
        NEW_USER? <a href="#" class="text-cyan-500 hover:text-cyan-400 hover:underline">REGISTER_NOW</a>
      </p>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function NeonDarkLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      {/* Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }} 
      />
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-black/90 border-2 border-cyan-500/50 rounded-2xl p-8 shadow-[0_0_5px_theme(colors.cyan.400),0_0_20px_theme(colors.cyan.400),inset_0_0_5px_theme(colors.cyan.400)]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-cyan-400 rounded-full mb-4 shadow-[0_0_5px_theme(colors.cyan.400),0_0_20px_theme(colors.cyan.400)]">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-cyan-400 tracking-wider" style={{ textShadow: '0 0 10px rgb(34 211 238), 0 0 20px rgb(34 211 238)' }}>ACCESS</h1>
            <p className="text-cyan-600 mt-2 font-mono text-sm">// ENTER CREDENTIALS</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-mono text-cyan-500 mb-2 uppercase tracking-wider">User_ID</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black border-2 border-cyan-900 rounded-lg text-cyan-400 placeholder-cyan-800 font-mono focus:border-cyan-500 focus:ring-0 outline-none transition-all"
                placeholder="user@system.net"
              />
            </div>
            
            <div>
              <label className="block text-sm font-mono text-cyan-500 mb-2 uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black border-2 border-cyan-900 rounded-lg text-cyan-400 placeholder-cyan-800 font-mono focus:border-cyan-500 focus:ring-0 outline-none transition-all"
                placeholder="••••••••••"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_theme(colors.cyan.400),0_0_40px_theme(colors.cyan.400)] hover:shadow-[0_0_30px_theme(colors.cyan.400),0_0_60px_theme(colors.cyan.400)]"
            >
              Initialize
            </button>
          </form>
          
          <p className="text-center mt-8 text-cyan-700 font-mono text-sm">
            NEW_USER? <a href="#" className="text-cyan-500 hover:text-cyan-400 hover:underline">REGISTER_NOW</a>
          </p>
        </div>
      </div>
    </div>
  );
}`,
  },

  // REGISTER DEMOS
  {
    id: "register-minimal",
    name: "Minimal Register",
    type: "Register",
    style: "Minimal",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm scale-75"><div class="space-y-2"><div class="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-5 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-5 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-5 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-5 bg-emerald-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minimal Register</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-slate-900">Create an account</h1>
      <p class="text-slate-500 mt-2">Start your journey with us today</p>
    </div>
    
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">First name</label>
          <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="John">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Last name</label>
          <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Doe">
        </div>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input type="email" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="you@example.com">
      </div>
      
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
        <input type="password" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="••••••••">
      </div>
      
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
        <input type="password" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="••••••••">
      </div>
      
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" class="w-4 h-4 mt-0.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-200">
        <span class="text-sm text-slate-600">I agree to the <a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium">Terms of Service</a> and <a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</a></span>
      </label>
      
      <button type="submit" class="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors">
        Create account
      </button>
    </form>
    
    <p class="text-center mt-6 text-slate-500">
      Already have an account? <a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium">Sign in</a>
    </p>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function MinimalRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Create an account</h1>
          <p className="text-slate-500 mt-2">Start your journey with us today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First name</label>
              <input 
                type="text" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" 
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last name</label>
              <input 
                type="text" 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" 
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" 
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" 
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors">
            Create account
          </button>
        </form>
        
        <p className="text-center mt-6 text-slate-500">
          Already have an account? <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">Sign in</a>
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "register-glass",
    name: "Glassmorphism Register",
    type: "Register",
    style: "Glassmorphism",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 scale-75"><div class="space-y-2"><div class="h-2 w-20 bg-white/40 rounded"></div><div class="grid grid-cols-2 gap-1"><div class="h-5 bg-white/20 rounded"></div><div class="h-5 bg-white/20 rounded"></div></div><div class="h-5 bg-white/20 rounded"></div><div class="h-5 bg-emerald-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism Register</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-white">Create Account</h1>
      <p class="text-white/80 mt-2">Join our community today</p>
    </div>
    
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <input type="text" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="First name">
        <input type="text" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="Last name">
      </div>
      
      <input type="email" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="Email address">
      <input type="password" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="Password">
      <input type="password" class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="Confirm password">
      
      <label class="flex items-center gap-3 cursor-pointer text-white/90">
        <input type="checkbox" class="w-4 h-4 rounded bg-white/20 border-white/30">
        <span class="text-sm">I agree to the Terms & Privacy Policy</span>
      </label>
      
      <button type="submit" class="w-full py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
        Create Account
      </button>
    </form>
    
    <p class="text-center mt-6 text-white/80">
      Already have an account? <a href="#" class="text-white font-semibold hover:underline">Sign in</a>
    </p>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function GlassmorphismRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <p className="text-white/80 mt-2">Join our community today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" 
              placeholder="First name"
            />
            <input 
              type="text" 
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" 
              placeholder="Last name"
            />
          </div>
          
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" 
            placeholder="Email address"
          />
          <input 
            type="password" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" 
            placeholder="Password"
          />
          
          <button type="submit" className="w-full py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
            Create Account
          </button>
        </form>
        
        <p className="text-center mt-6 text-white/80">
          Already have an account? <a href="#" className="text-white font-semibold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "register-steps",
    name: "Multi-Step Register",
    type: "Register",
    style: "Card-based",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg scale-75"><div class="flex justify-between mb-3"><div class="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">1</div><div class="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700 self-center mx-1"></div><div class="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs">2</div><div class="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700 self-center mx-1"></div><div class="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs">3</div></div><div class="space-y-2"><div class="h-5 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-5 bg-indigo-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Step Register</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
  <div class="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
    <!-- Progress Steps -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">1</div>
        <span class="ml-3 font-medium text-indigo-600">Account</span>
      </div>
      <div class="flex-1 h-1 bg-slate-200 mx-4 rounded">
        <div class="h-full w-0 bg-indigo-600 rounded transition-all"></div>
      </div>
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-semibold">2</div>
        <span class="ml-3 font-medium text-slate-400">Profile</span>
      </div>
      <div class="flex-1 h-1 bg-slate-200 mx-4 rounded"></div>
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-semibold">3</div>
        <span class="ml-3 font-medium text-slate-400">Confirm</span>
      </div>
    </div>
    
    <h2 class="text-2xl font-bold text-slate-900 mb-2">Create your account</h2>
    <p class="text-slate-500 mb-6">Enter your email and create a password</p>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Email address</label>
        <input type="email" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="name@example.com">
      </div>
      
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
        <input type="password" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="Create a strong password">
        <div class="mt-2 flex gap-1">
          <div class="h-1 flex-1 rounded bg-red-400"></div>
          <div class="h-1 flex-1 rounded bg-slate-200"></div>
          <div class="h-1 flex-1 rounded bg-slate-200"></div>
          <div class="h-1 flex-1 rounded bg-slate-200"></div>
        </div>
        <p class="text-xs text-slate-500 mt-1">Use 8+ characters, mix of letters, numbers & symbols</p>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Confirm password</label>
        <input type="password" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="Confirm your password">
      </div>
      
      <div class="flex gap-3 pt-4">
        <button type="button" class="flex-1 py-3 px-4 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-all" disabled>
          Back
        </button>
        <button type="submit" class="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-200">
          Continue
        </button>
      </div>
    </form>
    
    <p class="text-center mt-6 text-slate-500 text-sm">
      Already have an account? <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Sign in</a>
    </p>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function MultiStepRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={\`w-10 h-10 rounded-full flex items-center justify-center font-semibold \${step >= num ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}\`}>
                {num}
              </div>
              {num < 3 && <div className="flex-1 h-1 bg-slate-200 mx-4 rounded" />}
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {step === 1 && 'Create your account'}
          {step === 2 && 'Complete your profile'}
          {step === 3 && 'Review & confirm'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                  placeholder="Create a strong password"
                />
              </div>
            </>
          )}
          
          <div className="flex gap-3 pt-4">
            <button 
              type="button" 
              onClick={() => setStep(Math.max(1, step - 1))}
              className="flex-1 py-3 px-4 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-all"
              disabled={step === 1}
            >
              Back
            </button>
            <button type="submit" className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-200">
              {step === 3 ? 'Create Account' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}`,
  },
  {
    id: "register-split",
    name: "Split Screen Register",
    type: "Register",
    style: "Split-screen",
    preview: `<div class="w-full max-w-[200px] flex rounded-lg overflow-hidden scale-75"><div class="w-1/2 bg-gradient-to-br from-teal-500 to-emerald-600 p-2"><div class="h-full flex items-center justify-center"><div class="w-8 h-8 rounded-full bg-white/30"></div></div></div><div class="w-1/2 bg-white dark:bg-slate-900 p-2"><div class="space-y-1"><div class="h-2 w-10 bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-4 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-4 bg-teal-500 rounded"></div></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Split Screen Register</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen flex">
  <!-- Left Panel -->
  <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 to-emerald-600 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
      <div class="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </div>
      <h1 class="text-4xl font-bold mb-4">Join Us Today</h1>
      <p class="text-xl text-white/80 text-center max-w-md">Create an account and unlock powerful features for your business.</p>
      
      <div class="mt-12 grid grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-3xl font-bold">10K+</div>
          <div class="text-white/70">Users</div>
        </div>
        <div>
          <div class="text-3xl font-bold">99%</div>
          <div class="text-white/70">Uptime</div>
        </div>
        <div>
          <div class="text-3xl font-bold">24/7</div>
          <div class="text-white/70">Support</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Panel -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
    <div class="w-full max-w-md">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Create account</h2>
      <p class="text-gray-500 mb-8">Fill in your details to get started</p>
      
      <form class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" placeholder="John">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" placeholder="Doe">
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" placeholder="name@company.com">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" placeholder="••••••••">
        </div>
        
        <label class="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" class="w-4 h-4 mt-0.5 rounded border-gray-300 text-teal-500 focus:ring-teal-200">
          <span class="text-sm text-gray-600">I agree to the <a href="#" class="text-teal-600 hover:underline">Terms</a> and <a href="#" class="text-teal-600 hover:underline">Privacy Policy</a></span>
        </label>
        
        <button type="submit" class="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-200">
          Create Account
        </button>
      </form>
      
      <p class="text-center mt-8 text-gray-500">
        Already have an account? <a href="#" class="text-teal-600 hover:text-teal-700 font-semibold">Sign in</a>
      </p>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function SplitScreenRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Join Us Today</h1>
          <p className="text-xl text-white/80 text-center max-w-md">Create an account and unlock powerful features.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create account</h2>
          <p className="text-gray-500 mb-8">Fill in your details to get started</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" 
                placeholder="First name"
              />
              <input 
                type="text" 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" 
                placeholder="Last name"
              />
            </div>
            
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" 
              placeholder="Email"
            />
            
            <input 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all" 
              placeholder="Password"
            />
            
            <button type="submit" className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-200">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "register-animated",
    name: "Animated Register",
    type: "Register",
    style: "Animated",
    preview: `<div class="w-full max-w-[200px] p-4 bg-slate-900 rounded-lg scale-75 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 animate-pulse"></div><div class="relative space-y-2"><div class="h-2 w-20 bg-white/30 rounded"></div><div class="h-5 bg-white/10 rounded border border-white/20"></div><div class="h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Register</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
    .animate-gradient { background-size: 400% 400%; animation: gradient 8s ease infinite; }
    .animate-float { animation: float 6s ease-in-out infinite; }
  </style>
</head>
<body class="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-gradient"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
  </div>

  <div class="relative z-10 w-full max-w-md">
    <div class="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mb-4 shadow-lg shadow-purple-500/30">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-white">Create account</h1>
        <p class="text-slate-400 mt-2">Join thousands of users today</p>
      </div>
      
      <form class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <input type="text" class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="First name">
          <input type="text" class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="Last name">
        </div>
        <input type="email" class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="Email address">
        <input type="password" class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="Password">
        
        <button type="submit" class="relative w-full py-3.5 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-purple-500/30">
          <span class="relative z-10">Create Account</span>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </form>
      
      <p class="text-center mt-8 text-slate-400">
        Already have an account? <a href="#" class="text-pink-400 hover:text-pink-300 font-semibold">Sign in</a>
      </p>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function AnimatedRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-gradient bg-400%" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mb-4 shadow-lg shadow-purple-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Create account</h1>
            <p className="text-slate-400 mt-2">Join thousands of users today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="First name" />
              <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="Last name" />
            </div>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="Email address" />
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all" placeholder="Password" />
            
            <button type="submit" className="relative w-full py-3.5 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-purple-500/30">
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`,
  },

  // FORGOT PASSWORD DEMOS
  {
    id: "forgot-minimal",
    name: "Minimal Forgot Password",
    type: "Forgot Password",
    style: "Minimal",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm scale-75"><div class="space-y-2"><div class="w-8 h-8 mx-auto bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center"><div class="w-4 h-4 bg-amber-500 rounded-sm"></div></div><div class="h-2 w-24 mx-auto bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-5 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-5 bg-amber-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forgot Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-slate-900">Forgot password?</h1>
      <p class="text-slate-500 mt-2">No worries, we'll send you reset instructions.</p>
    </div>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input type="email" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Enter your email">
      </div>
      
      <button type="submit" class="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
        Reset password
      </button>
    </form>
    
    <a href="#" class="flex items-center justify-center gap-2 mt-6 text-slate-600 hover:text-slate-800">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Back to login
    </a>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function MinimalForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ email });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Check your email</h1>
          <p className="text-slate-500 mt-2">We sent a password reset link to {email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Forgot password?</h1>
          <p className="text-slate-500 mt-2">No worries, we'll send you reset instructions.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" 
              placeholder="Enter your email"
            />
          </div>
          
          <button type="submit" className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
            Reset password
          </button>
        </form>
        
        <a href="#" className="flex items-center justify-center gap-2 mt-6 text-slate-600 hover:text-slate-800">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to login
        </a>
      </div>
    </div>
  );
}`,
  },
  {
    id: "forgot-glass",
    name: "Glassmorphism Forgot Password",
    type: "Forgot Password",
    style: "Glassmorphism",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 scale-75"><div class="space-y-2"><div class="w-8 h-8 mx-auto bg-white/30 rounded-full"></div><div class="h-2 w-20 mx-auto bg-white/40 rounded"></div><div class="h-5 bg-white/20 rounded"></div><div class="h-5 bg-white rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism Forgot Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-orange-400 via-rose-500 to-purple-500 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-white">Reset Password</h1>
      <p class="text-white/80 mt-2">Enter your email to receive reset instructions</p>
    </div>
    
    <form class="space-y-5">
      <input type="email" class="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="Email address">
      
      <button type="submit" class="w-full py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
        Send Reset Link
      </button>
    </form>
    
    <a href="#" class="flex items-center justify-center gap-2 mt-6 text-white/80 hover:text-white">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Back to login
    </a>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function GlassForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-rose-500 to-purple-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Reset Password</h1>
          <p className="text-white/80 mt-2">Enter your email to receive reset instructions</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 outline-none transition-all" 
            placeholder="Email address"
          />
          
          <button type="submit" className="w-full py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
            Send Reset Link
          </button>
        </form>
        
        <a href="#" className="flex items-center justify-center gap-2 mt-6 text-white/80 hover:text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to login
        </a>
      </div>
    </div>
  );
}`,
  },
  {
    id: "forgot-animated",
    name: "Animated Forgot Password",
    type: "Forgot Password",
    style: "Animated",
    preview: `<div class="w-full max-w-[200px] p-4 bg-slate-900 rounded-lg scale-75 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-20 animate-pulse"></div><div class="relative space-y-2"><div class="w-8 h-8 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div><div class="h-5 bg-white/10 rounded border border-white/20"></div><div class="h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Forgot Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    @keyframes envelope { 0%, 100% { transform: translateY(0) rotate(-5deg); } 50% { transform: translateY(-10px) rotate(5deg); } }
    .animate-gradient { background-size: 400% 400%; animation: gradient 8s ease infinite; }
    .animate-envelope { animation: envelope 3s ease-in-out infinite; }
  </style>
</head>
<body class="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 animate-gradient"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  </div>

  <div class="relative z-10 w-full max-w-md">
    <div class="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4 shadow-lg shadow-orange-500/30 animate-envelope">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-white">Forgot your password?</h1>
        <p class="text-slate-400 mt-2">Don't worry, we've got you covered</p>
      </div>
      
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-2">Email address</label>
          <input type="email" class="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all" placeholder="you@email.com">
        </div>
        
        <button type="submit" class="relative w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-orange-500/30">
          <span class="relative z-10">Send Reset Link</span>
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </form>
      
      <a href="#" class="flex items-center justify-center gap-2 mt-8 text-slate-400 hover:text-amber-400 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to login
      </a>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function AnimatedForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 animate-gradient bg-400%" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4 shadow-lg shadow-orange-500/30 animate-float">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Forgot your password?</h1>
            <p className="text-slate-400 mt-2">Don't worry, we've got you covered</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all" 
                placeholder="you@email.com"
              />
            </div>
            
            <button type="submit" className="relative w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-orange-500/30">
              <span className="relative z-10">Send Reset Link</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "forgot-card",
    name: "Card Forgot Password",
    type: "Forgot Password",
    style: "Card-based",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl scale-75"><div class="space-y-2"><div class="w-10 h-10 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"><div class="w-5 h-4 bg-blue-500 rounded-sm"></div></div><div class="h-2 w-24 mx-auto bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-5 bg-slate-100 dark:bg-slate-800 rounded"></div><div class="h-5 bg-blue-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Forgot Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900">Forgot Password?</h1>
      <p class="text-gray-500 mt-2">Enter your email and we'll send you instructions to reset your password.</p>
    </div>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="name@company.com">
      </div>
      
      <button type="submit" class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-200">
        Send Instructions
      </button>
    </form>
    
    <div class="mt-8 pt-6 border-t border-gray-100 text-center">
      <p class="text-gray-500 text-sm">Remember your password?</p>
      <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">Back to Sign In</a>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState } from 'react';

export default function CardForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password?</h1>
          <p className="text-gray-500 mt-2">Enter your email and we'll send you instructions.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
              placeholder="name@company.com"
            />
          </div>
          
          <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-200">
            Send Instructions
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Back to Sign In</a>
        </div>
      </div>
    </div>
  );
}`,
  },

  // OTP DEMOS
  {
    id: "otp-minimal",
    name: "Minimal OTP",
    type: "OTP",
    style: "Minimal",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm scale-75"><div class="space-y-2"><div class="h-2 w-24 mx-auto bg-slate-200 dark:bg-slate-700 rounded"></div><div class="flex justify-center gap-1"><div class="w-8 h-10 bg-slate-100 dark:bg-slate-800 rounded border-2 border-slate-200 dark:border-slate-700"></div><div class="w-8 h-10 bg-slate-100 dark:bg-slate-800 rounded border-2 border-slate-200 dark:border-slate-700"></div><div class="w-8 h-10 bg-slate-100 dark:bg-slate-800 rounded border-2 border-slate-200 dark:border-slate-700"></div><div class="w-8 h-10 bg-slate-100 dark:bg-slate-800 rounded border-2 border-slate-200 dark:border-slate-700"></div></div><div class="h-5 bg-indigo-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-slate-900">Enter verification code</h1>
      <p class="text-slate-500 mt-2">We sent a code to your email</p>
    </div>
    
    <form class="space-y-6">
      <div class="flex justify-center gap-3">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="0">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="0">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="0">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="0">
      </div>
      
      <button type="submit" class="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors">
        Verify
      </button>
      
      <p class="text-center text-slate-500 text-sm">
        Didn't receive code? <button type="button" class="text-indigo-600 hover:text-indigo-700 font-medium">Resend</button>
      </p>
    </form>
  </div>
</body>
</html>`,
    reactCode: `import { useState, useRef } from 'react';

export default function MinimalOTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP:', otp.join(''));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Enter verification code</h1>
          <p className="text-slate-500 mt-2">We sent a code to your email</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="0"
              />
            ))}
          </div>
          
          <button type="submit" className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}`,
  },
  {
    id: "otp-six-digit",
    name: "6-Digit OTP",
    type: "OTP",
    style: "Card-based",
    preview: `<div class="w-full max-w-[200px] p-3 bg-white dark:bg-slate-900 rounded-xl shadow-lg scale-75"><div class="space-y-2"><div class="h-2 w-20 mx-auto bg-slate-200 dark:bg-slate-700 rounded"></div><div class="flex justify-center gap-0.5"><div class="w-5 h-7 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"></div><div class="w-5 h-7 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"></div><div class="w-5 h-7 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"></div><div class="w-5 h-7 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"></div><div class="w-5 h-7 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"></div><div class="w-5 h-7 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"></div></div><div class="h-4 bg-green-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>6-Digit OTP</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900">Verify your identity</h1>
      <p class="text-gray-500 mt-2">Enter the 6-digit code sent to your phone</p>
      <p class="text-gray-400 text-sm mt-1">+1 *** *** 4589</p>
    </div>
    
    <form class="space-y-6">
      <div class="flex justify-center gap-2">
        <input type="text" maxlength="1" class="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all">
        <input type="text" maxlength="1" class="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all">
        <input type="text" maxlength="1" class="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all">
        <span class="flex items-center text-gray-300">-</span>
        <input type="text" maxlength="1" class="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all">
        <input type="text" maxlength="1" class="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all">
        <input type="text" maxlength="1" class="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all">
      </div>
      
      <div class="text-center text-sm text-gray-500">
        <p>Code expires in <span class="font-semibold text-green-600">02:45</span></p>
      </div>
      
      <button type="submit" class="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-200">
        Verify Code
      </button>
      
      <p class="text-center text-gray-500 text-sm">
        Didn't get the code? <button type="button" class="text-green-600 hover:text-green-700 font-medium">Resend</button>
      </p>
    </form>
  </div>
</body>
</html>`,
    reactCode: `import { useState, useRef, useEffect } from 'react';

export default function SixDigitOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(165);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP:', otp.join(''));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Verify your identity</h1>
          <p className="text-gray-500 mt-2">Enter the 6-digit code sent to your phone</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.slice(0, 3).map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
              />
            ))}
            <span className="flex items-center text-gray-300">-</span>
            {otp.slice(3).map((digit, index) => (
              <input
                key={index + 3}
                ref={(el) => (inputRefs.current[index + 3] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index + 3, e.target.value)}
                className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
              />
            ))}
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>Code expires in <span className="font-semibold text-green-600">{formatTime(timer)}</span></p>
          </div>
          
          <button type="submit" className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-200">
            Verify Code
          </button>
        </form>
      </div>
    </div>
  );
}`,
  },
  {
    id: "otp-glass",
    name: "Glassmorphism OTP",
    type: "OTP",
    style: "Glassmorphism",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 scale-75"><div class="space-y-2"><div class="h-2 w-20 mx-auto bg-white/40 rounded"></div><div class="flex justify-center gap-1"><div class="w-7 h-9 bg-white/20 rounded border border-white/30"></div><div class="w-7 h-9 bg-white/20 rounded border border-white/30"></div><div class="w-7 h-9 bg-white/20 rounded border border-white/30"></div><div class="w-7 h-9 bg-white/20 rounded border border-white/30"></div></div><div class="h-5 bg-white rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism OTP</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-white">Verification</h1>
      <p class="text-white/80 mt-2">Enter the code we sent to your device</p>
    </div>
    
    <form class="space-y-6">
      <div class="flex justify-center gap-3">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="•">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="•">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="•">
        <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:bg-white/30 focus:border-white/50 outline-none transition-all" placeholder="•">
      </div>
      
      <button type="submit" class="w-full py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
        Verify
      </button>
      
      <p class="text-center text-white/80 text-sm">
        Didn't receive code? <button type="button" class="text-white font-semibold hover:underline">Resend</button>
      </p>
    </form>
  </div>
</body>
</html>`,
    reactCode: `import { useState, useRef } from 'react';

export default function GlassOTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP:', otp.join(''));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Verification</h1>
          <p className="text-white/80 mt-2">Enter the code we sent to your device</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-14 h-16 text-center text-2xl font-bold bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:bg-white/30 focus:border-white/50 outline-none transition-all"
                placeholder="•"
              />
            ))}
          </div>
          
          <button type="submit" className="w-full py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}`,
  },
  {
    id: "otp-animated",
    name: "Animated OTP",
    type: "OTP",
    style: "Animated",
    preview: `<div class="w-full max-w-[200px] p-4 bg-slate-900 rounded-lg scale-75 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-20 animate-pulse"></div><div class="relative space-y-2"><div class="flex justify-center gap-1"><div class="w-7 h-9 bg-white/10 rounded border border-green-500/50"></div><div class="w-7 h-9 bg-white/10 rounded border border-green-500/50"></div><div class="w-7 h-9 bg-white/10 rounded border border-green-500/50"></div><div class="w-7 h-9 bg-white/10 rounded border border-green-500/50"></div></div><div class="h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated OTP</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    @keyframes bounce-in { 0% { transform: scale(0.9); opacity: 0; } 50% { transform: scale(1.02); } 100% { transform: scale(1); opacity: 1; } }
    .animate-gradient { background-size: 400% 400%; animation: gradient 8s ease infinite; }
    .animate-bounce-in { animation: bounce-in 0.5s ease-out forwards; }
  </style>
</head>
<body class="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 animate-gradient"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  </div>

  <div class="relative z-10 w-full max-w-md">
    <div class="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl animate-bounce-in">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 shadow-lg shadow-green-500/30">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-white">Enter OTP</h1>
        <p class="text-slate-400 mt-2">We've sent a verification code</p>
      </div>
      
      <form class="space-y-6">
        <div class="flex justify-center gap-3">
          <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all" placeholder="•">
          <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all" placeholder="•">
          <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all" placeholder="•">
          <input type="text" maxlength="1" class="w-14 h-16 text-center text-2xl font-bold bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all" placeholder="•">
        </div>
        
        <button type="submit" class="relative w-full py-3.5 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-green-500/30">
          <span class="relative z-10">Verify</span>
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
        
        <p class="text-center text-slate-400 text-sm">
          Didn't receive? <button type="button" class="text-green-400 hover:text-green-300 font-semibold">Resend</button>
        </p>
      </form>
    </div>
  </div>
</body>
</html>`,
    reactCode: `import { useState, useRef } from 'react';

export default function AnimatedOTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP:', otp.join(''));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 animate-gradient bg-400%" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl animate-scale-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 shadow-lg shadow-green-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Enter OTP</h1>
            <p className="text-slate-400 mt-2">We've sent a verification code</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-14 h-16 text-center text-2xl font-bold bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                  placeholder="•"
                />
              ))}
            </div>
            
            <button type="submit" className="relative w-full py-3.5 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-green-500/30">
              <span className="relative z-10">Verify</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "otp-success",
    name: "OTP Success State",
    type: "OTP",
    style: "Animated",
    preview: `<div class="w-full max-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg scale-75"><div class="space-y-2 text-center"><div class="w-10 h-10 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"><svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><div class="h-2 w-16 mx-auto bg-slate-200 dark:bg-slate-700 rounded"></div><div class="h-4 bg-green-500 rounded"></div></div></div>`,
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Success</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes checkmark { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
    @keyframes scale-up { 0% { transform: scale(0); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
    @keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
    .animate-checkmark path { stroke-dasharray: 100; animation: checkmark 0.5s ease-out 0.3s forwards; }
    .animate-scale-up { animation: scale-up 0.5s ease-out forwards; }
    .animate-fade-in { animation: fade-in 0.5s ease-out 0.5s forwards; opacity: 0; }
  </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
    <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-up">
      <svg class="w-12 h-12 text-green-500 animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    
    <h1 class="text-2xl font-bold text-gray-900 animate-fade-in">Verified!</h1>
    <p class="text-gray-500 mt-2 animate-fade-in" style="animation-delay: 0.6s;">Your identity has been verified successfully.</p>
    
    <button class="w-full mt-8 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-200 animate-fade-in" style="animation-delay: 0.7s;">
      Continue
    </button>
  </div>
</body>
</html>`,
    reactCode: `export default function OTPSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 animate-fade-in">Verified!</h1>
        <p className="text-gray-500 mt-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Your identity has been verified successfully.
        </p>
        
        <button className="w-full mt-8 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Continue
        </button>
      </div>
    </div>
  );
}`,
  },
];

export const demoTypes = ["All", "Login", "Register", "Forgot Password", "OTP"] as const;
export const demoStyles = ["All", "Minimal", "Glassmorphism", "Card-based", "Split-screen", "Animated"] as const;
