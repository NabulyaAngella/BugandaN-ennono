// Shared lessons data used by Lessons.jsx and LessonDetail.jsx
const lessons = [
  {
    id: 1,
    slug: 'basic-greetings',
    title: 'Basic Greetings',
    description: 'Learn essential Luganda greetings and introductions',
    category: 'basics',
    level: 1,
    xpReward: 15,
    duration: '6 min',
    locked: false, // free plan: unlocked
    progress: 0,
    xp: 0,
    color: 'from-green-400 to-emerald-500',
    icon: 'wave',
    steps: [
      // Warm-up: short introductions and repetition
      {
        type: 'instruction',
        title: 'Read & repeat',
        content: 'Read the phrase and repeat it aloud. Focus on pronunciation and tone.',
        phrase: 'Gyebale ko',
        translation: 'Hello (general greeting)'
      },
      {
        type: 'instruction',
        title: 'Common greetings',
        content: "A short list of commonly used greetings with brief notes on when and how to use each.",
        list: [
          { luganda: 'Gyebale ko', english: 'Hello (general)' },
          { luganda: 'Wasuze otya?', english: 'Good morning / How was your night?' },
          { luganda: 'Oli otya?', english: 'How are you?' },
          { luganda: 'Weebale', english: 'Thank you' },
          { luganda: 'Kaale', english: 'Bye / See you' }
        ]
      },

      // Practice multiple short comprehension questions
      {
        type: 'multiple-choice',
        title: 'Quick check 1',
        question: 'Which phrase would you use to say "Thank you"?',
        options: ['Gyebale ko', 'Weebale', 'Kaale', 'Oli otya?'],
        correctAnswer: 1
      },
      {
        type: 'multiple-choice',
        title: 'Quick check 2',
        question: 'Which phrase means "How are you?"',
        options: ['Wasuze otya?', 'Gyebale ko', 'Weebale', 'Kaale'],
        correctAnswer: 0
      },

      // Matching for reinforcement
      {
        type: 'matching',
        title: 'Match Luganda to English',
        pairs: [
          { luganda: 'Gyebale ko', english: 'Hello' },
          { luganda: 'Weebale', english: 'Thank you' },
          { luganda: 'Kaale', english: 'Bye / Okay' },
          { luganda: 'Oli otya?', english: 'How are you?' }
        ]
      },

      // Short reading exercise with contextual phrases
      {
        type: 'instruction',
        title: 'Contextual examples',
        content: 'Read the short dialogues and notice how greetings change with context.',
        list: [
          { luganda: 'A: Gyebale ko! B: Gyebale ko, oli otya?', english: 'A: Hello! B: Hello, how are you?' },
          { luganda: 'A: Wasuze otya? B: Bulungi, weebale', english: 'A: Good morning? B: I am fine, thank you' }
        ]
      },

      // Mini-quiz sequence to increase correct answer count
      {
        type: 'multiple-choice',
        title: 'Mini quiz 1',
        question: 'Choose the correct translation: "Weebale"',
        options: ['See you', 'Thank you', 'Hello', 'Good night'],
        correctAnswer: 1
      },
      {
        type: 'multiple-choice',
        title: 'Mini quiz 2',
        question: 'Choose the correct response to "Gyebale ko"',
        options: ['Weebale', 'Gyebale ko', 'Kale', 'Oli otya?'],
        correctAnswer: 1
      },



      // Final short assessment
      {
        type: 'multiple-choice',
        title: 'Final check',
        question: 'Which phrase would you say when leaving?',
        options: ['Gyebale ko', 'Weebale', 'Kaale', 'Oli otya?'],
        correctAnswer: 2
      }
    ]
  },

  {
    id: 2,
    slug: 'numbers-1-20',
    title: 'Numbers 1–20',
    description: 'Count from one to twenty in Luganda and practice basic arithmetic words.',
    category: 'basics',
    level: 1,
    xpReward: 15,
    duration: '8 min',
    locked: false, // free plan: unlocked
    progress: 0,
    xp: 0,
    color: 'from-blue-400 to-cyan-500',
    icon: 'numbers',
    steps: [
      {
        type: 'instruction',
        title: 'Read & count',
        content: 'Read the numbers and repeat aloud: 1..20',
        list: [
          { luganda: 'Emu', english: 'One' },
          { luganda: 'Bbiri', english: 'Two' },
          { luganda: 'Ssatu', english: 'Three' },
          { luganda: 'Nnya', english: 'Four' },
          { luganda: 'Taano', english: 'Five' },
          { luganda: 'Mukaaga', english: 'Six' },
          { luganda: 'Musanvu', english: 'Seven' },
          { luganda: 'Munaana', english: 'Eight' },
          { luganda: 'Mwenda', english: 'Nine' },
          { luganda: 'Kumi', english: 'Ten' },
          { luganda: 'Kumi n emu', english: 'Eleven' },
          { luganda: 'Kumi n bbiri', english: 'Twelve' },
          { luganda: 'Kumi n ssatu', english: 'Thirteen' },
          { luganda: 'Kumi n nnya', english: 'Fourteen' },
          { luganda: 'Kumi n taano', english: 'Fifteen' },
          { luganda: 'Kumi n mukaaga', english: 'Sixteen' },
          { luganda: 'Kumi n musanvu', english: 'Seventeen' },
          { luganda: 'Kumi n munaana', english: 'Eighteen' },
          { luganda: 'Kumi n mwenda', english: 'Nineteen' },
          { luganda: 'Ibiri', english: 'Twenty' }
        ]
      },
      {
        type: 'matching',
        title: 'Match numbers to words',
        pairs: [
          { luganda: 'Emu', english: '1' },
          { luganda: 'Bbiri', english: '2' },
          { luganda: 'Ssatu', english: '3' },
          { luganda: 'Nnya', english: '4' }
        ]
      },
      {
        type: 'multiple-choice',
        title: 'Choose the correct word',
        question: 'Which Luganda word means "Five"?',
        options: ['Taano', 'Mukaaga', 'Nnya', 'Ssatu'],
        correctAnswer: 0
      },
      {
        type: 'exercise',
        title: 'Quick count',
        content: 'Type the Luganda words for: 7, 12, 15 (separate with commas).',
        expected: ['Musanvu', 'Kumi n bbiri', 'Kumi n taano']
      }
    ]
  }

  // other lessons can remain defined in Lessons.jsx or added here later
]

export default lessons
