import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

export default function Katikkiro(){
  const { t } = useLanguage()

  const currentKatikkiro = {
    name: 'Owek. Charles Peter Mayiga',
    title: { en: 'Prime Minister of Buganda', lg: 'Katikkiro wa Buganda' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    since: '2013',
    clan: { en: 'Mutima (Heart) Clan', lg: 'Ekika kya Mutima' },
    born: '1965',
    education: [
      { en: 'Makerere University - Bachelor of Laws (LLB)', lg: 'Makerere University - Digiri y\'Amateeka (LLB)' },
      { en: 'Law Development Centre - Diploma in Legal Practice', lg: 'Law Development Centre - Dipoloma mu Mateeka' },
      { en: 'Harvard Business School - Advanced Management Program', lg: 'Harvard Business School - Enkola y\'Obukulembeze Obwawaggulu' }
    ],
    biography: {
      en: 'Charles Peter Mayiga was appointed as the Katikkiro (Prime Minister) of Buganda on December 21, 2013, by His Majesty the Kabaka of Buganda, Ronald Muwenda Mutebi II. As Katikkiro, he serves as the head of the Cabinet of Ministers and the chief executive officer of the Kingdom.',
      lg: 'Charles Peter Mayiga yalondebwa okuba Katikkiro wa Buganda nga Disemba 21, 2013, Ssabasajja Kabaka wa Buganda, Ronald Muwenda Mutebi II. Nga Katikkiro, akulira Kabineti y\'Abaminisita era ye mukulu w\'abakozi b\'Obwakabaka.'
    },
    previousRoles: [
      { en: 'Chief Executive Officer, Buganda Kingdom', lg: 'Omukulu w\'Abakozi, Obwakabaka bwa Buganda' },
      { en: 'Legal Advisor to the Kabaka', lg: 'Omukulembezi w\'Amateeka eri Kabaka' },
      { en: 'Principal Legal Officer, Buganda Kingdom', lg: 'Omukulu w\'Amateeka, Obwakabaka bwa Buganda' },
      { en: 'Private Legal Practitioner', lg: 'Omuteesa w\'Amateeka ow\'Ekyama' }
    ],
    achievements: [
      { en: 'Championed the Ettoffaali (brick by brick) development initiative', lg: 'Yakulemberera omugaso gwa Ettoffaali (ttoofaali ku ttoofaali)' },
      { en: 'Expanded Buganda\'s cultural institutions and media presence', lg: 'Yayongerako ku bitongole by\'obuwangwa bya Buganda n\'okumanyibwa mu mitambo' },
      { en: 'Strengthened partnerships with the diaspora community', lg: 'Yanyweza enkolagana n\'Abaganda abali mu mawanga' },
      { en: 'Advocated for federal governance in Uganda', lg: 'Yawolesa ku bufuzi bwa ffederale mu Uganda' }
    ],
    books: [
      { 
        title: { en: 'King on the Throne: The Story of the Coronation of His Majesty Ronald Muwenda Mutebi II', lg: 'Kabaka ku Ntebe: Ennyiriri y\'Okutikkibwa kwa Ssabasajja Ronald Muwenda Mutebi II' },
        year: '2017'
      }
    ]
  }

  const previousKatikkiros = [
    { name: 'Owek. John Baptist Walusimbi', term: '2007-2013', clan: 'Nsenene Clan' },
    { name: 'Owek. Joseph Mulwanyammuli Ssemogerere', term: '2000-2007', clan: 'Njovu Clan' },
    { name: 'Owek. Kintu Musoke', term: '1994-2000', clan: 'Ffumbe Clan' },
    { name: 'Owek. Joash Mayanja Nkangi', term: '1993-1994', clan: 'Kasimba Clan' }
  ]

  const roleOfKatikkiro = [
    {
      title: { en: 'Head of Cabinet', lg: 'Omukulu wa Kabineti' },
      description: { en: 'Presides over the Cabinet of Ministers and coordinates all government business of the Kingdom.', lg: 'Akulira Kabineti y\'Abaminisita era akwataniza emirimu gyonna egy\'obufuzi bw\'Obwakabaka.' },
      icon: '🏛️'
    },
    {
      title: { en: 'Chief Advisor', lg: 'Omukulembezi Omukulu' },
      description: { en: 'Serves as the principal advisor to the Kabaka on matters of state and policy.', lg: 'Akola ng\'omukulembezi omukulu eri Kabaka ku nsonga z\'eggwanga n\'enkola.' },
      icon: '💼'
    },
    {
      title: { en: 'Lukiiko Leader', lg: 'Omukulembeze wa Lukiiko' },
      description: { en: 'Leads the government in the Lukiiko (Parliament) and ensures implementation of its resolutions.', lg: 'Akulemberera gavumenti mu Lukiiko era akakasa nti ebiragiro byalwo bikolebwa.' },
      icon: '⚖️'
    },
    {
      title: { en: 'Development Champion', lg: 'Omuzira w\'Enkulaakulana' },
      description: { en: 'Spearheads economic development initiatives and modernization efforts across Buganda.', lg: 'Akulemberera ebyokulakulanya ebyenfuna n\'okutereeza mu Buganda yonna.' },
      icon: '📈'
    },
    {
      title: { en: 'Cultural Guardian', lg: 'Omukuumi w\'Obuwangwa' },
      description: { en: 'Ensures the preservation and promotion of Buganda\'s cultural heritage and traditions.', lg: 'Akakasa okukuuma n\'okuteeka mu maaso obusika bw\'obuwangwa n\'empisa za Buganda.' },
      icon: '🎭'
    },
    {
      title: { en: 'Public Representative', lg: 'Omuwakilizi wa Bantu' },
      description: { en: 'Represents the Kingdom in official functions and international engagements.', lg: 'Akiikirira Obwakabaka mu mikolo egy\'obukulembeze n\'ebyo eby\'ensi endala.' },
      icon: '🌍'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-royal-800 via-royal-700 to-royal-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t({ en: 'The Katikkiro', lg: 'Katikkiro' })}
          </h1>
          <p className="text-xl md:text-2xl text-royal-100 max-w-3xl mx-auto">
            {t({ 
              en: 'Prime Minister of the Kingdom of Buganda', 
              lg: 'Omukulu w\'Obufuzi bw\'Obwakabaka bwa Buganda' 
            })}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About the Office */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t({ en: 'About the Office of Katikkiro', lg: 'Ebikwata ku Kitebe kya Katikkiro' })}
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            {t({ 
              en: 'The Katikkiro is the Prime Minister and head of government in the Kingdom of Buganda. This ancient and prestigious office dates back centuries to the earliest days of the kingdom. The Katikkiro is appointed by the Kabaka and serves as the chief executive, overseeing all administrative affairs of the kingdom.',
              lg: 'Katikkiro ye Mukulu w\'Obufuzi era ye mukulu wa gavumenti mu Bwakabaka bwa Buganda. Ekitebe kino eky\'edda era eky\'ekitiibwa kikomekera mu myaka mingi okuva mu nnaku ez\'okusooka ez\'obwakabaka. Katikkiro alondebwa Kabaka era akola ng\'omukulu w\'abakozi, ng\'atunuulira ensonga zonna ez\'obufuzi bw\'obwakabaka.'
            })}
          </p>
          <p className="text-gray-700 text-lg">
            {t({ 
              en: 'The Kabaka delegates executive authority to the Katikkiro, who then heads the Cabinet of Ministers. Working closely with the Lukiiko (Parliament), the Katikkiro ensures the smooth running of the kingdom\'s affairs across all 18 counties.',
              lg: 'Kabaka awa Katikkiro obuyinza bw\'obukulu, era Katikkiro n\'akulira Kabineti y\'Abaminisita. Ng\'akola awamu ne Lukiiko, Katikkiro akakasa nti ensonga z\'obwakabaka zitambula bulungi mu masaza gonna 18.'
            })}
          </p>
        </div>

        {/* Current Katikkiro Profile */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">👤</span>
            {t({ en: 'Current Katikkiro', lg: 'Katikkiro Akulira Kati' })}
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/3 bg-royal-50 p-8 flex flex-col items-center justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img 
                    src={currentKatikkiro.image} 
                    alt={currentKatikkiro.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-royal-800 text-center">{currentKatikkiro.name}</h3>
                <p className="text-royal-600 text-center">{t(currentKatikkiro.title)}</p>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-royal-100 text-royal-700 px-4 py-1 rounded-full text-sm font-medium">
                    {t({ en: 'Since', lg: 'Okuva' })} {currentKatikkiro.since}
                  </span>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t({ en: 'Biography', lg: 'Ebimukwatako' })}</h4>
                  <p className="text-gray-700">{t(currentKatikkiro.biography)}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t({ en: 'Clan', lg: 'Ekika' })}</h4>
                    <div className="bg-royal-50 rounded-lg p-3 text-royal-700">
                      {t(currentKatikkiro.clan)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t({ en: 'Education', lg: 'Ebyenjigiriza' })}</h4>
                    <ul className="space-y-2">
                      {currentKatikkiro.education.map((edu, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-royal-500">🎓</span>
                          {t(edu)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{t({ en: 'Previous Roles', lg: 'Ebifo Ebyeyakuliramu' })}</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentKatikkiro.previousRoles.map((role, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {t(role)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">🏆</span>
            {t({ en: 'Key Achievements', lg: 'Ebikozi Ebikulu' })}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentKatikkiro.achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                  ✓
                </div>
                <p className="text-gray-700">{t(achievement)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Role of Katikkiro */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">📋</span>
            {t({ en: 'Roles & Responsibilities', lg: 'Emirimu n\'Obuvunaanyizibwa' })}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleOfKatikkiro.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-royal-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(role.title)}</h3>
                <p className="text-gray-600">{t(role.description)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Katikkiros */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">📜</span>
            {t({ en: 'Previous Katikkiros (Since Restoration)', lg: 'Bakatikkiro ab\'Emabega (Okuviira Okuzibwa)' })}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <table className="w-full">
              <thead className="bg-royal-50">
                <tr>
                  <th className="text-left p-4 text-royal-800 font-semibold">{t({ en: 'Name', lg: 'Erinnya' })}</th>
                  <th className="text-left p-4 text-royal-800 font-semibold">{t({ en: 'Term', lg: 'Ekiseera' })}</th>
                  <th className="text-left p-4 text-royal-800 font-semibold hidden md:table-cell">{t({ en: 'Clan', lg: 'Ekika' })}</th>
                </tr>
              </thead>
              <tbody>
                {previousKatikkiros.map((katikkiro, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{katikkiro.name}</td>
                    <td className="p-4 text-gray-600">{katikkiro.term}</td>
                    <td className="p-4 text-gray-600 hidden md:table-cell">{katikkiro.clan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ettoffaali Initiative */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white mb-16">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">
                {t({ en: 'Ettoffaali Development Initiative', lg: 'Enkola y\'Enkulaakulana Ettoffaali' })}
              </h2>
              <p className="text-amber-100 mb-6">
                {t({ 
                  en: 'Under Katikkiro Mayiga\'s leadership, the Ettoffaali ("brick by brick") initiative has mobilized Baganda across the world to contribute to the construction of the Masiro (royal tombs) at Kasubi, which was destroyed by fire in 2010. This initiative exemplifies the spirit of collective action and cultural preservation.',
                  lg: 'Wansi w\'obukulembeze bwa Katikkiro Mayiga, enkola ya Ettoffaali ("ttoofaali ku ttoofaali") eyakungaanya Baganda mu nsi yonna okuyamba mu kuzimba Masiro (entaana z\'obwakabaka) e Kasubi, eyayisiddwa omuliro mu 2010. Enkola eno eraga omwoyo gw\'okukola awamu n\'okukuuma obuwangwa.'
                })}
              </p>
              <Link to="/donate" className="inline-block px-6 py-3 bg-white text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition">
                {t({ en: 'Support the Initiative', lg: 'Yamba Enkola' })}
              </Link>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-6xl">🧱</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pages CTA */}
        <div className="bg-royal-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-royal-900 mb-4">
            {t({ en: 'Learn More About Buganda Leadership', lg: 'Yiga Ebisingawo ku Bukulembeze bwa Buganda' })}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/queen" className="px-6 py-3 bg-royal-600 text-white rounded-xl font-semibold hover:bg-royal-700 transition">
              {t({ en: 'The Nnabagereka (Queen)', lg: 'Nnabagereka' })}
            </Link>
            <Link to="/history" className="px-6 py-3 bg-white text-royal-600 rounded-xl font-semibold hover:bg-royal-100 transition border border-royal-200">
              {t({ en: 'Kingdom History', lg: 'Ebyafaayo by\'Obwakabaka' })}
            </Link>
            <Link to="/clans" className="px-6 py-3 bg-white text-royal-600 rounded-xl font-semibold hover:bg-royal-100 transition border border-royal-200">
              {t({ en: 'The 52 Clans', lg: 'Ebika 52' })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
