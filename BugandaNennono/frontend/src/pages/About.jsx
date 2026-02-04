import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import kabakaImg from '../images/kabaka.jpg'

export default function About(){
  const { t } = useLanguage()
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section with Image */}
      <div className="bg-gradient-to-r from-royal-600 to-royal-700 rounded-2xl overflow-hidden mb-12 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative h-96 md:h-full">
            <img 
              src={kabakaImg} 
              alt="Kabaka Ronald Muwenda Mutebi II"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-royal-900/50 to-transparent"></div>
          </div>
          
          {/* Text Side */}
          <div className="p-8 md:p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t({ 
                en: 'Kabaka Ronald Muwenda Mutebi II', 
                lg: 'Kabaka Ronaaldo Muwenda Mutebi wa II' 
              })}
            </h1>
            <p className="text-xl text-royal-100 mb-6">
              {t({ 
                en: '36th Kabaka of Buganda', 
                lg: 'Kabaka wa 36 owa Buganda' 
              })}
            </p>
            <div className="flex items-center gap-4 text-royal-100">
              <div>
                <p className="text-sm opacity-90">{t({ en: 'Reign:', lg: 'Obufuzi:' })}</p>
                <p className="text-lg font-semibold">1993 - {t({ en: 'Present', lg: 'Kati' })}</p>
              </div>
              <div className="w-px h-12 bg-royal-400"></div>
              <div>
                <p className="text-sm opacity-90">{t({ en: 'Born:', lg: 'Yazaalibwa:' })}</p>
                <p className="text-lg font-semibold">{t({ en: 'April 13, 1955', lg: 'April 13, 1955' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t({ en: 'Biography', lg: 'Ebyomulamwa' })}
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            {t({
              en: 'His Majesty Kabaka Ronald Muwenda Mutebi II is the 36th Kabaka (King) of the Kingdom of Buganda. He ascended to the throne on July 31, 1993, following the restoration of traditional kingdoms in Uganda. Born on April 13, 1955, at Mengo Palace in Kampala, he is the son of Sir Edward Muteesa II, the 35th Kabaka of Buganda, and Nabakyala Sarah Nalule.',
              lg: 'Ssabasajja Kabaka Ronaaldo Muwenda Mutebi wa II ye Kabaka wa 36 owa Obwakabaka bwa Buganda. Yalinnya ku ntebe ya Buganda ku July 31, 1993, oluvannyuma lw\'okuzzibwawo obwakabaka mu Uganda. Yazaalibwa ku April 13, 1955, mu Lubiri lwa Mengo mu Kampala, ye mutabani wa Sir Edward Muteesa II, Kabaka wa 35 owa Buganda, ne Nabakyala Sarah Nalule.'
            })}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t({
              en: 'Kabaka Mutebi II was educated at King\'s College Budo, Bradfield College in England, and Magdalene College, Cambridge, where he studied law. His education abroad equipped him with a global perspective while maintaining deep roots in Buganda culture and traditions.',
              lg: 'Kabaka Mutebi wa II yasoma mu King\'s College Budo, Bradfield College mu Bungereza, ne Magdalene College, Cambridge, gye yasomera amateeka. Okusoma kwe ebweru kw\'eggwanga kwamuyamba okufuna endowooza ey\'ensi yonna ng\'akyakuuma emirandira gye mu buwangwa n\'empisa za Buganda.'
            })}
          </p>
        </div>
      </div>

      {/* Role and Responsibilities */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t({ en: 'Role & Responsibilities', lg: 'Omulimu n\'Obuvunaanyizibwa' })}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-royal-50 to-royal-100 border-2 border-royal-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-royal-500 to-royal-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Cultural Leadership', lg: 'Obukulembeze bw\'Obuwangwa' })}
            </h3>
            <p className="text-gray-700">
              {t({
                en: 'The Kabaka serves as the cultural and traditional leader of the Baganda people, preserving and promoting Buganda\'s rich heritage, customs, and values.',
                lg: 'Kabaka akulembera Abaganda mu by\'obuwangwa n\'empisa, akuuma era n\'atumbula obulombolombo, empisa n\'emizeero gya Buganda.'
              })}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Unity & Guidance', lg: 'Obumu n\'Okuluŋŋamya' })}
            </h3>
            <p className="text-gray-700">
              {t({
                en: 'He unites the Baganda people across Uganda and the diaspora, providing guidance on cultural matters and representing Buganda\'s interests.',
                lg: 'Agatta Abaganda bonna mu Uganda ne mu nsi endala, abaluŋŋamya mu by\'obuwangwa era n\'akiikirira ebirungi bya Buganda.'
              })}
            </p>
          </div>

          <div className="bg-gradient-to-br from-royal-50 to-royal-100 border-2 border-royal-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-royal-500 to-royal-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Development & Education', lg: 'Enkulaakulana n\'Ebyenjigiriza' })}
            </h3>
            <p className="text-gray-700">
              {t({
                en: 'The Kabaka promotes education, healthcare, and economic development through various kingdom initiatives and partnerships.',
                lg: 'Kabaka atumbula ebyenjigiriza, obujjanjabi, n\'enkulaakulana y\'ebyenfuna ng\'ayita mu nteekateeka z\'obwakabaka n\'enkolagana.'
              })}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Social Welfare', lg: 'Obulamu bw\'Abantu' })}
            </h3>
            <p className="text-gray-700">
              {t({
                en: 'Through the Kabaka Foundation, he addresses social issues, supports vulnerable communities, and promotes sustainable development.',
                lg: 'Ng\'ayita mu Kabaka Foundation, akola ku nsonga z\'abantu, ayamba bantu abeetaaga obuyambi, era n\'atumbula enkulaakulana ey\'eddiŋŋiridde.'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t({ en: 'Major Achievements', lg: 'Ebyo Atuukirizza' })}
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {t({ en: 'Restoration of Buganda Kingdom', lg: 'Okuzzaayo Obwakabaka bwa Buganda' })}
                </h3>
                <p className="text-gray-700">
                  {t({
                    en: 'Successfully led the restoration and revival of Buganda\'s traditional institutions after they were abolished in 1966.',
                    lg: 'Yakulembera obulungi okuzzaayo n\'okuzuukusa ebitongole by\'obulombolombo bwa Buganda oluvannyuma lw\'okusazibwawo mu 1966.'
                  })}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {t({ en: 'Buganda Kingdom Properties Recovery', lg: 'Okuzzaayo Ebintu by\'Obwakabaka' })}
                </h3>
                <p className="text-gray-700">
                  {t({
                    en: 'Reclaimed significant kingdom properties and assets that were taken during the abolition of kingdoms.',
                    lg: 'Yaddiza ebintu n\'obugagga bw\'obwakabaka obwali buwambibbwa ng\'obwakabaka bwaggyibwawo.'
                  })}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {t({ en: 'Kabaka Foundation', lg: 'Kabaka Foundation' })}
                </h3>
                <p className="text-gray-700">
                  {t({
                    en: 'Established the Kabaka Foundation which runs health centers, education programs, and community development initiatives across Buganda.',
                    lg: 'Yateekawo Kabaka Foundation ekola ku malwaliro, pulogulaamu z\'ebyenjigiriza, n\'enteekateeka z\'enkulaakulana y\'ebitundu mu Buganda yonna.'
                  })}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {t({ en: 'Cultural Preservation', lg: 'Okukuuma Obuwangwa' })}
                </h3>
                <p className="text-gray-700">
                  {t({
                    en: 'Championed the preservation of Luganda language, traditional ceremonies, and cultural practices for future generations.',
                    lg: 'Akulembedde okukuuma olulimi Oluganda, emikolo gy\'obulombolombo, n\'empisa z\'obuwangwa okuzikuuma emirembe egijja.'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Life */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t({ en: 'Personal Life', lg: 'Obulamu Bwe Obw\'Omuntu' })}
        </h2>
        <div className="bg-gradient-to-br from-royal-50 to-gold-50 rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t({ en: 'Family', lg: 'Ab\'omu Maka' })}
              </h3>
              <p className="text-gray-700 mb-4">
                {t({
                  en: 'Kabaka Mutebi is married to Nnabagereka Sylvia Nagginda, whom he wed on August 27, 1999. Together they have been blessed with children and continue to strengthen the royal family.',
                  lg: 'Kabaka Mutebi yafumbirwa Nnabagereka Sylvia Nagginda, gwe yawasa ku August 27, 1999. Bombi baweebwa omukisa gw\'abaana era beeyongerayo okugumya ab\'omu maka ga kitiibwa.'
                })}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t({ en: 'Interests', lg: 'By\'ayagala' })}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t({ en: 'Rally driving and motorsports', lg: 'Okuvuga emmotoka z\'empaka' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t({ en: 'Cultural music and traditional dances', lg: 'Ennyimba z\'obuwangwa n\'okuzina okw\'edda' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t({ en: 'Community development projects', lg: 'Pulojekiti z\'enkulaakulana y\'abantu' })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-royal-500 to-royal-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          {t({ en: 'Long Live the Kabaka', lg: 'Wangaala Kabaka' })}
        </h2>
        <p className="text-xl text-royal-100 mb-6">
          {t({
            en: 'Join us in celebrating and supporting our cultural heritage and the Kingdom of Buganda.',
            lg: 'Tujjukire era tuwagire obulombolombo bwaffe n\'Obwakabaka bwa Buganda.'
          })}
        </p>
        <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
          {t({ en: 'Support the Kingdom', lg: 'Wagira Obwakabaka' })}
        </button>
      </div>
    </div>
  )
}
