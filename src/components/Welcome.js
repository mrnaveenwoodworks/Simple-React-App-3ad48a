import React, { useState } from "react";

const Welcome = () => {
    const [name, setName] = useState("");
    const [showGreeting, setShowGreeting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(
        setShowGreeting(true);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><path d="M96.65,62a20,20,0,0,1,34.64-20l30,52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M220.11,40.63a60.21,60.21,0,0,0-24-14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M58.23,228a121,121,0,0,1-18.16-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome!</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        What's your name?
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
                    disabled={!name.trim()}
                >
                    Say Hello
                </button>
            </form>

            {showGreeting && name && (
                <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-green-800 text-center">
                        Hello, {name}! It's wonderful to meet you! 👋
                    </p>
                </div>
            )}
        </div>
    );
};

export default Welcome;