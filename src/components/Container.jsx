import React from 'react'
import PortfolioCard from './PortofolioCard'
import AddItems from './AddItems'

const projects = [
  {
    title: 'Arshiku -  Web Article',
    description: 'Website untuk menampilkan hasil karya digital saya.',
    link: 'https://arshiku.vercel.app/',
  },
  {
    title: 'Kiirohana (Platform Baca Manga & Nonton Anime)',
    description: 'Platform untuk menonton Anime dan Membaca Manga (api by mangaku & samehadaku)',
    link: 'https://design-kit.com',
  },
  {
    title: 'Website Topup - Ciko Store ',
    description: 'Website Topup Segala Macam Game dengan Segala Metode Pembayaran',
    link: '',
  },
]

export default function Container() {
  return (
    <section className="max-w-6xl mx-auto p-6">
     <AddItems />
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
