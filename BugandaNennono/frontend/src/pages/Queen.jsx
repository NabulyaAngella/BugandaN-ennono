import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import kabakaImg from '../images/nnabagereka.webp'

export default function Queen(){
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section with Image */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-700 rounded-2xl overflow-hidden mb-12 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative h-96 md:h-full">
            <img 
              src={'/images/nnabagereka.webp'}
              alt={t({ en: 'Nnabagereka Sylvia Nagginda', lg: 'Nnabagereka Sylvia Nagginda' })}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = kabakaImg }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gold-900/40 to-transparent"></div>
          </div>

          {/* Text Side */}
          <div className="p-8 md:p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t({ en: 'Nnabagereka Sylvia Nagginda', lg: 'Nnabagereka Sylvia Nagginda' })}
            </h1>
            <p className="text-xl text-gold-100 mb-6">
              {t({ en: 'The Nnabagereka (Queen) of Buganda', lg: 'Nnabagereka wa Buganda' })}
            </p>
            <div className="flex items-center gap-4 text-gold-100">
              <div>
                <p className="text-sm opacity-90">{t({ en: 'Married:', lg: 'Yawasizza:' })}</p>
                <p className="text-lg font-semibold">{t({ en: 'August 27, 1999', lg: 'August 27, 1999' })}</p>
              </div>
              <div className="w-px h-12 bg-gold-400"></div>
              <div>
                <p className="text-sm opacity-90">{t({ en: 'Role:', lg: 'Omulimu:' })}</p>
                <p className="text-lg font-semibold">{t({ en: 'Cultural Ambassador & Philanthropist', lg: 'Omulobanise w\'Obuwangwa & Omuyambi' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t({ en: 'Biography', lg: 'Ebyomulamwa' })}</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            {t({
              en: 'Nnabagereka Sylvia Nagginda is the wife of His Majesty Kabaka Ronald Muwenda Mutebi II. She has used her position to champion education, women\'s rights, and community development across Buganda and Uganda. An advocate for children and families, she leads several initiatives through the Nnabagereka Foundation.',
              lg: 'Nnabagereka Sylvia Nagginda ye mukyala wa Kabaka Ronald Muwenda Mutebi II. Akyusizza omwanya gwe okwetooloola mu by\'ebyenjigiriza, obuwala bw\'ab\'abasajja n\'ab\'abasajja, n\'enkulaakulana y\'abantu mu Buganda ne Uganda. Asigala asaba obulamu obw\'abaana n\'ab\'omu maka era ayitamu mu pulogulaamu ennyingi za Nnabagereka Foundation.'
            })}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t({
              en: 'Educated with a strong background in public service and civic engagement, Nnabagereka Sylvia has become a beloved figure known for her humility, compassion, and tireless work improving livelihoods.',
              lg: 'Yasomerezebwa mu by\'enjigiriza n\'okusooka mu by\'obuwanga, Nnabagereka Sylvia abeera omuntu akyamu era asanyufu, ateekwa obuyambi bw\'abantu era akola nga talina kwambala mu kutumbula obulamu bw\'abantu.'
            })}
          </p>
        </div>
      </div>

      {/* Patronages & Initiatives */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t({ en: 'Patronages & Initiatives', lg: 'Enteekateeka n\'Ebikolebwa' })}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t({ en: 'Nnabagereka Foundation', lg: 'Nnabagereka Foundation' })}</h3>
            <p className="text-gray-700">{t({ en: 'The foundation focuses on education, health, and the protection of children through community programs and partnerships.', lg: 'Foundation ey\'omu ey\'eyongedde ku by\'ebyenjigiriza, obujjanjabi, n\'okukuuma abaana.' })}</p>
          </div>

          <div className="bg-gradient-to-br from-royal-50 to-royal-100 border-2 border-royal-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t({ en: 'Advocacy & Education', lg: 'Okukuŋŋaanyiza & Ebyenjigiriza' })}</h3>
            <p className="text-gray-700">{t({ en: 'She champions increased access to schooling and maternal health services and supports community-driven projects that empower women and youth.', lg: 'Akyusizza okutumbula obuyigirize mu masomero, eby\'obujjanjabi by\'ab\'obuzadde, era ayamba mu misomo egiyamba abakazi n\'ab\'omu myaka.' })}</p>
          </div>
        </div>
      </div>

      {/* Personal Life */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t({ en: 'Personal Life', lg: 'Obulamu Bwe' })}</h2>
        <div className="bg-gradient-to-br from-gold-50 to-royal-50 rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t({ en: 'Family', lg: 'Omuryango' })}</h3>
              <p className="text-gray-700">{t({ en: 'Nnabagereka Sylvia is a devoted mother and partner to the Kabaka. She works with the royal family to support cultural events and social programs.', lg: 'Nnabagereka Sylvia ye nnyina asanyufu era mukyala wa Kabaka. Akola wamu n\'omu maka okusaba emikolo gy\'obuwangwa n\'enteekateeka z\'okusitula abantu.' })}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t({ en: 'Honors', lg: 'Obuteekateeka' })}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t({ en: 'Royal patron of education programs', lg: 'Omukulembeze w\'eby\'enjigiriza' })}</li>
                <li>• {t({ en: 'Supporter of child protection initiatives', lg: 'Ayamba mu kukuuma abaana' })}</li>
                <li>• {t({ en: 'International goodwill ambassador for culture', lg: 'Omuyambi w\'obuwangwa mu nsi y\'onna' })}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-4">{t({ en: 'Support the Nnabagereka Foundation', lg: 'Wagira ku Nnabagereka Foundation' })}</h2>
        <p className="text-xl text-gold-100 mb-6">{t({ en: 'Help us reach more children and communities through education and health programs.', lg: 'Tuwangule okutuusa ku baana bangi n\'ab\'omu mitya ku by\'enjigiriza n\'obujjanjabi.' })}</p>
        <button className="px-8 py-4 bg-royal-700 hover:bg-royal-800 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
          {t({ en: 'Learn how to help', lg: 'Wulira engeri yo kuyamba' })}
        </button>
      </div>
    </div>
  )
}
