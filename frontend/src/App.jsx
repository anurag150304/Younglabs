import { useState, useEffect } from 'react';
import axios from 'axios';  // used for makeing get request from frontend to backend

function App() {
  const [name, setName] = useState('');   // used for make the input to be controlled input by hook (useState)
  const [toast, setToast] = useState({ success: null, error: null });  // used for showing the data or error reciving from backend

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/greet`, {
        params: { name },
      });
      if (response.status === 200) {
        setToast({ success: response.data.message, error: null });
      }
    } catch (err) {
      setToast({ success: null, error: err.response?.data?.error || 'Something went wrong' });
    }
  };

  useEffect(() => {
    if (toast.success || toast.error) {
      const timer = setTimeout(() => {
        setToast({ success: null, error: null });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
        {toast.success && (
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold border border-green-700 animate-slide-in-out">
            {toast.success}
          </div>
        )}
        {toast.error && (
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold border border-red-700 animate-slide-in-out">
            {toast.error}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center border-t-4 border-green-500">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to YoungLabs</h1>
        <p className="text-gray-600 mb-6">Enter your name to receive a personalized greeting!</p>
        <label htmlFor="name" className="block text-gray-700 text-left font-medium mb-2">
          Enter your name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="eg. Travis Scott"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
        />
        <button
          onClick={fetchData}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-all shadow-md"
        >
          Get Greeting
        </button>
      </div>

      <style>
        {`
          @keyframes slide-in-out {
            0% { opacity: 0; transform: translateY(-20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
          .animate-slide-in-out {
            animation: slide-in-out 3s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default App;