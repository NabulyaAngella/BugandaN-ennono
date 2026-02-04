import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useNavigate } from 'react-router-dom'

export default function LearnLuganda(){
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [showPlansModal, setShowPlansModal] = useState(false)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [showClanAssignment, setShowClanAssignment] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    purpose: '',
    email: ''
  })
  const [assignedClan, setAssignedClan] = useState(null)
  const [assignedName, setAssignedName] = useState(null)
  const [assignedGender, setAssignedGender] = useState(null)

  // Clans with their meanings and associated names
  const clans = [
    {
      id: 1,
      name: 'Ffumbe',
      totem: { en: 'Civet Cat', lg: 'Ffumbe' },
      meaning: { 
        en: 'The Ffumbe clan is known for their diplomatic skills and wisdom. Members are believed to be peacemakers and mediators in disputes.',
        lg: 'Ekika ky\'Effumbe kiyamaanyiddwa olw\'obukugu mu kutabaganya n\'amagezi. Abantu ab\'omu kika kino bakirizibwa okuba abatabaganya n\'okusalawo ensonga.'
      },
      maleNames: ['Kiwanuka', 'Mukasa', 'Ddungu', 'Walusimbi'],
      femaleNames: ['Namukasa', 'Nakato', 'Nakintu', 'Nalongo']
    },
    {
      id: 2,
      name: 'Ngeye',
      totem: { en: 'Colobus Monkey', lg: 'Ngeye' },
      meaning: { 
        en: 'The Ngeye clan members are known for their agility, intelligence, and adaptability. They are natural problem solvers.',
        lg: 'Abantu ab\'ekika ky\'Engeye bamanyiddwa olw\'obwangu, obwegendereza n\'okusobola okwetusia. Be bakugu mu kusalawo ebizibu.'
      },
      maleNames: ['Ssalongo', 'Kayiwa', 'Kato', 'Wasswa'],
      femaleNames: ['Babirye', 'Nakku', 'Nansubuga', 'Nassuna']
    },
    {
      id: 3,
      name: 'Mamba',
      totem: { en: 'Lungfish', lg: 'Mamba' },
      meaning: { 
        en: 'The Mamba clan is associated with water and fishing. Members are known for their patience and persistence.',
        lg: 'Ekika ky\'Emamba kiyingiziddwa mu mazzi n\'okuvuba. Abantu ab\'omu kika kino bamanyiddwa olw\'obugumiikiriza n\'okugumira.'
      },
      maleNames: ['Kityo', 'Nsubuga', 'Mayanja', 'Musoke'],
      femaleNames: ['Nakityo', 'Namuyanja', 'Namusoke', 'Nanteza']
    },
    {
      id: 4,
      name: 'Mpologoma',
      totem: { en: 'Lion', lg: 'Mpologoma' },
      meaning: { 
        en: 'The Mpologoma clan symbolizes royalty and leadership. Members are brave, strong, and natural leaders.',
        lg: 'Ekika ky\'Empologoma kiraga obwakabaka n\'obukulembeze. Abantu bagumu, ba maanyi era bakulembeze b\'edda.'
      },
      maleNames: ['Ssekabaka', 'Kiweewa', 'Ssemakula', 'Kaggwa'],
      femaleNames: ['Nabbanja', 'Nakaggwa', 'Nambi', 'Nassozi']
    },
    {
      id: 5,
      name: 'Ngabi',
      totem: { en: 'Bushbuck', lg: 'Ngabi' },
      meaning: { 
        en: 'The Ngabi clan is known for their grace and gentleness. Members are artistic and culturally inclined.',
        lg: 'Ekika ky\'Engabi kimanyiddwa olw\'obukusa n\'obwegendereza. Abantu ba mikono egy\'emikisa era abaweereza obuwangwa.'
      },
      maleNames: ['Kiggundu', 'Ssekitto', 'Mulwana', 'Ssendawula'],
      femaleNames: ['Nakiggundu', 'Nabirye', 'Namulwana', 'Nansamba']
    },
    {
      id: 6,
      name: 'Nvuma',
      totem: { en: 'Drum', lg: 'Nvuma' },
      meaning: { 
        en: 'The Nvuma clan represents music and celebration. Members are joyful, expressive, and culturally vibrant.',
        lg: 'Ekika ky\'Envuma kiyimiirira ennyimba n\'okujaguza. Abantu ba ssanyu, boogera amazima era ba buwangwa obulungi.'
      },
      maleNames: ['Kibuuka', 'Ssemanda', 'Lutalo', 'Kalema'],
      femaleNames: ['Nakibuuka', 'Nakalema', 'Nanvuma', 'Namatovu']
    }
  ]

  const purposes = [
    { value: 'tourist', label: { en: 'Tourist/Travel', lg: 'Omulambuzi/Okutambula' } },
    { value: 'hobby', label: { en: 'Personal Interest/Hobby', lg: 'Okwagala/Ebyokunyumirwamu' } },
    { value: 'heritage', label: { en: 'Connect with Heritage', lg: 'Okwegatta n\'obulombolombo' } },
    { value: 'work', label: { en: 'Work/Business', lg: 'Omulimu/Bizinensi' } },
    { value: 'academic', label: { en: 'Academic Research', lg: 'Okunoonyereza' } },
    { value: 'marriage', label: { en: 'Marriage/Family', lg: 'Obufumbo/Amaka' } }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFreePlanClick = () => {
    setShowPlansModal(false)
    setShowRegistrationForm(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Randomly assign a clan
    const randomClan = clans[Math.floor(Math.random() * clans.length)]
    
    // Use the selected sex to pick a gender-appropriate name
    const sex = formData.sex || 'male' // default to male if not provided
    const isMale = sex === 'male'
    const namesList = isMale ? randomClan.maleNames : randomClan.femaleNames
    const randomName = namesList[Math.floor(Math.random() * namesList.length)]
    
    setAssignedClan(randomClan)
    setAssignedName(randomName)
    setAssignedGender(isMale ? 'male' : 'female')
    setShowRegistrationForm(false)
    setShowClanAssignment(true)
  }

  const handleStartLearning = () => {
    // Navigate to verification page with user data
    navigate('/verify-email', {
      state: {
        name: formData.name,
        email: formData.email,
        age: formData.age,
        purpose: formData.purpose,
        assignedName: assignedName,
        assignedClan: assignedClan
      }
    })
  }

  const lessons = [
    {
      id: '1',
      title: { en: 'Basic Greetings', lg: 'Okukwasaganya' },
      content: { 
        en: 'Learn essential greetings like "Oli otya?" (How are you?) and "Gyebale" (Thank you).', 
        lg: 'Yiga okukwasaganya ng\'okubuuza "Oli otya?" n\'okwebaza "Gyebale".' 
      }
    },
    {
      id: '2',
      title: { en: 'Numbers & Counting', lg: 'Ennamba n\'Okubala' },
      content: { 
        en: 'Master counting from 1 to 100 in Luganda.', 
        lg: 'Yiga okubala okuva ku 1 okutuuka ku 100 mu Luganda.' 
      }
    },
    {
      id: '3',
      title: { en: 'Common Phrases', lg: 'Ebigambo Ebya Bulijjo' },
      content: { 
        en: 'Everyday expressions used in conversation.', 
        lg: 'Ebigambo ebikozesebwa buli lunaku mu kwogera.' 
      }
    },
    {
      id: '4',
      title: { en: 'Family Terms', lg: 'Amannya g\'ab\'omu maka' },
      content: { 
        en: 'Learn words for mother (maama), father (taata), and other family members.', 
        lg: 'Yiga amannya ng\'omu maama, taata n\'abalala ab\'omu maka.' 
      }
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-royal-500 to-royal-700 text-white rounded-xl p-8 md:p-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t({ en: 'Learn Luganda', lg: 'Yiga Oluganda' })}
        </h1>
        <p className="text-lg md:text-xl text-royal-100">
          {t({ 
            en: 'Master the beautiful language of the Baganda people through interactive lessons and cultural insights.', 
            lg: 'Yiga olulimi olulungi olw\'Abaganda ng\'oyita mu masomo ag\'enjawulo n\'okumanya obuwangwa.' 
          })}
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {t({ en: 'Why Learn Luganda?', lg: 'Lwaki oyiga Oluganda?' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t({ 
            en: 'Luganda is the most widely spoken indigenous language in Uganda, with over 5 million speakers. Learning Luganda opens doors to understanding Buganda culture, proverbs (engero), and traditions that have been passed down for generations.', 
            lg: 'Oluganda lwe lulimi olw\'obuzaaliranwa olukyogerwako ennyo mu Uganda, nga lulina abantu abasukka mu bukadde 5 abalwogera. Okuyiga Oluganda kukuggulira emiryango gy\'okutegeera obuwangwa bwa Buganda, engero, n\'empisa eziyisibwa mu mirembe n\'emirembe.' 
          })}
        </p>
      </div>

      {/* Lesson Cards */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {t({ en: 'Start Learning', lg: 'Tandika Okuyiga' })}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {lessons.map(lesson => (
            <div key={lesson.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {t(lesson.title)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(lesson.content)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gold-50 rounded-xl p-8 border border-gold-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {t({ en: 'Learning Resources', lg: 'Ebyenjigiriza' })}
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{t({ en: 'Interactive audio lessons with native speakers', lg: 'Amasomo ag\'amaloboozi n\'abantu abazaalibwa oluganda' })}</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{t({ en: 'Downloadable vocabulary lists and grammar guides', lg: 'Olukalala lw\'ebigambo n\'ebitabo by\'enkola y\'olulimi' })}</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{t({ en: 'Cultural context and traditional proverbs (Engero)', lg: 'Ebikwata ku buwangwa n\'engero ez\'edda' })}</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{t({ en: 'Practice exercises and quizzes', lg: 'Ebibuuzo n\'okwekenneenya' })}</span>
          </li>
        </ul>

        <div className="mt-6">
          <button 
            onClick={() => setShowPlansModal(true)}
            className="px-8 py-3 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-royal-600 hover:to-royal-700 transition-all"
          >
            {t({ en: 'Start Your First Lesson', lg: 'Tandika Essomo Lyo Eddaisooka' })}
          </button>
        </div>
        <div className="mt-3 text-sm text-gray-600">
          {t({ en: 'Already have an account?', lg: 'Olina akawunti?' })}
          <button
            onClick={() => navigate('/signin')}
            className="text-royal-600 font-semibold hover:underline ml-2"
          >
            {t({ en: 'Sign in', lg: 'Yingira' })}
          </button>
        </div>
      </div>

      {/* Pricing Plans Modal */}
      {showPlansModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowPlansModal(false)}>
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {t({ en: 'Choose Your Plan', lg: 'Londa Enkola Yo' })}
              </h2>
              <button 
                onClick={() => setShowPlansModal(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Plans Grid */}
            <div className="p-6 grid md:grid-cols-3 gap-6">
              {/* Free Plan */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {t({ en: 'Free Plan', lg: 'Enkola ya Bwereere' })}
                  </h3>
                  <div className="text-4xl font-bold text-royal-600 mb-2">
                    UGX 0
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t({ en: 'Forever free', lg: 'Bwereere ennaku zonna' })}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Basic text lessons', lg: 'Amasomo ga bulijjo' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Vocabulary lists', lg: 'Olukalala lw\'ebigambo' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Practice quizzes', lg: 'Ebibuuzo by\'okwekenneenya' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-400 line-through">{t({ en: 'Audio lessons', lg: 'Amasomo ag\'amaloboozi' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-400 line-through">{t({ en: 'Video tutorials', lg: 'Ebisomo bya vidiyo' })}</span>
                  </li>
                </ul>

                <button 
                  onClick={handleFreePlanClick}
                  className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
                >
                  {t({ en: 'Get Started', lg: 'Tandika' })}
                </button>
              </div>

              {/* Premium Plan */}
              <div className="border-2 border-gold-400 rounded-xl p-6 relative hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t({ en: 'Popular', lg: 'Ekikozesebwa Ennyo' })}
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {t({ en: 'Premium Plan', lg: 'Enkola ey\'Ekitiibwa' })}
                  </h3>
                  <div className="text-4xl font-bold text-gold-600 mb-2">
                    UGX 50,000
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t({ en: 'Per month', lg: 'Buli mwezi' })}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'All Free Plan features', lg: 'Byonna ebiri mu nkola ya bwereere' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Audio lessons with native speakers', lg: 'Amasomo ag\'amaloboozi n\'abantu abazaalibwa oluganda' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Video tutorials', lg: 'Ebisomo bya vidiyo' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Downloadable resources', lg: 'Ebikozesebwa eby\'okuddira ku kompyuta' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Certificate of completion', lg: 'Satifikeeti y\'okumaliriza' })}</span>
                  </li>
                </ul>

                <button className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:shadow-lg hover:from-gold-600 hover:to-gold-700 transition">
                  {t({ en: 'Subscribe Now', lg: 'Weewandise Kati' })}
                </button>
              </div>

              {/* Lifetime Plan */}
              <div className="border-2 border-royal-400 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {t({ en: 'Lifetime Plan', lg: 'Enkola ey\'Emirembe Gyonna' })}
                  </h3>
                  <div className="text-4xl font-bold text-royal-600 mb-2">
                    UGX 500,000
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t({ en: 'One-time payment', lg: 'Okusasula omulundi gumu' })}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'All Premium features', lg: 'Byonna ebiri mu nkola ey\'ekitiibwa' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Lifetime access to all content', lg: 'Okufuna byonna emirembe gyonna' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Priority email support', lg: 'Obuyambi bw\'amazima bwa siimu' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: 'Access to future updates', lg: 'Okufuna ebintu ebipya ebirijja' })}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{t({ en: '1-on-1 tutoring sessions (4/year)', lg: 'Amasomo ag\'omuntu omu (4 buli mwaka)' })}</span>
                  </li>
                </ul>

                <button className="w-full py-3 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:from-royal-600 hover:to-royal-700 transition">
                  {t({ en: 'Get Lifetime Access', lg: 'Funa Okuyingira Emirembe Gyonna' })}
                </button>
              </div>
            </div>

            {/* Quick sign-in for returning users */}
            <div className="p-6 text-center text-sm text-gray-600">
              <p>
                  {t({ en: "Already have an account?", lg: "Olina akawunti?" })}
                  <button
                    onClick={() => { setShowPlansModal(false); navigate('/signin') }}
                    className="text-royal-600 font-semibold hover:underline ml-2"
                  >
                    {t({ en: 'Sign in', lg: 'Yingira' })}
                  </button>
                </p>
            </div>

          </div>
        </div>
      )}

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowRegistrationForm(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Form Header */}
            <div className="sticky top-0 bg-gradient-to-r from-royal-500 to-royal-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {t({ en: 'Join the Free Plan', lg: 'Yingira mu Nkola ya Bwereere' })}
                  </h2>
                  <p className="text-royal-100">
                    {t({ en: 'Tell us about yourself to get started', lg: 'Tubuulire ku ggwe okusobola okutandika' })}
                  </p>
                </div>
                <button 
                  onClick={() => setShowRegistrationForm(false)}
                  className="text-white hover:text-gray-200 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t({ en: 'Your Name', lg: 'Erinnya Lyo' })}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition"
                  placeholder={t({ en: 'Enter your full name', lg: 'Wandiika erinnya lyo eryokujjuza' })}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t({ en: 'Email Address', lg: 'Siimu' })}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition"
                  placeholder={t({ en: 'your.email@example.com', lg: 'siimu.yo@ekyokulabirako.com' })}
                />
              </div>

              {/* Age Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t({ en: 'Age', lg: 'Emyaka' })}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="120"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition"
                  placeholder={t({ en: 'Enter your age', lg: 'Wandiika emyaka gyo' })}
                />
              </div>

              {/* Purpose Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t({ en: 'Why do you want to learn Luganda?', lg: 'Lwaki oyagala okuyiga Oluganda?' })}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none transition"
                >
                  <option value="">{t({ en: 'Select a reason', lg: 'Londa ensonga' })}</option>
                  {purposes.map(purpose => (
                    <option key={purpose.value} value={purpose.value}>
                      {t(purpose.label)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sex Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t({ en: 'Select your sex', lg: 'Londa ekika kya ggwe' })}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="sex"
                      value="male"
                      checked={formData.sex === 'male'}
                      onChange={handleInputChange}
                      required
                      className="form-radio text-royal-600"
                    />
                    <span>{t({ en: 'Male', lg: 'Omunde' })}</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="sex"
                      value="female"
                      checked={formData.sex === 'female'}
                      onChange={handleInputChange}
                      required
                      className="form-radio text-royal-600"
                    />
                    <span>{t({ en: 'Female', lg: 'Omukazi' })}</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowRegistrationForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                >
                  {t({ en: 'Cancel', lg: 'Sazaamu' })}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:from-royal-600 hover:to-royal-700 transition"
                >
                  {t({ en: 'Continue', lg: 'Genda Mu Maaso' })}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Clan Assignment Modal */}
      {showClanAssignment && assignedClan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Celebration Header */}
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-8 rounded-t-2xl text-center">
              <div className="mb-4">
                <svg className="w-20 h-20 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-2">
                {t({ en: 'Congratulations!', lg: 'Tukusiimye!' })}
              </h2>
              <p className="text-xl text-gold-100">
                {t({ en: 'Welcome to the Buganda family', lg: 'Tukwaniriza mu maka ga Buganda' })}
              </p>
            </div>

            {/* Assignment Details */}
            <div className="p-8 space-y-6">
              {/* Greeting */}
              <div className="text-center pb-6 border-b border-gray-200">
                <p className="text-lg text-gray-700 mb-2">
                  {t({ en: 'Dear', lg: 'Omwagalwa' })} <span className="font-bold text-royal-600">{formData.name}</span>,
                </p>
                <p className="text-gray-600">
                  {t({ 
                    en: 'As you begin your journey to learn Luganda, we are honored to welcome you into our culture.',
                    lg: 'Nga otandika olugendo lwo lw\'okuyiga Oluganda, tuyitiridde okukwaniriza mu buwangwa bwaffe.'
                  })}
                </p>
              </div>

              {/* Luganda Name */}
              <div className="bg-royal-50 border-2 border-royal-200 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-royal-600 mb-2 uppercase tracking-wide">
                  {t({ en: 'Your Luganda Name', lg: 'Erinnya Lyo Ery\'Oluganda' })}
                </h3>
                <p className="text-3xl font-bold text-royal-700 mb-2">{assignedName}</p>
                {assignedGender && (
                  <p className="text-sm text-gray-600 mb-2">
                    {t({ en: 'Name type:', lg: 'Linnya liri:' })} <span className="font-semibold ml-1">{assignedGender === 'male' ? t({ en: 'Male', lg: 'Omunde' }) : t({ en: 'Female', lg: 'Omukazi' })}</span>
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {t({ 
                    en: 'This is your traditional Buganda name. Use it with pride as you learn our language!',
                    lg: 'Lino lye linnya lyo ery\'obulombolombo bwa Buganda. Likozese n\'ekitiibwa nga oyiga olulimi lwaffe!'
                  })}
                </p>
              </div>

              {/* Clan Information */}
              <div className="bg-gold-50 border-2 border-gold-200 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gold-700 mb-2 uppercase tracking-wide">
                  {t({ en: 'Your Clan (Ekika)', lg: 'Ekika Kyo' })}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦁</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{assignedClan.name}</p>
                    <p className="text-sm text-gray-600">
                      {t({ en: 'Totem:', lg: 'Omuziro:' })} {t(assignedClan.totem)}
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {t({ en: 'About Your Clan', lg: 'Ku Bikwata ku Kika Kyo' })}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t(assignedClan.meaning)}
                  </p>
                  {/* Names by gender */}
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">{t({ en: 'Names in this clan', lg: 'Amannya mu kika kino' })}</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <h6 className="text-xs font-semibold text-gray-600 mb-2">{t({ en: 'Male Names', lg: 'Amannya g\'ab\'omunde' })}</h6>
                        <ul className="space-y-1 text-sm">
                          {assignedClan.maleNames.map(n => (
                            <li key={n} className={`flex items-center justify-between ${n === assignedName ? 'font-bold text-royal-600' : ''}`}>
                              <span>{n}</span>
                              {n === assignedName && <span className="text-xs text-white bg-royal-600 px-2 py-0.5 rounded ml-2">{t({ en: 'Your name', lg: 'Erinnya lyo' })}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h6 className="text-xs font-semibold text-gray-600 mb-2">{t({ en: 'Female Names', lg: 'Amannya g\'ab\'omukazi' })}</h6>
                        <ul className="space-y-1 text-sm">
                          {assignedClan.femaleNames.map(n => (
                            <li key={n} className={`flex items-center justify-between ${n === assignedName ? 'font-bold text-royal-600' : ''}`}>
                              <span>{n}</span>
                              {n === assignedName && <span className="text-xs text-white bg-royal-600 px-2 py-0.5 rounded ml-2">{t({ en: 'Your name', lg: 'Erinnya lyo' })}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Info Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  {t({ en: 'Your Learning Profile', lg: 'Ebikukwatako mu kuyiga' })}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">{t({ en: 'Age:', lg: 'Emyaka:' })}</span>
                    <span className="ml-2 font-semibold text-gray-800">{formData.age}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">{t({ en: 'Purpose:', lg: 'Ensonga:' })}</span>
                    <span className="ml-2 font-semibold text-gray-800">
                      {t(purposes.find(p => p.value === formData.purpose)?.label || { en: formData.purpose, lg: formData.purpose })}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-600">{t({ en: 'Email:', lg: 'Siimu:' })}</span>
                    <span className="ml-2 font-semibold text-gray-800">{formData.email}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={handleStartLearning}
                  className="w-full px-8 py-4 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-bold text-lg rounded-lg hover:shadow-xl hover:from-royal-600 hover:to-royal-700 transition transform hover:-translate-y-0.5"
                >
                  {t({ en: 'Start Learning Now', lg: 'Tandika Okuyiga Kati' })}
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  {t({ 
                    en: 'A confirmation email has been sent to your inbox',
                    lg: 'Siimu ey\'okukakasa etumiddwa mu ssanduuko yo'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
