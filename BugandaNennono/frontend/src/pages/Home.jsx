import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Home(){
  const { t } = useLanguage()

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 text-white py-20 px-6 rounded-lg shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t({ en: 'Welcome to Buganda', lg: 'Tukusanyukidde mu Buganda' })}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t({ 
              en: 'Discover the rich heritage, traditions, and culture of Buganda N\'ennono',
              lg: 'Zuula obulombolombo, obuwangwa n\'empisa z\'Obwakabaka bwa Buganda'
            })}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-royal-600 px-8 py-3 rounded-full font-semibold hover:bg-gold-50 transition shadow-lg">
              {t({ en: 'Explore Our Heritage', lg: 'Zuula Obulombolombo Bwaffe' })}
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-royal-600 transition">
              {t({ en: 'Learn More', lg: 'Manya Ebisingawo' })}
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          {t({ en: 'Buganda N\'ennono', lg: 'Abalangira' })}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t({
            en: 'Buganda is one of the oldest kingdoms in East Africa, with a rich history spanning over 700 years. Our culture is woven with vibrant traditions, royal heritage, language, music, dance, and timeless values that continue to shape our identity today.',
            lg: 'Buganda gwa Bwakabaka obukadde ennyo mu East Africa, nga bulina ebyafaayo ebikulu eby\'emyaka egisukka 700. Obuwangwa bwaffe buzingiddwa empisa, obulombolombo bw\'Obwakabaka, olulimi, ennyimba, amazina, n\'emizeero egitakoma nga gitukyusa obulombolombo bwaffe.'
          })}
        </p>
      </section>

      {/* Cultural Highlights */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {t({ en: 'Cultural Highlights', lg: 'Ebyobuwangwa Ebikulu' })}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Kabaka */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t({ en: 'The Kabaka', lg: 'Kabaka' })}
              </h3>
              <p className="text-gray-600">
                {t({
                  en: 'The Kabaka is the traditional ruler and cultural leader of Buganda, embodying our heritage and unity. The current Kabaka is His Majesty Ronald Muwenda Mutebi II.',
                  lg: 'Kabaka ye mukulembeze w\'obuwangwa n\'omukulembeze w\'eddini mu Buganda, ng\'akiikirira obulombolombo n\'obumu bwaffe. Kabaka ali mu kifo kati ye Ssaabasajja Kabaka Ronald Muwenda Mutebi II.'
                })}
              </p>
            </div>
          </div>

          {/* Card 2: Language */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t({ en: 'Luganda Language', lg: 'Olulimi Oluganda' })}
              </h3>
              <p className="text-gray-600">
                {t({
                  en: 'Luganda is the language of the Baganda people, rich in proverbs and expressions that convey wisdom, respect, and cultural values passed down through generations.',
                  lg: 'Oluganda lwe lulimi lw\'Abaganda, olujjudde engero n\'ebigambo ebiraga amagezi, ekitiibwa, n\'emizeero egy\'obuwangwa egyayitibwa mu mirembe n\'emirembe.'
                })}
              </p>
            </div>
          </div>

          {/* Card 3: Traditions */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {t({ en: 'Traditions & Customs', lg: 'Empisa n\'Ennono' })}
              </h3>
              <p className="text-gray-600">
                {t({
                  en: 'From our vibrant traditional dances like the Bakisimba to ceremonies honoring our ancestors, Buganda\'s customs celebrate life, community, and our shared history.',
                  lg: 'Okuva ku mazina g\'obuwangwa nga Bakisimba okutuuka ku mikolo egissaamu ekitiibwa bajjajjaffe, empisa za Buganda zijaguza obulamu, ekitundu, n\'ebyafaayo byaffe.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          {t({ en: 'Our Heritage', lg: 'Obulombolombo Bwaffe' })}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <span className="text-royal-600 font-bold text-lg">1300s</span>
            </div>
            <div className="flex-1 border-l-4 border-gold-500 pl-6 pb-6">
              <h4 className="font-semibold text-gray-800 mb-2">
                {t({ en: 'Foundation of Buganda', lg: 'Okusimbibwa kwa Buganda' })}
              </h4>
              <p className="text-gray-600">
                {t({ en: 'Buganda N\'ennono was established by Kato Kintu, the first Kabaka.', lg: 'Obwakabaka bwa Buganda bwasimbibwa Kato Kintu, Kabaka ow\'olubereberye.' })}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <span className="text-royal-600 font-bold text-lg">1800s</span>
            </div>
            <div className="flex-1 border-l-4 border-gold-500 pl-6 pb-6">
              <h4 className="font-semibold text-gray-800 mb-2">
                {t({ en: 'Expansion & Influence', lg: 'Okweyongera n\'Amaanyi' })}
              </h4>
              <p className="text-gray-600">
                {t({ en: 'Buganda became the most powerful kingdom in the Great Lakes region of East Africa.', lg: 'Buganda gwafuuka Obwakabaka obw\'amaanyi ennyo mu kitundu ky\'ennyanja ennene mu East Africa.' })}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <span className="text-royal-600 font-bold text-lg">1993</span>
            </div>
            <div className="flex-1 border-l-4 border-gold-500 pl-6 pb-6">
              <h4 className="font-semibold text-gray-800 mb-2">
                {t({ en: 'Restoration of the Kingdom', lg: 'Okuddizaawo Obwakabaka' })}
              </h4>
              <p className="text-gray-600">
                {t({ en: 'The Kabaka Ronald Muwenda Mutebi II was crowned, restoring cultural leadership.', lg: 'Kabaka Ronald Muwenda Mutebi II yafuka, n\'okuddizaawo obukulembeze bw\'obuwangwa.' })}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <span className="text-royal-600 font-bold text-lg">
                {t({ en: 'Today', lg: 'Leero' })}
              </span>
            </div>
            <div className="flex-1 border-l-4 border-gold-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">
                {t({ en: 'Modern Buganda', lg: 'Buganda Ey\'Omulembe' })}
              </h4>
              <p className="text-gray-600">
                {t({ en: 'Buganda thrives as a cultural beacon, preserving traditions while embracing modernity.', lg: 'Buganda gukula ng\'ekitangaala ky\'obuwangwa, nga gukuuma empisa era n\'okwaniriza ekiseera ekyakaati.' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-royal-500 to-royal-700 text-white py-16 px-6 rounded-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t({ en: 'Join Us in Celebrating Buganda', lg: 'Tukolagane Okujaguza Buganda' })}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {t({
            en: 'Learn more about our traditions, participate in cultural events, and help preserve our heritage for future generations.',
            lg: 'Manya ebikwata ku mpisa zaffe, wenyigire mu mikolo gy\'obuwangwa, era oyambe okukuuma obulombolombo bwaffe eri abaazzukulu.'
          })}
        </p>
        <button className="bg-white text-royal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-50 transition shadow-lg">
          {t({ en: 'Get Involved', lg: 'Wenyigire' })}
        </button>
      </section>
    </div>
  )
}
