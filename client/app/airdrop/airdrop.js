'use client'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React, { useState } from 'react';
// import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const tasksData = [
  { id: 1, task: 'Follow us on Twitter', handle: '@YourHandle', completed: false, url: 'https://twitter.com/YourHandle', icon: <Twitter /> },
  { id: 2, task: 'Like our Facebook page', handle: '@YourFacebook', completed: false, url: 'https://facebook.com/YourFacebook', icon: <Facebook /> },
//   { id: 3, task: 'Join our Telegram group', handle: '@YourTelegramGroup', completed: false, url: 'https://t.me/YourTelegramGroup', icon: <Telegram /> },
  { id: 4, task: 'Follow us on Instagram', handle: '@YourInstagram', completed: false, url: 'https://instagram.com/YourInstagram', icon: <Instagram /> },
  { id: 5, task: 'Subscribe to our YouTube channel', handle: '@YourYouTube', completed: false, url: 'https://youtube.com/YourYouTube', icon: <Youtube /> },
];

const TaskDrop = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  const handleWalletChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = () => {
    if (!walletAddress) {
      alert('Please enter a valid wallet address.');
      return;
    }
    setIsSubmitted(true);
    alert(`Airdrop of ${tasks.filter(task => task.completed).length * 1000} BSO will be sent to ${walletAddress}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Complete Tasks for Airdrop</h2>
      
      <div className="space-y-4 mb-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 bg-white border border-gray-300 rounded-lg flex items-center justify-between cursor-pointer transition duration-300 ${
              task.completed ? 'bg-green-100 border-green-300' : ''
            }`}
            onClick={() => {
              if (!task.completed) {
                window.open(task.url, '_blank');
                handleTaskCompletion(task.id);
              }
            }}
          >
            <div className="flex items-center">
              <div className="mr-4 text-blue-500">
                {task.icon}
              </div>
              <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.task} ({task.handle})
              </span>
            </div>
            {task.completed && (
              <span className="text-green-500 font-semibold">✔ Verified</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-lg text-gray-700 mb-4">
        You have completed {tasks.filter((task) => task.completed).length} out of {tasks.length} tasks. You will receive{' '}
        {tasks.filter((task) => task.completed).length * 1000} BSO.
      </div>

      <input
        type="text"
        placeholder="Enter your wallet address"
        value={walletAddress}
        onChange={handleWalletChange}
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
        disabled={tasks.filter((task) => task.completed).length < tasks.length}
      >
        Submit Wallet for Airdrop
      </button>

      {isSubmitted && (
        <div className="mt-4 p-4 bg-blue-50 text-blue-600 text-center rounded-lg">
          <p>Airdrop request submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default TaskDrop;
