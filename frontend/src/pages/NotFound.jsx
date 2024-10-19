import React from 'react'

function NotFound() {
  return (
    <>
      <div class="flex items-center justify-center h-screen bg-gray-200">
        <div class="text-center">
          <h1 class="text-8xl font-bold text-red-600">404</h1>
          <p class="mt-4 text-lg text-gray-700">Oops! Page Not Found</p>
          <p class="mt-2 text-gray-500">The page you're looking for doesn't exist.</p>
          <a href="/" class="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
          Go to Home
          </a>
        </div>
      </div>

    </>
  )
}

export default NotFound