import React from "react";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><circle cx="68" cy="128" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><ellipse cx="184" cy="128" rx="24" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="244" y1="72" x2="244" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            <span className="ml-2 text-xl font-bold text-blue-600">Simple React App</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our React App</h1>
            <p className="text-lg text-gray-600">
              A simple demonstration using React and Tailwind CSS
            </p>
          </div>
          
          <Welcome />
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Simple React App. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;