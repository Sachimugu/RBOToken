// pages/api/hello.js

export default function handler(req, res) {
    // You can handle different request methods like GET, POST, etc.
    if (req.method === 'GET') {
      res.status(200).json({ message: 'Hello, world!' });
    } else {
      // If the method is not GET, send a Method Not Allowed error
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  