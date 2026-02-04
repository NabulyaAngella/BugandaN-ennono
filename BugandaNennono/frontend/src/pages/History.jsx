import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

export default function History(){
  const { t } = useLanguage()

  const timeline = [
    {
      era: { en: 'Late 14th Century', lg: 'Ekisera ky\'oku nkomerero ey\'emyaka 1300' },
      title: { en: 'Founding of Buganda', lg: 'Okutandika kwa Buganda' },
      description: { 
        en: 'Kabaka Kintu, the founding king, arrived in the region from the east, possibly near Mount Elgon. After defeating the local ruler Bemba Musota, Kintu established the new kingdom and became Ssaabataka, head of all clan leaders.',
        lg: 'Kabaka Kintu, kabaka eyatandise, yajja mu kitundu kino okuva ku buvanjuba, oyinza okuba okumpi n\'Olusozi Elgon. Oluvannyuma lw\'okuwangula omufuzi w\'eyo Bemba Musota, Kintu yateekawo obwakabaka obupya era n\'afuuka Ssaabataka, omukulu w\'abataka bonna.'
      },
      icon: '👑'
    },
    {
      era: { en: 'Early Kingdom', lg: 'Obwakabaka Obwasooka' },
      title: { en: 'Original Counties', lg: 'Amasaza ag\'Okusooka' },
      description: { 
        en: 'Buganda began as a small nucleus of counties: Busiro, Mawokota, and Kyaddondo. These three counties remain central to Buganda\'s identity and house many important cultural sites.',
        lg: 'Buganda yatandika nga kitundu kitono eky\'amasaza: Busiro, Mawokota, ne Kyaddondo. Amasaza gano gasatu gakyali ga nsonga mu buwangwa bwa Buganda era galimu ebifo bingi eby\'obuwangwa eby\'omugaso.'
      },
      icon: '🏛️'
    },
    {
      era: { en: '17th Century', lg: 'Ekisera ky\'emyaka 1600' },
      title: { en: 'Expansion under Kabaka Kateregga', lg: 'Okweyongera wansi wa Kabaka Kateregga' },
      description: { 
        en: 'Under Kabaka Kateregga, Buganda annexed Singo, Gomba, Butambala, and Kyaggwe from the declining Bunyoro-Kitara Empire. This marked the beginning of Buganda\'s rise as a regional power.',
        lg: 'Wansi wa Kabaka Kateregga, Buganda yayingiza Singo, Gomba, Butambala, ne Kyaggwe okuva mu Bwakabaka bwa Bunyoro-Kitara obwali bugwa. Kino kyalaga entandikwa y\'okweyongera kwa Buganda okufuuka obuyinza obw\'ekitundu.'
      },
      icon: '⚔️'
    },
    {
      era: { en: '18th Century', lg: 'Ekisera ky\'emyaka 1700' },
      title: { en: 'Southern Expansion', lg: 'Okweyongera mu Bukiikakkono' },
      description: { 
        en: 'Kabaka Jjunju led successful campaigns into Buddu and Kooki, further expanding Buganda\'s territory southward toward present-day Tanzania.',
        lg: 'Kabaka Jjunju yakulembera ebikolwa ebyaakuwanguza mu Buddu ne Kooki, nga ayongera okweyongeza ettaka lya Buganda okudda mu bukiikakkono okutuuka mu Tanzania ey\'olwoleewo.'
      },
      icon: '🗺️'
    },
    {
      era: { en: '19th Century', lg: 'Ekisera ky\'emyaka 1800' },
      title: { en: 'Peak of Power', lg: 'Entikko y\'Obuyinza' },
      description: { 
        en: 'Kabaka Mawanda captured Bugerere, Bulemeezi, and Kyaggwe. Later, with British support, Kabaka Muteesa I secured Buyaga, Bugangaizi, and Bululi. Buganda became the most powerful kingdom in the Great Lakes region.',
        lg: 'Kabaka Mawanda yakwata Bugerere, Bulemeezi, ne Kyaggwe. Oluvannyuma, n\'obuyambi bw\'Abungereza, Kabaka Muteesa I yakakasa Buyaga, Bugangaizi, ne Bululi. Buganda yafuuka obwakabaka obw\'amaanyi ennyo mu kitundu ky\'Ennyanja Ennene.'
      },
      icon: '🌟'
    },
    {
      era: { en: '1900', lg: '1900' },
      title: { en: 'The Buganda Agreement', lg: 'Endagaano ya Buganda' },
      description: { 
        en: 'Buganda signed a formal agreement with the British colonial government, known as the Buganda Agreement of 1900. This treaty recognised Buganda as a constitutional monarchy and allowed it considerable autonomy in local governance.',
        lg: 'Buganda yasainyiza endagaano n\'gavumenti ya bunnansi ya Bungereza, emanyiddwa ng\'Endagaano ya Buganda eya 1900. Endagaano eno yatendereza Buganda ng\'obwakabaka obw\'etteeka era n\'ekkiriza obwetongole obunene mu bufuzi bw\'eyo.'
      },
      icon: '📜'
    },
    {
      era: { en: '1966', lg: '1966' },
      title: { en: 'Abolition of the Kingdom', lg: 'Okusazibwamu kw\'Obwakabaka' },
      description: { 
        en: 'The Ugandan government under Milton Obote abolished all traditional kingdoms, including Buganda. Kabaka Muteesa II was forced into exile in the United Kingdom, where he later died.',
        lg: 'Gavumenti ya Uganda wansi wa Milton Obote yasazaamu obwakabaka bwonna obw\'empisa, omuli Buganda. Kabaka Muteesa II yawalirizibwa okugenda mu buwambe mu Bungereza, w\'oluvannyuma n\'afiira.'
      },
      icon: '⛔'
    },
    {
      era: { en: '1993', lg: '1993' },
      title: { en: 'Restoration of the Kingdom', lg: 'Okuzibwa kw\'Obwakabaka' },
      description: { 
        en: 'Kabaka Ronald Muwenda Mutebi II was enthroned on 31st July 1993, becoming the 36th King of Buganda. His coronation marked the restoration of the Buganda Kingdom after 27 years of abolition.',
        lg: 'Kabaka Ronald Muwenda Mutebi II yatikkibwa nga 31 Julaayi 1993, n\'afuuka Kabaka ow\'36 wa Buganda. Okutikkibwa kwe kwalaga okuzibwa kw\'Obwakabaka bwa Buganda oluvannyuma lw\'emyaka 27 ng\'obusaziddwamu.'
      },
      icon: '🎉'
    },
    {
      era: { en: 'Present Day', lg: 'Olweelero' },
      title: { en: 'Cultural Renaissance', lg: 'Okuzibwa kw\'Obuwangwa' },
      description: { 
        en: 'Today, Buganda stands as a proud custodian of heritage, tradition, and modern progress. The kingdom continues to champion unity, development, and the preservation of its people\'s values in a rapidly changing world.',
        lg: 'Olweelero, Buganda eyimirira ng\'omukuumi ow\'amalala, empisa, n\'okwekulaakulanya okwa kaakati. Obwakabaka bukyakulembera obumu, enkulaakulana, n\'okukuuma emizizo gy\'abantu baabwo mu nsi ekyuka mangu.'
      },
      icon: '🌍'
    }
  ]

  const governance = [
    {
      title: { en: 'The Kabaka (King)', lg: 'Kabaka' },
      description: { en: 'The Kabaka is the cultural head of Buganda, symbolizing unity, identity, and heritage. The current Kabaka is Ronald Muwenda Mutebi II, the 36th king.', lg: 'Kabaka ye mukulu w\'obuwangwa bwa Buganda, akiikirira obumu, obuwangwa, n\'obusika. Kabaka akulira kati ye Ronald Muwenda Mutebi II, kabaka ow\'36.' },
      icon: '👑'
    },
    {
      title: { en: 'The Katikkiro (Prime Minister)', lg: 'Katikkiro' },
      description: { en: 'The Kabaka delegates executive authority to the Katikkiro, who heads the Cabinet of Ministers. The current Katikkiro is Charles Peter Mayiga.', lg: 'Kabaka awa obuyinza bw\'okufuga Katikkiro, akulira Kabineti y\'Abaminisita. Katikkiro akulira kati ye Charles Peter Mayiga.' },
      icon: '🏛️'
    },
    {
      title: { en: 'The Lukiiko (Parliament)', lg: 'Lukiiko' },
      description: { en: 'Legislative oversight is conducted by the Lukiiko, which works closely with the Cabinet to administer the Kingdom\'s affairs across its 18 counties.', lg: 'Okwetegereza kw\'amateeka kukolebwa Lukiiko, erikola awamu ne Kabineti okufuga ensonga z\'Obwakabaka mu masaza gaayo 18.' },
      icon: '⚖️'
    },
    {
      title: { en: 'The Abataka (Clan Heads)', lg: 'Abataka' },
      description: { en: 'The Kabaka mandates clan heads to uphold the values, customs, and traditions of the Baganda, ensuring that cultural heritage remains central to daily life.', lg: 'Kabaka awa abataka okulinda emizizo, empisa, n\'eby\'obuwangwa bya Baganda, nga bakakasa nti obusika bw\'obuwangwa busigala kya nsonga mu bulamu bwa bulijjo.' },
      icon: '🎭'
    }
  ]

  const counties = [
    'Kyaddondo', 'Busiro', 'Mawokota', 'Butambala', 'Gomba', 'Singo',
    'Bulemeezi', 'Kyaggwe', 'Bugerere', 'Buvuma', 'Ssese', 'Kooki',
    'Buddu', 'Mawogola', 'Kabula', 'Buwekula', 'Ssingo', 'Kyadondo'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-royal-800 via-royal-700 to-royal-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t({ en: 'History of Buganda', lg: 'Ebyafaayo bya Buganda' })}
          </h1>
          <p className="text-xl md:text-2xl text-royal-100 max-w-3xl mx-auto">
            {t({ 
              en: 'Over 600 years of rich history, culture, and tradition in the heart of East Africa', 
              lg: 'Emyaka esukka mu 600 egy\'ebyafaayo, obuwangwa, n\'empisa mu mutima gwa Africa y\'Ebuvanjuba' 
            })}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t({ en: 'The Kingdom of Buganda', lg: 'Obwakabaka bwa Buganda' })}
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-4 text-center">
              {t({ 
                en: 'Buganda is the largest and most influential of the traditional kingdoms in present-day Uganda, with a rich history that spans several centuries. Situated between Lakes Victoria, Kyoga, and Albert, Buganda has long been a powerful player in the Great Lakes region of East Africa.',
                lg: 'Buganda y\'obwakabaka obw\'ekika obusinga obunene era obw\'ekitiibwa mu bwakabaka obw\'empisa mu Uganda ey\'olweelero, n\'ebyafaayo ebigagga ebikwata emyaka mingi. Eritunze wakati wa Nnyanja Vikotoria, Kyoga, ne Albert, Buganda yabadde obuyinza obunene mu kitundu ky\'Ennyanja Ennene mu Africa y\'Ebuvanjuba.'
              })}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-royal-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-royal-600 mb-2">1300s</div>
              <div className="text-sm text-gray-600">{t({ en: 'Founded', lg: 'Okutandika' })}</div>
            </div>
            <div className="bg-royal-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-royal-600 mb-2">36</div>
              <div className="text-sm text-gray-600">{t({ en: 'Kings (Kabakas)', lg: 'Bakabaka' })}</div>
            </div>
            <div className="bg-royal-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-royal-600 mb-2">18</div>
              <div className="text-sm text-gray-600">{t({ en: 'Counties', lg: 'Amasaza' })}</div>
            </div>
            <div className="bg-royal-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-royal-600 mb-2">52+</div>
              <div className="text-sm text-gray-600">{t({ en: 'Clans', lg: 'Ebika' })}</div>
            </div>
          </div>
        </div>

        {/* Origins Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">📖</span>
            {t({ en: 'Origins and Founding', lg: 'Ensibuko n\'Okutandika' })}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-700 text-lg mb-6">
              {t({ 
                en: 'The origins of Buganda trace back to the late 14th century. Oral tradition holds that the founding Kabaka (king), Kintu, arrived in the region from the east, possibly near Mount Elgon, accompanied by several clans. After defeating the local ruler Bemba Musota, Kintu established the new kingdom and became Ssaabataka, head of all clan leaders. To unify the people, he encouraged intermarriage between his followers and the indigenous communities, laying the foundation for the Baganda ethnic identity.',
                lg: 'Ensibuko ya Buganda ejja mu kisera ky\'oku nkomerero ey\'emyaka 1300. Empisa z\'okwogera zigamba nti Kabaka eyatandise, Kintu, yajja mu kitundu kino okuva ku buvanjuba, oyinza okuba okumpi n\'Olusozi Elgon, yeetaaseko ebika ebiwerako. Oluvannyuma lw\'okuwangula omufuzi w\'eyo Bemba Musota, Kintu yateekawo obwakabaka obupya era n\'afuuka Ssaabataka, omukulu w\'abataka bonna.'
              })}
            </p>
            <p className="text-gray-700 text-lg">
              {t({ 
                en: 'Another widely held belief, especially in Bunyoro oral tradition, is that Kato Kimera, believed to be the twin brother of Isingoma Rukidi Mpuuga, the founder of the Bito dynasty in Bunyoro, was the true founder of Buganda. Kimera is said to have arrived from Bunyoro during the collapse of the Bunyoro-Kitara Empire, bringing with him several clans. Other clans later migrated from Busoga, Ssese Islands, and other Bantu regions, enriching Buganda\'s cultural tapestry.',
                lg: 'Endowooza endala ekikiririzibwa ennyo, ennyo mu mpisa z\'okwogera za Bunyoro, y\'ey\'okuba Kato Kimera, ategeezebwa okuba mulongo wa Isingoma Rukidi Mpuuga, eyatandise olulyo lwa Bito mu Bunyoro, ye yali eyatandise Buganda ddala. Kimera ayogerwa okuba yajja okuva Bunyoro mu kugwa kw\'Obwakabaka bwa Bunyoro-Kitara, nga yeetaaseko ebika ebiwerako.'
              })}
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">⏳</span>
            {t({ en: 'Historical Timeline', lg: 'Oluyimba lw\'Ebyafaayo' })}
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-royal-200 hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-royal-500 rounded-xl items-center justify-center text-2xl shrink-0 z-10">
                    {event.icon}
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="text-sm text-royal-600 font-semibold mb-1">{t(event.era)}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t(event.title)}</h3>
                    <p className="text-gray-700">{t(event.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governance Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">🏛️</span>
            {t({ en: 'Governance Structure', lg: 'Enkola y\'Obufuzi' })}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {governance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-royal-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t(item.title)}</h3>
                    <p className="text-gray-700">{t(item.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counties */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center text-2xl">🗺️</span>
            {t({ en: 'The 18 Counties (Amasaza)', lg: 'Amasaza 18' })}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-700 text-lg mb-6">
              {t({ 
                en: 'Buganda is divided into 18 administrative counties (amasaza), each governed by a county chief (Ssaza chief) appointed by the Kabaka. These counties span across central Uganda and are the backbone of the kingdom\'s administration.',
                lg: 'Buganda egabaniddwa mu masaza 18 ag\'obufuzi, buli limu erifugibwa omukungu w\'essaza (Ssaza chief) alondeddwa Kabaka. Amasaza gano gakwata mu Uganda entereekere era ge nkola y\'obufuzi bw\'obwakabaka.'
              })}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {counties.map((county, index) => (
                <div key={index} className="bg-royal-50 rounded-lg p-3 text-center text-royal-700 font-medium text-sm">
                  {county}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cultural Legacy CTA */}
        <div className="bg-gradient-to-r from-royal-600 to-royal-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t({ en: 'Explore Buganda\'s Cultural Heritage', lg: 'Zuula Obusika bw\'Obuwangwa bwa Buganda' })}
          </h2>
          <p className="text-royal-100 mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Discover more about the clans, ceremonies, food, and traditions that make Buganda unique.',
              lg: 'Zuula ebisingawo ku bika, emikolo, emmere, n\'empisa ezifuula Buganda ey\'enjawulo.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/clans" className="px-6 py-3 bg-white text-royal-600 rounded-xl font-semibold hover:bg-royal-50 transition">
              {t({ en: 'Explore Clans', lg: 'Zuula Ebika' })}
            </Link>
            <Link to="/ceremonies" className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-400 transition">
              {t({ en: 'View Ceremonies', lg: 'Laba Emikolo' })}
            </Link>
            <Link to="/food" className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-400 transition">
              {t({ en: 'Traditional Food', lg: 'Emmere y\'Empisa' })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
