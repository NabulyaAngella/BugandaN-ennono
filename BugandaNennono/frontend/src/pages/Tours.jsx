import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Tours(){
  const { t } = useLanguage()
  const [selectedLandmark, setSelectedLandmark] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  // Get the tour company URL from environment variable or use default
  const tourCompanyUrl = import.meta.env.VITE_TOUR_COMPANY_URL || 'https://www.ugandatourism.go.ug/'

  const categories = [
    { id: 'All', name: { en: 'All Sites', lg: 'Ebifo Byonna' } },
    { id: 'Royal', name: { en: 'Royal Sites', lg: 'Ebifo by\'Obwakabaka' } },
    { id: 'Sacred', name: { en: 'Sacred Sites', lg: 'Ebifo Ebitukuvu' } },
    { id: 'Historical', name: { en: 'Historical Sites', lg: 'Ebifo by\'Ebyafaayo' } },
    { id: 'Natural', name: { en: 'Natural Attractions', lg: 'Ebifo by\'Obutonde' } }
  ]

  const landmarks = [
    {
      id: '1',
      category: 'Sacred',
      name: { en: 'Kasubi Tombs', lg: 'Amasiro g\'e Kasubi' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKe2_dXrgz9IT0kDJ_8ZW3qD28ZxkF_tI8g&s',
      location: { en: 'Kasubi Hill, Kampala', lg: 'Olusozi Kasubi, Kampala' },
      description: {
        en: 'The Kasubi Tombs are the burial grounds of four Kabakas (Kings) of Buganda: Mutesa I, Mwanga II, Daudi Chwa II, and Mutesa II. This UNESCO World Heritage Site represents the finest example of traditional Ganda architecture and is considered the most significant spiritual place for the Baganda people.',
        lg: 'Amasiro g\'e Kasubi ge bifo eby\'okuzikkirwa Bakabaka bana (4) ba Buganda: Mutesa I, Mwanga II, Daudi Chwa II, ne Mutesa II. Ekifo kino ekya UNESCO World Heritage kiriragira eky\'okuzimba eky\'empisa za Baganda eky\'okutiikira era kitwlibwa ekifo eky\'omwoyo ekisinga ennyo eri Baganda.'
      },
      highlights: [
        { en: 'UNESCO World Heritage Site', lg: 'Ekifo kya UNESCO World Heritage' },
        { en: 'Traditional Ganda architecture', lg: 'Okuzimba kw\'empisa za Baganda' },
        { en: 'Royal burial chambers', lg: 'Ebifo eby\'okuzikkirwa obwakabaka' },
        { en: 'Cultural museum', lg: 'Ekyuka ky\'obuwangwa' }
      ],
      visitingHours: { en: '8:00 AM - 6:00 PM daily', lg: '8:00 AM - 6:00 PM buli lunaku' },
      entryFee: { en: 'Ugandans: 5,000 UGX | Foreigners: $15', lg: 'Baganda: 5,000 UGX | Abagwira: $15' },
      tourDuration: { en: '1-2 hours', lg: 'Essaawa 1-2' }
    },
    {
      id: '2',
      category: 'Royal',
      name: { en: 'Lubiri Palace (Mengo Palace)', lg: 'Lubiri (Twekobe)' },
      image: 'https://www.arcadiasafaris.com/wp-content/uploads/2024/03/Kabakas-Palace-4.jpg',
      location: { en: 'Mengo, Kampala', lg: 'Mengo, Kampala' },
      description: {
        en: 'The Lubiri Palace, also known as Twekobe, is the official residence of the Kabaka of Buganda. Built in 1922, the palace complex includes the royal residence, ceremonial grounds, and the historic underground prison where Kabaka Mutesa II was detained during the 1966 crisis. The palace offers guided tours that reveal the turbulent history of Buganda\'s monarchy.',
        lg: 'Lubiri, era ayitibwa Twekobe, y\'ekisulo ekya bulijjo ekya Kabaka wa Buganda. Yazimbibwa mu 1922, ekizimbe kino kyetoolodde ekisulo ky\'obwakabaka, ekifo ky\'emikolo, n\'ekkomera ky\'ebyafaayo wansi w\'ettaka mwe Kabaka Mutesa II yakwatibwa mu biseera by\'obuzibu bya 1966.'
      },
      highlights: [
        { en: 'Underground prison tour', lg: 'Okutambula mu kkomera wansi w\'ettaka' },
        { en: 'Royal ceremonial grounds', lg: 'Ekifo ky\'emikolo gy\'obwakabaka' },
        { en: 'Historical artifacts', lg: 'Ebintu by\'ebyafaayo' },
        { en: 'Royal guard demonstrations', lg: 'Okulabisilako kw\'abaserikale b\'obwakabaka' }
      ],
      visitingHours: { en: '9:00 AM - 5:00 PM daily', lg: '9:00 AM - 5:00 PM buli lunaku' },
      entryFee: { en: 'Ugandans: 10,000 UGX | Foreigners: $20', lg: 'Baganda: 10,000 UGX | Abagwira: $20' },
      tourDuration: { en: '2-3 hours', lg: 'Essaawa 2-3' }
    },
    {
      id: '3',
      category: 'Royal',
      name: { en: 'Bulange (Buganda Parliament)', lg: 'Bulange' },
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/18/6b/37/7c/lubiri-palace-in-mengo.jpg',
      location: { en: 'Mengo, Kampala', lg: 'Mengo, Kampala' },
      description: {
        en: 'Bulange is the administrative headquarters of the Kingdom of Buganda, housing the Lukiiko (Parliament) and the offices of the Katikkiro (Prime Minister). This impressive building was constructed in 1958 and serves as the center of Buganda\'s governance. Major kingdom events and announcements take place here.',
        lg: 'Bulange y\'ekitebe ky\'obufuzi bw\'Obwakabaka bwa Buganda, mweyali Lukiiko n\'awoofiisi za Katikkiro. Ekizimbe kino eky\'ekitalo kyazimbibwa mu 1958 era kikola ng\'ekitebe ky\'obufuzi bwa Buganda. Emikolo n\'okutendereza okw\'obwakabaka okukulu kukolebwa wano.'
      },
      highlights: [
        { en: 'Lukiiko (Parliament) chamber', lg: 'Ekisenge kya Lukiiko' },
        { en: 'Kingdom administrative offices', lg: 'Awoofiisi z\'obufuzi bw\'obwakabaka' },
        { en: 'Royal archives', lg: 'Ebiwandiiko by\'obwakabaka' },
        { en: 'Cultural exhibitions', lg: 'Okulabisilako obuwangwa' }
      ],
      visitingHours: { en: '8:00 AM - 5:00 PM (Weekdays)', lg: '8:00 AM - 5:00 PM (Ennaku z\'okukola)' },
      entryFee: { en: 'Free (guided tours available)', lg: 'Bwerere (okutambula n\'omukulembezi kuliwo)' },
      tourDuration: { en: '1 hour', lg: 'Essaawa 1' }
    },
    {
      id: '4',
      category: 'Sacred',
      name: { en: 'Naggalabi (Buddo Coronation Site)', lg: 'Naggalabi (Buddo)' },
      image: 'https://responsibletourismcompany.com/wp-content/uploads/2024/11/mini_magick20241112-32690-tr2jfn.jpg',
      location: { en: 'Buddo, Wakiso District', lg: 'Buddo, Wakiso' },
      description: {
        en: 'Naggalabi in Buddo is the sacred coronation site where all 36 Kabakas of Buganda have been crowned. This ancient hill is believed to be where Kabaka Kintu, the founder of Buganda, performed the first coronation rituals. The site features sacred shrines and holds deep spiritual significance for the kingdom.',
        lg: 'Naggalabi e Buddo y\'ekifo ekitukuvu eky\'okutikkibwa mwe Bakabaka bonna 36 ba Buganda batikkiddwa. Olusozi luno olw\'edda lukiririzibwa okuba we Kabaka Kintu, eyatandise Buganda, yakoledde emikolo egy\'okutikkibwa egyasooka. Ekifo kirabika ebifo ebitukuvu era kiriko omugaso munene ogw\'omwoyo eri obwakabaka.'
      },
      highlights: [
        { en: 'Ancient coronation grounds', lg: 'Ekifo eky\'okutikkibwa eky\'edda' },
        { en: 'Sacred shrines', lg: 'Ebifo ebitukuvu' },
        { en: 'Traditional rituals site', lg: 'Ekifo eky\'emikolo gy\'empisa' },
        { en: 'Panoramic hilltop views', lg: 'Okulabirako ku ntikko y\'olusozi' }
      ],
      visitingHours: { en: '7:00 AM - 6:00 PM daily', lg: '7:00 AM - 6:00 PM buli lunaku' },
      entryFee: { en: 'Ugandans: 3,000 UGX | Foreigners: $10', lg: 'Baganda: 3,000 UGX | Abagwira: $10' },
      tourDuration: { en: '1-2 hours', lg: 'Essaawa 1-2' }
    },
    {
      id: '5',
      category: 'Sacred',
      name: { en: 'Wamala Tombs', lg: 'Amasiro g\'e Wamala' },
      image: 'https://www.ugandasafaristours.com/wp-content/uploads/2021/11/2-750x450.jpg',
      location: { en: 'Nansana, Wakiso District', lg: 'Nansana, Wakiso' },
      description: {
        en: 'The Wamala Tombs house the remains of Kabaka Suuna II, the 29th King of Buganda who ruled from 1836 to 1856. This sacred site offers insight into pre-colonial Buganda and features traditional Ganda architecture. Kabaka Suuna II is remembered for expanding the kingdom and being the father of Kabaka Mutesa I.',
        lg: 'Amasiro g\'e Wamala gaziikiddwamu omulambo gwa Kabaka Suuna II, Kabaka ow\'29 wa Buganda eyafuga okuva 1836 okutuuka 1856. Ekifo kino ekitukuvu kiwa okumanya ku Buganda ey\'emabega era kirabika eby\'okuzimba eby\'empisa za Baganda.'
      },
      highlights: [
        { en: 'Pre-colonial Buganda architecture', lg: 'Eby\'okuzimba bya Buganda ey\'emabega' },
        { en: 'Traditional royal tomb', lg: 'Amasiro g\'obwakabaka ag\'empisa' },
        { en: 'Spiritual custodians', lg: 'Abakuumi ab\'omwoyo' },
        { en: 'Historical narratives', lg: 'Ennyiriri z\'ebyafaayo' }
      ],
      visitingHours: { en: '8:00 AM - 5:00 PM daily', lg: '8:00 AM - 5:00 PM buli lunaku' },
      entryFee: { en: 'Ugandans: 3,000 UGX | Foreigners: $8', lg: 'Baganda: 3,000 UGX | Abagwira: $8' },
      tourDuration: { en: '1 hour', lg: 'Essaawa 1' }
    },
    {
      id: '6',
      category: 'Historical',
      name: { en: 'Uganda Museum', lg: 'Ekyuka kya Uganda' },
      image: 'https://www.lakemburoparkuganda.com/wp-content/uploads/2022/10/Cult2-678x381-1.jpg',
      location: { en: 'Kira Road, Kampala', lg: 'Oluguudo Kira, Kampala' },
      description: {
        en: 'The Uganda Museum is the oldest and largest museum in East Africa, featuring extensive collections of Buganda cultural artifacts, traditional musical instruments, archaeological findings, and ethnographic displays. The museum offers valuable insights into the history and culture of Buganda and Uganda as a whole.',
        lg: 'Ekyuka kya Uganda kye kyuka ekikadde era ekisinga obunene mu Africa ey\'Ebuvanjuba, n\'ebikatale eby\'ebintu by\'obuwangwa bwa Buganda, ebikozesebwa by\'ennyimba ez\'empisa, ebyazuulwa eby\'ebyafaayo, n\'okulabisilako eby\'ebyobuntu. Ekyuka kiwa okumanya eby\'omugaso ku byafaayo n\'obuwangwa bwa Buganda ne Uganda yonna.'
      },
      highlights: [
        { en: 'Traditional musical instruments', lg: 'Ebikozesebwa by\'ennyimba ez\'empisa' },
        { en: 'Royal regalia displays', lg: 'Okulabisilako ebyobwakabaka' },
        { en: 'Archaeological artifacts', lg: 'Ebintu by\'ebyafaayo ebyazuulwa' },
        { en: 'Cultural demonstrations', lg: 'Okulabisilako obuwangwa' }
      ],
      visitingHours: { en: '10:00 AM - 6:00 PM (Closed Mondays)', lg: '10:00 AM - 6:00 PM (Muziiba Bbalaza)' },
      entryFee: { en: 'Ugandans: 5,000 UGX | Foreigners: $10', lg: 'Baganda: 5,000 UGX | Abagwira: $10' },
      tourDuration: { en: '2-3 hours', lg: 'Essaawa 2-3' }
    },
    {
      id: '7',
      category: 'Historical',
      name: { en: 'Namugongo Martyrs Shrine', lg: 'Ekifo ky\'Abawoofuzi e Namugongo' },
      image: 'https://www.safaris-uganda.com/wp-content/uploads/2023/04/namugongo.jpg',
      location: { en: 'Namugongo, Kampala', lg: 'Namugongo, Kampala' },
      description: {
        en: 'The Namugongo Martyrs Shrine commemorates the 45 Anglican and Catholic martyrs who were executed between 1885 and 1887 during the reign of Kabaka Mwanga II. The shrine attracts millions of pilgrims annually, especially on June 3rd (Martyrs\' Day). It represents an important chapter in Buganda\'s religious history.',
        lg: 'Ekifo ky\'Abawoofuzi e Namugongo kikijukira abawoofuzi 45 ab\'Ekkanisa y\'e Bungereza n\'ab\'Ekakiituliki abaattibwa wakati wa 1885 ne 1887 mu bufuzi bwa Kabaka Mwanga II. Ekifo kino kisika abalamya obukadde bwa miriyoni buli mwaka, ennyo ennyo nga 3 Jjuuni (Olunaku lw\'Abawoofuzi).'
      },
      highlights: [
        { en: 'Martyrdom memorial', lg: 'Ekijjukizo ky\'abawoofuzi' },
        { en: 'Basilica and shrines', lg: 'Basilika n\'ebifo ebitukuvu' },
        { en: 'Historical museum', lg: 'Ekyuka ky\'ebyafaayo' },
        { en: 'Annual pilgrimage site', lg: 'Ekifo eky\'okulamya obwa buli mwaka' }
      ],
      visitingHours: { en: 'Open 24 hours', lg: 'Kibulikwa essaawa 24' },
      entryFee: { en: 'Free', lg: 'Bwerere' },
      tourDuration: { en: '1-2 hours', lg: 'Essaawa 1-2' }
    },
    {
      id: '8',
      category: 'Natural',
      name: { en: 'Ssese Islands', lg: 'Bizinga by\'e Ssese' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQpcgFa_BfxE2D37E0BL28ymt1J48UI0ofQ&s',
      location: { en: 'Lake Victoria, Kalangala District', lg: 'Ennyanja Nalubaale, Kalangala' },
      description: {
        en: 'The Ssese Islands are a group of 84 islands in Lake Victoria (Nalubaale), forming one of Buganda\'s 18 counties. These tropical islands offer pristine beaches, lush rainforests, and unique wildlife. Historically, the islands were important for the Kabaka\'s royal fleet and remain culturally significant to Buganda.',
        lg: 'Bizinga by\'e Ssese biriko obuzinga 84 mu Nnyanja Nalubaale, era bikola essaza limu ku masaza 18 ga Buganda. Ebizinga bino eby\'ekyewawa biriko embalama ennungi, ebibira ebinyiivu, n\'ebisolo eby\'enjawulo. Mu byafaayo, ebizinga byali bya mugaso nnyo eri emigooba gy\'obwakabaka era bikyali by\'omugaso mu buwangwa bwa Buganda.'
      },
      highlights: [
        { en: 'Pristine beaches', lg: 'Embalama ennungi' },
        { en: 'Forest hiking trails', lg: 'Amakubo ag\'okutambulirako mu kibira' },
        { en: 'Bird watching', lg: 'Okulaba ennyonyi' },
        { en: 'Traditional fishing villages', lg: 'Ebyalo by\'abavubi ab\'empisa' }
      ],
      visitingHours: { en: 'Accessible by ferry daily', lg: 'Okutukka ne ssi buli lunaku' },
      entryFee: { en: 'Ferry: 20,000 UGX (one way)', lg: 'Ssi: 20,000 UGX (oluguudo olumu)' },
      tourDuration: { en: '1-3 days recommended', lg: 'Ennaku 1-3 zisasinzibwa' }
    },
    {
      id: '9',
      category: 'Natural',
      name: { en: 'Kabaka\'s Lake', lg: 'Ennyanja ya Kabaka' },
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Kabaka%27s_lake_in_Uganda.jpg',
      location: { en: 'Ndeeba, Kampala', lg: 'Ndeeba, Kampala' },
      description: {
        en: 'Kabaka\'s Lake is an artificial lake created by Kabaka Mwanga II in the late 19th century for defense and water supply purposes. Today, it is being developed as a recreational and eco-tourism destination. The lake covers about 2.5 square kilometers and is the largest man-made lake in East Africa.',
        lg: 'Ennyanja ya Kabaka y\'ennyanja eya bulimu eyakolebwa Kabaka Mwanga II mu nkomerero y\'ekisera ky\'emyaka 1800 olw\'okwekuuma n\'okufuna amazzi. Olweelero, etandikibwa okufuuka ekifo eky\'okwesanyusizamu n\'obulambuze bw\'obutonde. Ennyanja ekwata kilomita 2.5 era y\'ennyanja eya bulimu esinga obunene mu Africa ey\'Ebuvanjuba.'
      },
      highlights: [
        { en: 'Scenic lake views', lg: 'Okulaba ennyanja' },
        { en: 'Bird watching', lg: 'Okulaba ennyonyi' },
        { en: 'Walking trails', lg: 'Amakubo ag\'okutambulirako' },
        { en: 'Historical significance', lg: 'Omugaso gw\'ebyafaayo' }
      ],
      visitingHours: { en: '6:00 AM - 6:00 PM daily', lg: '6:00 AM - 6:00 PM buli lunaku' },
      entryFee: { en: 'Ugandans: 2,000 UGX | Foreigners: $5', lg: 'Baganda: 2,000 UGX | Abagwira: $5' },
      tourDuration: { en: '1-2 hours', lg: 'Essaawa 1-2' }
    },
    {
      id: '10',
      category: 'Historical',
      name: { en: 'Muteesa I Royal University', lg: 'Yunivaasite ya Muteesa I' },
      image: 'https://masakacity.go.ug/sites/default/files/2023-04/The_Administration_Block_viewed_from_the_Engineering_facility._This_block_houses_the_VC%2C_DVC_and_other_administrative_offices.jpg',
      location: { en: 'Kirumba, Masaka Road', lg: 'Kirumba, Oluguudo Masaka' },
      description: {
        en: 'Muteesa I Royal University is a premier institution established by the Kingdom of Buganda in 2007. Named after Kabaka Mutesa I, the university represents Buganda\'s commitment to education and development. The beautiful campus blends modern facilities with traditional Ganda architectural elements.',
        lg: 'Yunivaasite ya Muteesa I y\'ettendekero ery\'okusooka eryatandikibwa Obwakabaka bwa Buganda mu 2007. Eyayitibwa erinnya lya Kabaka Mutesa I, yunivaasite eriragira okwewayo kwa Buganda eri enjigiriza n\'enkulaakulana. Kampaasi ennungi ekwataganya ebikozesebwa eby\'omulembe n\'eby\'okuzimba eby\'empisa za Baganda.'
      },
      highlights: [
        { en: 'Modern campus facilities', lg: 'Ebikozesebwa bya kampaasi eby\'omulembe' },
        { en: 'Traditional architecture', lg: 'Okuzimba kw\'empisa' },
        { en: 'Cultural center', lg: 'Ekitebe ky\'obuwangwa' },
        { en: 'Royal heritage', lg: 'Obusika bw\'obwakabaka' }
      ],
      visitingHours: { en: 'Campus tours by appointment', lg: 'Okutambula ku kampaasi n\'okulaga mu maaso' },
      entryFee: { en: 'Free (guided tours)', lg: 'Bwerere (okutambula n\'omukulembezi)' },
      tourDuration: { en: '1-2 hours', lg: 'Essaawa 1-2' }
    }
  ]

  const filteredLandmarks = activeCategory === 'All' 
    ? landmarks 
    : landmarks.filter(l => l.category === activeCategory)

  const handleBookTour = () => {
    window.open(tourCompanyUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t({ en: 'Explore Buganda', lg: 'Zuula Buganda' })}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
            {t({ 
              en: 'Discover sacred sites, royal palaces, and natural wonders of the Kingdom of Buganda', 
              lg: 'Zuula ebifo ebitukuvu, amayumba g\'obwakabaka, n\'ebyewuunyo eby\'obutonde by\'Obwakabaka bwa Buganda' 
            })}
          </p>
          <button
            onClick={handleBookTour}
            className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition transform hover:scale-105 shadow-lg"
          >
            {t({ en: 'Book a Tour Now', lg: 'Wandiika Okutambula Kati' })}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t({ en: 'Cultural Tourism in Buganda', lg: 'Obulambuze bw\'Obuwangwa mu Buganda' })}
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-8">
            {t({ 
              en: 'Buganda offers a rich tapestry of cultural experiences, from ancient royal tombs to vibrant traditional ceremonies. Our landmarks tell the story of over 600 years of history, making Buganda one of the most fascinating cultural destinations in Africa.',
              lg: 'Buganda ewa obulambuze obugagga obw\'obuwangwa, okuva mu masiro g\'obwakabaka ag\'edda okutuuka ku mikolo gy\'empisa egy\'amaanyi. Ebifo byaffe binnyumya ennyiriri y\'ebyafaayo eby\'emyaka esukka mu 600, era kifuula Buganda ekimu ku bifo eby\'obuwangwa ebisinga okwetaagisa mu Africa.'
            })}
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-emerald-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">{t({ en: 'Sacred Sites', lg: 'Ebifo Ebitukuvu' })}</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3</div>
              <div className="text-sm text-gray-600">{t({ en: 'UNESCO Sites', lg: 'Ebifo bya UNESCO' })}</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">600+</div>
              <div className="text-sm text-gray-600">{t({ en: 'Years of History', lg: 'Emyaka gy\'Ebyafaayo' })}</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">18</div>
              <div className="text-sm text-gray-600">{t({ en: 'Counties to Explore', lg: 'Amasaza Ag\'okuzuula' })}</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {t(category.name)}
            </button>
          ))}
        </div>

        {/* Landmarks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredLandmarks.map(landmark => (
            <div 
              key={landmark.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={landmark.image} 
                  alt={t(landmark.name)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1580894732930-0babd100d356?w=800&h=400&fit=crop'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-emerald-500/80 text-white text-xs rounded-full mb-2">
                    {t(categories.find(c => c.id === landmark.category)?.name || { en: landmark.category, lg: landmark.category })}
                  </span>
                  <h3 className="text-xl font-bold text-white">{t(landmark.name)}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{t(landmark.location)}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{t(landmark.description)}</p>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedLandmark(landmark)}
                    className="text-emerald-600 font-medium text-sm flex items-center gap-1 hover:text-emerald-700"
                  >
                    {t({ en: 'View Details', lg: 'Laba Ebisingawo' })}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleBookTour}
                    className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg font-medium hover:bg-emerald-700 transition"
                  >
                    {t({ en: 'Book Tour', lg: 'Wandiika' })}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t({ en: 'Popular Tour Packages', lg: 'Ebisanyizo by\'Okutambula Ebimanyiddwa' })}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t({ en: 'Royal Heritage Tour', lg: 'Okutambula kw\'Obusika bw\'Obwakabaka' })}</h3>
              <p className="text-gray-600 mb-4">{t({ en: 'Visit Kasubi Tombs, Lubiri Palace, and Bulange in one day. Experience the heart of Buganda\'s monarchy.', lg: 'Kyalira Amasiro g\'e Kasubi, Lubiri, ne Bulange mu lunaku lumu. Manya omutima gw\'obwakabaka bwa Buganda.' })}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>⏱️ {t({ en: 'Full Day', lg: 'Olunaku Lwonna' })}</span>
                <span>👥 {t({ en: 'Group/Private', lg: 'Ekibinja/Ekyama' })}</span>
              </div>
              <button
                onClick={handleBookTour}
                className="w-full py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition"
              >
                {t({ en: 'Book This Tour', lg: 'Wandiika Okutambula Kuno' })}
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-100 relative">
              <div className="absolute -top-3 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                {t({ en: 'Most Popular', lg: 'Okimanyiddwa' })}
              </div>
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t({ en: 'Sacred Sites Tour', lg: 'Okutambula kw\'Ebifo Ebitukuvu' })}</h3>
              <p className="text-gray-600 mb-4">{t({ en: 'Explore Naggalabi Coronation Site, Wamala Tombs, and Namugongo Martyrs Shrine.', lg: 'Zuula Naggalabi, Amasiro g\'e Wamala, n\'Ekifo ky\'Abawoofuzi e Namugongo.' })}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>⏱️ {t({ en: 'Full Day', lg: 'Olunaku Lwonna' })}</span>
                <span>👥 {t({ en: 'Group/Private', lg: 'Ekibinja/Ekyama' })}</span>
              </div>
              <button
                onClick={handleBookTour}
                className="w-full py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition"
              >
                {t({ en: 'Book This Tour', lg: 'Wandiika Okutambula Kuno' })}
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏝️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t({ en: 'Ssese Islands Getaway', lg: 'Okutambula e Bizinga by\'e Ssese' })}</h3>
              <p className="text-gray-600 mb-4">{t({ en: 'Escape to the tropical Ssese Islands in Lake Victoria. Beaches, forests, and traditional villages await.', lg: 'Ddukira ku Bizinga by\'e Ssese eby\'ekyewawa mu Nnyanja Nalubaale. Embalama, ebibira, n\'ebyalo by\'empisa bikuulinze.' })}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>⏱️ {t({ en: '2-3 Days', lg: 'Ennaku 2-3' })}</span>
                <span>👥 {t({ en: 'Group/Private', lg: 'Ekibinja/Ekyama' })}</span>
              </div>
              <button
                onClick={handleBookTour}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
              >
                {t({ en: 'Book This Tour', lg: 'Wandiika Okutambula Kuno' })}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedLandmark && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedLandmark(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedLandmark.image} 
                alt={t(selectedLandmark.name)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1580894732930-0babd100d356?w=800&h=400&fit=crop'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button
                onClick={() => setSelectedLandmark(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm rounded-full mb-2">
                  {t(categories.find(c => c.id === selectedLandmark.category)?.name || { en: selectedLandmark.category, lg: selectedLandmark.category })}
                </span>
                <h2 className="text-3xl font-bold text-white">{t(selectedLandmark.name)}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{t(selectedLandmark.location)}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{t(selectedLandmark.description)}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="text-sm text-emerald-600 font-medium mb-1">{t({ en: 'Visiting Hours', lg: 'Essaawa z\'Okukyala' })}</div>
                  <div className="text-gray-900">{t(selectedLandmark.visitingHours)}</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="text-sm text-emerald-600 font-medium mb-1">{t({ en: 'Entry Fee', lg: 'Ssente z\'Okuyingira' })}</div>
                  <div className="text-gray-900">{t(selectedLandmark.entryFee)}</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="text-sm text-emerald-600 font-medium mb-1">{t({ en: 'Tour Duration', lg: 'Obudde bw\'Okutambula' })}</div>
                  <div className="text-gray-900">{t(selectedLandmark.tourDuration)}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t({ en: 'Highlights', lg: 'Ebisingibwako' })}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedLandmark.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                        ✓
                      </div>
                      <span className="text-gray-700">{t(highlight)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleBookTour}
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t({ en: 'Book a Tour to This Site', lg: 'Wandiika Okutambula ku Kifo Kino' })}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t({ en: 'Ready to Explore Buganda?', lg: 'Wetegese Okuzuula Buganda?' })}
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Contact our partner tour company to plan your perfect cultural adventure. Customized tours available for individuals, families, and groups.', 
              lg: 'Tuukirira kompanyi y\'okutambula etukolerana okutegeka obulambuze bwo obw\'obuwangwa obulungi. Okutambula okutegekeddwa kuliwo eri abantu, amaka, n\'ebibinja.'
            })}
          </p>
          <button
            onClick={handleBookTour}
            className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition transform hover:scale-105 shadow-lg"
          >
            {t({ en: 'Book Your Tour Now', lg: 'Wandiika Okutambula Kwo Kati' })}
          </button>
        </div>
      </div>
    </div>
  )
}
