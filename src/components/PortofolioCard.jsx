import React from 'react'

export default function PortfolioCard({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-1 text-teal-600 dark:text-teal-400">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <span className="inline-block mt-4 text-teal-500 dark:text-teal-300 text-sm font-medium">
        ➤ Lihat Project 
      </span>
    </a>
  )
}
