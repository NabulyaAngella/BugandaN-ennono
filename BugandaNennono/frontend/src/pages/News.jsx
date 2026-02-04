import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function News(){
  const { t } = useLanguage()

  const articles = [
    { id: '1', en: 'Royal outreach to local communities', lg: 'Abalangira mu bantu' },
    { id: '2', en: 'Cultural heritage preservation initiative', lg: 'Okukuuma obuwangwa' },
    { id: '3', en: 'Upcoming harvest festival dates', lg: 'Ebikadde eby\'oku balala' }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{t({ en: 'News', lg: 'Amawulire' })}</h2>
      <p className="text-gray-700 mb-6">{t({ en: 'Latest updates and stories from the Kingdom of Buganda.', lg: 'Ebikwata ku Buganda eby\'amaanyi n\'ebitabo.' })}</p>

      <div className="space-y-6">
        {articles.map(a => (
          <article key={a.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{t({ en: a.en, lg: a.lg })}</h3>
            <p className="text-sm text-gray-600">{t({ en: 'Summary or excerpt for this news item will appear here.', lg: 'Ekiwandiiko ekinaafaamu ku kifo kino kijja wano.' })}</p>
            <div className="mt-4">
              <a href="#" className="text-royal-500 hover:underline">{t({ en: 'Read more', lg: 'Soma ebisingawo' })}</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
