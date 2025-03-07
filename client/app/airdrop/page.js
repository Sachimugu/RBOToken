'use client'
import { useState } from 'react';
import Link from "next/link";

const AirDrop = () => {
  // Track task completion state
  const [taskCompletion, setTaskCompletion] = useState({
    twitter: false,
    facebook: false,
    instagram: false,
    telegram: false,
    youtube: false,
  });

  // Function to open the link in a new tab and mark the task as done
  const handleTaskClick = (task, url) => {
    if (!taskCompletion[task]) {
      // Open link in a new tab
      window.open(url, '_blank');
      
      // Mark the task as completed
      setTaskCompletion(prevState => ({
        ...prevState,
        [task]: true
      }));
    }
  };

  return (
    <div>
      <section className="lg:flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 py-24 min-h-screen relative overflow-hidden">
        {/* Heading */}
        <div className="text-center text-white px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
            {/* Heading */}
            <h2 className="text-5xl font-bold text-white">RBO - Be an early bird</h2>

            {/* Subheading */}
            <p className="text-xl text-gray-200">
              Rabbito is a blockchain platform designed for changemakers,
              innovators, and visionaries, offering the tools and technologies
              needed to unlock opportunities for the many, not just the few, and
              drive positive global transformation.
            </p>

            {/* Social Media Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Twitter Card */}
              <div
                onClick={() => handleTaskClick('twitter', 'https://twitter.com/YourHandle')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center ${taskCompletion.twitter ? 'bg-gray-600 pointer-events-none' : ''}`}
              >
                <img src="/images/twitter-icon.png" alt="Twitter" className="w-16 h-16 object-contain" />
                {taskCompletion.twitter && <span className="text-green-500 ml-4">Done</span>}
              </div>

              {/* Facebook Card */}
              <div
                onClick={() => handleTaskClick('facebook', 'https://facebook.com/YourFacebook')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center ${taskCompletion.facebook ? 'bg-gray-600 pointer-events-none' : ''}`}
              >
                <img src="/images/facebook-icon.png" alt="Facebook" className="w-16 h-16 object-contain" />
                {taskCompletion.facebook && <span className="text-green-500 ml-4">Done</span>}
              </div>

              {/* Instagram Card */}
              <div
                onClick={() => handleTaskClick('instagram', 'https://instagram.com/YourInstagram')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center ${taskCompletion.instagram ? 'bg-gray-600 pointer-events-none' : ''}`}
              >
                <img src="/images/instagram-icon.png" alt="Instagram" className="w-16 h-16 object-contain" />
                {taskCompletion.instagram && <span className="text-green-500 ml-4">Done</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Telegram Card */}
              <div
                onClick={() => handleTaskClick('telegram', 'https://t.me/YourTelegramGroup')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center ${taskCompletion.telegram ? 'bg-gray-600 pointer-events-none' : ''}`}
              >
                <img src="/images/telegram-icon.png" alt="Telegram" className="w-16 h-16 object-contain" />
                {taskCompletion.telegram && <span className="text-green-500 ml-4">Done</span>}
              </div>

              {/* YouTube Card */}
              <div
                onClick={() => handleTaskClick('youtube', 'https://youtube.com/YourYouTube')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center ${taskCompletion.youtube ? 'bg-gray-600 pointer-events-none' : ''}`}
              >
                <img src="/images/youtube-icon.png" alt="YouTube" className="w-16 h-16 object-contain" />
                {taskCompletion.youtube && <span className="text-green-500 ml-4">Done</span>}
              </div>

              {/* Minimum Buy */}
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-yellow-400">$5</h3>
              </div>
            </div>

            {/* Claim Airdrop Button */}
            <div className="mt-8">
              <button
                className="bg-yellow-400 text-black py-4 px-12 rounded-xl text-lg font-medium shadow-md hover:bg-yellow-500 transition-colors w-full"
                onClick={() => alert("All tasks have been completed!")}
              >
                Claim Airdrop
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirDrop;
