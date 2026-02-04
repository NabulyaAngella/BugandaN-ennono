import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import lessonsData from '../data/lessons'

export default function Lessons() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Keep local categories for the sidebar; lessons come from shared data
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'book', color: 'from-royal-500 to-blue-600' },
    { id: 'basics', name: 'Basics', icon: 'alphabet', color: 'from-green-500 to-emerald-600' },
    { id: 'phrases', name: 'Common Phrases', icon: 'chat', color: 'from-purple-500 to-indigo-600' },
    { id: 'food', name: 'Food & Dining', icon: 'bowl', color: 'from-orange-500 to-red-500' },
    { id: 'travel', name: 'Travel', icon: 'plane', color: 'from-cyan-500 to-blue-500' },
    { id: 'family', name: 'Family & People', icon: 'family', color: 'from-pink-500 to-rose-500' }
  ]

  const lessons = lessonsData

  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)

  // Aggregate stats
  const totalXP = lessons.reduce((s, l) => s + (l.xp || 0), 0)
  const completedCount = lessons.filter(l => l.completed).length
  const courseCompletePercent = lessons.length ? Math.round(lessons.reduce((s, l) => s + (l.progress || 0), 0) / lessons.length) : 0

  const getLessonButtonText = (lesson) => {
    if (lesson.locked) return t({ en: 'Locked', lg: 'Kikyuse' })
    if (lesson.completed) return t({ en: 'Review', lg: 'Ddamu otunule' })
    if (lesson.progress > 0) return t({ en: 'Continue', lg: 'Kola' })
    return t({ en: 'Start', lg: 'Tandika' })
  }

  const getLessonButtonColor = (lesson) => {
    if (lesson.locked) return 'bg-gray-300 text-gray-500 cursor-not-allowed'
    if (lesson.completed) return 'bg-green-500 hover:bg-green-600 text-white'
    if (lesson.progress > 0) return 'bg-royal-500 hover:bg-royal-600 text-white'
    return 'bg-royal-500 hover:bg-royal-600 text-white'
  }

  // Render a small inline SVG icon by id. Uses currentColor so it adapts to surrounding color.
  const renderIcon = (name, className = 'w-5 h-5') => {
    const common = { className, 'aria-hidden': true }
    switch(name){
      case 'book':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6a2 2 0 012-2h13v14H5a2 2 0 01-2-2V6z" />
            <path d="M21 4h-1v14h1a1 1 0 001-1V5a1 1 0 00-1-1z" />
          </svg>
        )
      case 'alphabet':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 17l9-14 9 14" />
            <path d="M13 10h-6" />
          </svg>
        )
      case 'chat':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )
      case 'bowl':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 10a8 8 0 0016 0H4z" />
            <path d="M2 12h20v2a4 4 0 01-4 4H6a4 4 0 01-4-4v-2z" />
          </svg>
        )
      case 'plane':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.5 19.5L21 12 2.5 4.5 6 12 2.5 19.5z" />
          </svg>
        )
      case 'family':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0H5z" />
          </svg>
        )
      case 'wave':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 12c3-3 7-3 10 0s7 3 10 0" />
          </svg>
        )
      case 'numbers':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 3v7h7" />
            <path d="M17 21V10H7" />
          </svg>
        )
      case 'thought':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7a5 5 0 1110 0 4 4 0 11-8 0z" />
            <path d="M5 20a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>
        )
      case 'banana':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 3s-2 2-4 2-4-2-6 0-4 4-6 6-2 6-2 6 4 0 8-4 8-10 10-12z" />
          </svg>
        )
      case 'map':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6l6-2 6 2 6-2v13l-6 2-6-2-6 2V6z" />
          </svg>
        )
      case 'shopping':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 2l1 2h10l1-2H6zM3 6h18l-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2L3 6z" />
          </svg>
        )
      case 'plate':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 016 6H6a6 6 0 016-6z" />
          </svg>
        )
      default:
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        )
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t({ en: 'Lessons', lg: 'Amasomo' })}
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              {t({ en: 'Choose a lesson to continue learning Luganda', lg: 'Londa essomo okukomekerako okusoma Oluganda' })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border text-center min-w-[120px]">
              <div className="text-xs text-gray-500">{t({ en: 'Total XP', lg: 'XP Zoona' })}</div>
              <div className="font-bold text-royal-600 text-lg">{totalXP}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border text-center min-w-[120px]">
              <div className="text-xs text-gray-500">{t({ en: 'Lessons Completed', lg: 'Amasomo Gomaze' })}</div>
              <div className="font-bold text-green-600 text-lg">{completedCount}</div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-royal-500 to-royal-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-2">
                {t({ en: 'Your Learning Journey', lg: 'Olugendo lwo lw\'okusoma' })}
              </h2>
              <p className="text-royal-100">
                {t({ en: 'Complete lessons to unlock new skills and earn XP', lg: 'Maliriza amasomo okuggula obukugu obupya okuzanya XP' })}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{courseCompletePercent}%</div>
                <div className="text-xs text-royal-100">{t({ en: 'Course Complete', lg: 'Essomo limaze' })}</div>
              </div>
              <div className="w-32 bg-royal-400 rounded-full h-3">
                <div className="h-3 bg-white rounded-full" style={{ width: `${courseCompletePercent}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              {t({ en: 'Categories', lg: 'Enkula' })}
            </h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    selectedCategory === category.id
                      ? 'bg-royal-50 text-royal-600 border border-royal-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{renderIcon(category.icon, 'w-6 h-6')}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 pt-6 border-t">
              <h4 className="font-semibold text-gray-900 mb-3">
                {t({ en: 'Your Progress', lg: 'Enkulaakulana yo' })}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{t({ en: 'Total Lessons', lg: 'Amasomo goona' })}</span>
                  <span className="font-semibold">{lessons.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{t({ en: 'Completed', lg: 'Gimaze' })}</span>
                  <span className="font-semibold text-green-600">
                    {lessons.filter(l => l.completed).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{t({ en: 'In Progress', lg: 'Gikola' })}</span>
                  <span className="font-semibold text-royal-600">
                    {lessons.filter(l => l.progress > 0 && !l.completed).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{t({ en: 'Locked', lg: 'Gikkyuse' })}</span>
                  <span className="font-semibold text-gray-500">
                    {lessons.filter(l => l.locked).length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {categories.find(cat => cat.id === selectedCategory)?.name || 'All Lessons'}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredLessons.length} {t({ en: 'lessons', lg: 'amasomo' })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLessons.map(lesson => (
              <div
                key={lesson.id}
                className={`bg-white rounded-xl shadow-sm border p-6 transition-all duration-200 hover:shadow-md ${
                  lesson.locked ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${lesson.color} flex items-center justify-center text-white text-lg`}>
                      {renderIcon(lesson.icon, 'w-6 h-6')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-royal-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-500">{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-500">{lesson.xp} XP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {lesson.locked && (
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>

                {/* Progress Bar */}
                {!lesson.locked && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{t({ en: 'Progress', lg: 'Enkulaakulana' })}</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          lesson.completed ? 'bg-green-500' : 'bg-royal-500'
                        }`}
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lesson.completed 
                        ? 'bg-green-100 text-green-800' 
                        : lesson.locked
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-royal-100 text-royal-800'
                    }`}>
                      {t({ en: 'Level', lg: 'Obulamu' })} {lesson.level}
                    </div>
                    {lesson.completed && (
                      <div className="flex items-center gap-1 text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-medium">{t({ en: 'Completed', lg: 'Gimaze' })}</span>
                      </div>
                    )}
                  </div>

                  <Link
                    to={lesson.locked ? '#' : `/dashboard/lesson/${lesson.id}`}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      getLessonButtonColor(lesson)
                    } ${lesson.locked ? 'cursor-not-allowed' : 'hover:shadow-md'}`}
                  >
                    {getLessonButtonText(lesson)}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredLessons.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">{renderIcon('book', 'w-24 h-24 mx-auto text-gray-400')}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t({ en: 'No lessons found', lg: 'Tewali masomo agasangidwa' })}
              </h3>
              <p className="text-gray-600">
                {t({ en: 'Try selecting a different category', lg: 'Gezaako okulonda enkula endala' })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}