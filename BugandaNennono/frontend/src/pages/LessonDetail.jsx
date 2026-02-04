import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import lessonsData from '../data/lessons'

export default function LessonDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  const [inProgress, setInProgress] = useState(false)
  const [step, setStep] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [encouragementVisible, setEncouragementVisible] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // Load lesson from shared data (fall back to minimal placeholder if not found)
  const found = lessonsData.find(l => String(l.id) === String(id) || String(l.slug) === String(id))
  const lesson = found || {
    id,
    title: t({ en: 'Lesson', lg: 'Essomo' }),
    description: t({ en: 'A short lesson.', lg: 'Essomo eddako.' }),
    duration: '5 min',
    difficulty: 'Beginner',
    xpReward: 10,
    steps: []
  }

  useEffect(() => {
    // Reset selection and feedback when step changes
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [step])

  const handleStart = () => {
    setInProgress(true)
    setStep(0)
    setScore(0)
  }

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return
    
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === lesson.steps[step].correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)
    if (correct) {
      const next = score + 1
      setScore(next)
      // Encourage the user after every 5 correct answers
      if (next > 0 && next % 5 === 0) {
        setEncouragementVisible(true)
        setTimeout(() => setEncouragementVisible(false), 3000)
      }
    }
  }

  const handleNext = () => {
    if (step >= lesson.steps.length - 1) {
      setCompleted(true)
      setInProgress(false)
    } else {
      setStep(s => s + 1)
    }
  }

  const handleBack = () => {
    navigate('/dashboard/lessons')
  }

  const getProgressPercentage = () => {
    return ((step + 1) / lesson.steps.length) * 100
  }

  // Small inline icons used in the lesson UI
  const renderIcon = (name, className = 'w-5 h-5') => {
    const common = { className, 'aria-hidden': true }
    switch(name){
      case 'audio':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v18c-4.97 0-9-4.03-9-9s4.03-9 9-9z" />
            <path d="M19.07 4.93a10 10 0 010 14.14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )
      case 'microphone':
        return (
          <svg {...common} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1a3 3 0 00-3 3v7a3 3 0 006 0V4a3 3 0 00-3-3z" />
            <path d="M19 11a7 7 0 01-14 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 19v3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )
      case 'check':
        return (
          <svg {...common} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879A1 1 0 003.293 11.293l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd" />
          </svg>
        )
      case 'speaking':
      case 'practice':
        // Practice step: instruct the user to say the phrase aloud (no recording)
        return (
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="text-2xl font-bold text-royal-600 mb-2">
                {currentStep.phrase}
              </div>
              <div className="text-gray-600">
                {currentStep.translation}
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-6">{t({ en: 'Say the phrase aloud to practice your pronunciation.', lg: 'Kogera ekigambo nnyo okuzannya enkuba yo.' })}</div>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
            >
              {t({ en: 'I practiced', lg: 'Nkoze okuzannya' })}
            </button>
          </div>
        )
    }
  }

  const renderExercise = () => {
    const currentStep = lesson.steps[step]
    
    switch (currentStep.type) {
      case 'instruction':
        return (
          <div className="text-center">
            {currentStep.audioSrc ? (
              <div className="text-6xl mb-4">{renderIcon('audio','w-16 h-16')}</div>
            ) : null}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="text-3xl font-bold text-royal-600 mb-2">
                {currentStep.phrase}
              </div>
              <div className="text-gray-600">
                {currentStep.translation}
              </div>
            </div>
            <button 
              onClick={handleNext}
              className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
            >
              {t({ en: 'I\'ve Practiced', lg: 'Nkoze okuzannya' })}
            </button>
          </div>
        )

      case 'multiple-choice':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentStep.question}</h3>
            <div className="space-y-3">
              {currentStep.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : showFeedback && index === currentStep.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-royal-300 hover:bg-royal-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : showFeedback && index === currentStep.correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {showFeedback && (
              <div className={`mt-4 p-4 rounded-xl ${
                  isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? renderIcon('check','w-6 h-6') : renderIcon('cross','w-6 h-6')}
                    </span>
                    <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect 
                        ? t({ en: 'Correct! Well done!', lg: 'Kisemba! Okola bulungi!' })
                        : t({ en: 'Not quite right. Try again!', lg: 'Sikisemba. Gezaako ne kakati!' })
                      }
                    </span>
                  </div>
                <button
                  onClick={handleNext}
                  className="mt-3 px-6 py-2 bg-royal-500 text-white rounded-lg font-semibold hover:bg-royal-600 transition-colors"
                >
                  {t({ en: 'Continue', lg: 'Komekerako' })}
                </button>
              </div>
            )}
          </div>
        )

      case 'matching':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentStep.title}</h3>
            <div className="grid gap-4">
              {currentStep.pairs.map((pair, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="font-semibold text-royal-600">{pair.luganda}</div>
                  <div className="text-gray-600">{pair.english}</div>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="mt-6 px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
            >
              {t({ en: 'Continue', lg: 'Komekerako' })}
            </button>
          </div>
        )

      case 'speaking':
        return (
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="text-2xl font-bold text-royal-600 mb-2">
                {currentStep.phrase}
              </div>
              <div className="text-gray-600">
                {currentStep.translation}
              </div>
            </div>
            <button className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors mb-4 flex items-center justify-center gap-2">
              {renderIcon('microphone','w-5 h-5')}
              <span>{t({ en: 'Start Recording', lg: 'Tandika Okukwata' })}</span>
            </button>
            <div className="text-sm text-gray-500 mb-6">
              {t({ en: 'Click to record and practice your pronunciation', lg: 'Nyiga okukwata n\'okuzannya enkuba yo' })}
            </div>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
            >
              {t({ en: 'Continue', lg: 'Komekerako' })}
            </button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {encouragementVisible && (
        <div className="mb-4 p-3 bg-royal-50 border border-royal-100 rounded-lg text-royal-700 text-center">
          {t({ en: 'Awesome! You\'ve answered 5 more correctly — keep going!', lg: 'Kikulu! Okwetaba mu bibuuzo 5 ebyesiganya — tya ku!' })}
        </div>
      )}
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-royal-600 hover:text-royal-700 transition-colors mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t({ en: 'Back to lessons', lg: 'Dda ku amasomo' })}
        </button>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {lesson.title}
            </h1>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {lesson.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {lesson.xpReward} XP
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {lesson.difficulty}
              </div>
            </div>
          </div>
          
          {!completed && (
            <div className="bg-white rounded-xl p-4 shadow-sm border min-w-[200px]">
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1">{t({ en: 'Progress', lg: 'Enkulaakulana' })}</div>
                <div className="text-2xl font-bold text-royal-600">
                  {inProgress ? Math.round(getProgressPercentage()) : 0}%
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {inProgress && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{t({ en: 'Step', lg: 'Ekikanda' })} {step + 1} / {lesson.steps.length}</span>
            <span>{Math.round(getProgressPercentage())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="h-3 bg-gradient-to-r from-royal-500 to-royal-600 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
        {!inProgress && !completed && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gradient-to-br from-royal-500 to-royal-600 rounded-full flex items-center justify-center text-white text-2xl mb-6 mx-auto">
              {renderIcon('book','w-12 h-12')}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t({ en: 'Ready to learn?', lg: 'Wetegefe okusoma?' })}
            </h2>
            <p className="text-gray-600 mb-2">
              {t({ en: 'This lesson includes:', lg: 'Essomo lino liriko:' })}
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li>• {t({ en: 'Listening exercises', lg: 'Emizanyo y\'okuwuliriza' })}</li>
              <li>• {t({ en: 'Speaking practice', lg: 'Okuzannya okwogera' })}</li>
              <li>• {t({ en: 'Interactive quizzes', lg: 'Emibuuzo egizannya' })}</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleStart}
                className="px-8 py-3 bg-gradient-to-r from-royal-500 to-royal-600 text-white rounded-xl font-semibold hover:from-royal-600 hover:to-royal-700 transition-all shadow-lg"
              >
                {t({ en: 'Start Lesson', lg: 'Tandika Essomo' })}
              </button>
              <button 
                onClick={handleBack}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {t({ en: 'Not Now', lg: 'Si ka kati' })}
              </button>
            </div>
          </div>
        )}

        {inProgress && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {lesson.steps[step].title}
              </h2>
              {lesson.steps[step].content && (
                <p className="text-gray-600">{lesson.steps[step].content}</p>
              )}
            </div>
            
            {renderExercise()}
          </div>
        )}

        {completed && (
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
              {renderIcon('trophy','w-12 h-12')}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {t({ en: 'Lesson Completed!', lg: 'Essomo Limaze!' })}
            </h2>
            <p className="text-gray-600 mb-2">
              {t({ en: 'Excellent work! You earned', lg: 'Okola bulungi! Wetaagise' })}
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-gold-100 px-4 py-2 rounded-full">
                <span className="font-bold text-gold-600">+{lesson.xpReward} XP</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                {t({ en: 'Your Results', lg: 'Ebiwundu byo' })}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">{t({ en: 'Score', lg: 'Omukolo' })}</div>
                  <div className="font-semibold">{score}/{lesson.steps.length}</div>
                </div>
                <div>
                  <div className="text-gray-500">{t({ en: 'Accuracy', lg: 'Obusesemba' })}</div>
                  <div className="font-semibold">{Math.round((score / lesson.steps.length) * 100)}%</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleBack}
                className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
              >
                {t({ en: 'Back to Lessons', lg: 'Dda ku Amasomo' })}
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                {t({ en: 'Go to Dashboard', lg: 'Genda ku Dashboard' })}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}