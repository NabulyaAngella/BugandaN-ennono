import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

export default function DashboardHome(){
  const { t } = useLanguage()

  const skills = [
    { name: 'Greetings', xp: 3, completed: true, color: 'from-blue-500 to-cyan-500' },
    { name: 'Numbers', xp: 5, completed: true, color: 'from-green-500 to-emerald-500' },
    { name: 'Family', xp: 4, completed: true, color: 'from-purple-500 to-indigo-500' },
    { name: 'Food', xp: 0, completed: false, color: 'from-gray-300 to-gray-400' },
    { name: 'Culture', xp: 0, completed: false, color: 'from-gray-300 to-gray-400' },
    { name: 'Phrases', xp: 0, completed: false, color: 'from-gray-300 to-gray-400' }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{t({ en: 'Continue your lessons', lg: 'Kola ku masomo go' })}</h1>
          <p className="text-sm text-gray-600 mt-2">{t({ en: 'Resume where you left off or choose a new lesson.', lg: 'Lowooza ku kifo gyokola okumaliriza oba lonna ku ssomo empya.' })}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">12</div>
            <div className="text-xs text-gray-500 mt-2">{t({ en: 'Level', lg: 'Obulamu' })}</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border text-sm text-gray-700 min-w-[140px]">
            <div className="font-semibold">{t({ en: 'Daily Goal', lg: 'Ebigendererwa bya buli lunaku' })}</div>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
              <div className="h-2 bg-royal-500 rounded-full" style={{ width: '70%' }} />
            </div>
            <div className="text-xs text-gray-500 mt-1">{t({ en: '10 XP left', lg: 'XP 10 wansi' })}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning Card */}
          <div className="bg-gradient-to-r from-royal-500 to-royal-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-royal-100 text-sm font-medium">{t({ en: 'CONTINUE LEARNING', lg: 'KOLA KU MASOMO' })}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold">{t({ en: 'Basic Greetings', lg: 'Okukwasaganya' })}</h2>
                <p className="text-royal-100 mt-2">{t({ en: '2/10 sections completed', lg: 'Ebitundu 2/10 byogezi' })}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-royal-400 rounded-full h-2 mt-4">
                  <div className="h-2 bg-white rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center bg-royal-400/30 rounded-lg p-3 min-w-[80px]">
                  <div className="text-xs text-royal-100">{t({ en: 'XP', lg: 'XP' })}</div>
                  <div className="font-bold text-lg">8</div>
                </div>
                <Link 
                  to="/dashboard/lessons" 
                  className="px-6 py-3 bg-white text-royal-600 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-md"
                >
                  {t({ en: 'Continue', lg: 'Kola' })}
                </Link>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t({ en: 'Available Skills', lg: 'Obukugu obulimu' })}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div 
                  key={skill.name} 
                  className={`bg-gradient-to-br ${skill.color} rounded-xl p-5 shadow-sm border border-gray-100 transition-transform hover:scale-105`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-sm opacity-90">{t({ en: 'Skill', lg: 'Obukugu' })}</div>
                      <div className="font-bold text-lg">{skill.name}</div>
                      <div className="text-xs opacity-80 mt-1">
                        {skill.completed ? t({ en: 'Unlocked', lg: 'Kyakule' }) : t({ en: 'Locked', lg: 'Kikyuse' })}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-white font-bold text-sm">
                        {skill.completed ? `${skill.xp} XP` : '—'}
                      </div>
                      <button 
                        className={`mt-3 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                          skill.completed 
                            ? 'bg-white text-gray-800 hover:bg-gray-50' 
                            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        }`}
                        disabled={!skill.completed}
                      >
                        {skill.completed ? t({ en: 'Practice', lg: 'Tandika' }) : t({ en: 'Locked', lg: 'Kikyuse' })}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Stats */}
        <aside className="space-y-6">
          {/* Streak Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span role="img" aria-label="streak" className="text-2xl">🔥</span>
              <div className="text-xs text-gray-500">{t({ en: 'Day Streak', lg: 'Ekisikirize' })}</div>
            </div>
            <div className="text-3xl font-bold text-orange-600">7</div>
            <div className="text-xs text-gray-500 mt-2">{t({ en: 'Keep it up!', lg: 'Kola bulungi!' })}</div>
          </div>

          {/* XP Progress */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-500">{t({ en: 'XP Progress', lg: 'Obukulembeze bwa XP' })}</div>
              <div className="text-xs font-semibold text-royal-600">60%</div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-royal-500 to-royal-600 rounded-full" style={{ width: '60%' }} />
            </div>
            <div className="text-sm text-gray-600 mt-2 text-center">{t({ en: '600 / 1000 XP', lg: '600 / 1000 XP' })}</div>
          </div>

          {/* Leaderboard */}
          <div className="bg-gradient-to-br from-royal-500 to-royal-600 rounded-xl p-6 text-white text-center shadow-lg">
            <div className="font-bold text-lg mb-2">{t({ en: 'Leaderboard', lg: 'Abaweereza' })}</div>
            <p className="text-royal-100 text-sm mb-4">{t({ en: 'See how you compare', lg: 'Laba engeri gyolimu' })}</p>
            <button className="px-6 py-2 bg-white text-royal-600 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
              {t({ en: 'View Ranking', lg: 'Laba Ennama' })}
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h4 className="font-semibold text-gray-900 mb-4">{t({ en: 'Today\'s Activity', lg: 'Ebikolebwa Lero' })}</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t({ en: 'Lessons completed', lg: 'Amasomo gomaze' })}</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t({ en: 'XP earned', lg: 'XP ezizanyiziddwa' })}</span>
                <span className="font-semibold text-royal-600">15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t({ en: 'Time spent', lg: 'Essawa ezikozeseddwa' })}</span>
                <span className="font-semibold">12min</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}