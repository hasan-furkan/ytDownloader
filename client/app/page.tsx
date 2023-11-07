"use client"
import { useState, FormEvent } from 'react';
import axios from "axios";

const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState("")

  const handleSubmit = async  (event: FormEvent) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:8000/api", input)
    setMessage(response.data.detail)
  };

  return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
          <div className="p-8 bg-white shadow-lg rounded-2xl w-full max-w-sm">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">indirmek istediginiz video linkini asagidaki yere giriniz</label>
                <div className="mt-1">
              <textarea
                  id="message"
                  rows={4}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Bir şeyler yazın..."
              />
                </div>
              </div>
              <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Gönder
              </button>
            </form>
            {message && message}
          </div>
        </div>
      </>
  );
};

export default Home;

