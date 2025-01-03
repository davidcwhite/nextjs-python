'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  useEffect(() => {
    // Fetch message from backend
    fetch(`${apiUrl}/api/hello`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error fetching message:', error);
        setMessage('Error loading message');
      });
  }, [apiUrl]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          David's App
        </h1>
        <p className="text-xl text-gray-700">
          Message from backend: {message}
        </p>
      </div>
    </main>
  );
} 