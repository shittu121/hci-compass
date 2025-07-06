// HCI principles and quiz questions data
import { Eye, Target, Navigation, Shield, Brain, Zap, Heart } from 'lucide-react'

export const hciPrinciples = [
  {
    id: 'visibility',
    title: 'Visibility of System Status',
    category: 'Usability',
    description: 'Users should always be informed about what is happening through appropriate feedback within reasonable time.',
    rightExample: 'Loading spinner with progress percentage during file upload',
    wrongExample: 'Silent processing with no indication of progress or completion',
    icon: Eye,
    color: 'text-blue-500',
    rightImage: '/right1.png',
    wrongImage: '/wrong1.png',
    rightImageAlt: 'Good example for visibility',
    wrongImageAlt: 'Bad example for visibility'
  },
  {
    id: 'match',
    title: 'Match Between System and Real World',
    category: 'Usability',
    description: 'Use familiar concepts, words, and conventions that users understand from their real-world experience.',
    rightExample: 'Trash/recycle bin icon for deleting files',
    wrongExample: 'Technical jargon or unfamiliar metaphors in user interface',
    icon: Target,
    color: 'text-green-500',
    rightImage: '/images/principle-match-right.png',
    wrongImage: '/images/principle-match-wrong.png',
    rightImageAlt: 'Good example for match between system and real world',
    wrongImageAlt: 'Bad example for match between system and real world'
  },
  {
    id: 'control',
    title: 'User Control and Freedom',
    category: 'Usability',
    description: 'Users should have the freedom to navigate and control their interactions, including undo/redo functionality.',
    rightExample: 'Undo button, back navigation, and clear exit options',
    wrongExample: 'Forced workflows with no way to go back or cancel',
    icon: Navigation,
    color: 'text-purple-500',
    rightImage: '/images/principle-control-right.png',
    wrongImage: '/images/principle-control-wrong.png',
    rightImageAlt: 'Good example for user control and freedom',
    wrongImageAlt: 'Bad example for user control and freedom'
  },
  {
    id: 'consistency',
    title: 'Consistency and Standards',
    category: 'Design',
    description: 'Follow platform conventions and maintain internal consistency throughout the interface.',
    rightExample: 'Consistent button styles, colors, and placement across all pages',
    wrongExample: 'Different button styles and behaviors on different pages',
    icon: Shield,
    color: 'text-orange-500',
    rightImage: '/images/principle-consistency-right.png',
    wrongImage: '/images/principle-consistency-wrong.png',
    rightImageAlt: 'Good example for consistency and standards',
    wrongImageAlt: 'Bad example for consistency and standards'
  },
  {
    id: 'prevention',
    title: 'Error Prevention',
    category: 'Safety',
    description: 'Prevent errors from occurring by eliminating error-prone conditions or checking for them.',
    rightExample: 'Form validation before submission, confirmation dialogs for destructive actions',
    wrongExample: 'Allowing invalid data entry without validation',
    icon: Shield,
    color: 'text-red-500',
    rightImage: '/images/principle-prevention-right.png',
    wrongImage: '/images/principle-prevention-wrong.png',
    rightImageAlt: 'Good example for error prevention',
    wrongImageAlt: 'Bad example for error prevention'
  },
  {
    id: 'recognition',
    title: 'Recognition Rather Than Recall',
    category: 'Cognitive',
    description: 'Make objects, actions, and options visible rather than requiring users to remember information.',
    rightExample: 'Dropdown menus showing available options, recently used items list',
    wrongExample: 'Requiring users to remember complex command syntax',
    icon: Brain,
    color: 'text-indigo-500',
    rightImage: '/images/principle-recognition-right.png',
    wrongImage: '/images/principle-recognition-wrong.png',
    rightImageAlt: 'Good example for recognition rather than recall',
    wrongImageAlt: 'Bad example for recognition rather than recall'
  },
  {
    id: 'flexibility',
    title: 'Flexibility and Efficiency',
    category: 'Performance',
    description: 'Provide shortcuts and customization options for expert users while remaining accessible to novices.',
    rightExample: 'Keyboard shortcuts alongside mouse interactions, customizable interfaces',
    wrongExample: 'One-size-fits-all interface with no customization options',
    icon: Zap,
    color: 'text-yellow-500',
    rightImage: '/images/principle-flexibility-right.png',
    wrongImage: '/images/principle-flexibility-wrong.png',
    rightImageAlt: 'Good example for flexibility and efficiency',
    wrongImageAlt: 'Bad example for flexibility and efficiency'
  },
  {
    id: 'aesthetic',
    title: 'Aesthetic and Minimalist Design',
    category: 'Design',
    description: 'Keep interfaces clean and focused, avoiding unnecessary information that competes for attention.',
    rightExample: 'Clean layout with clear hierarchy and purposeful white space',
    wrongExample: 'Cluttered interface with too much information and visual noise',
    icon: Heart,
    color: 'text-pink-500',
    rightImage: '/images/principle-aesthetic-right.png',
    wrongImage: '/images/principle-aesthetic-wrong.png',
    rightImageAlt: 'Good example for aesthetic and minimalist design',
    wrongImageAlt: 'Bad example for aesthetic and minimalist design'
  }
]

export const quizQuestions = [
  {
    id: 'q1',
    question: 'Which principle is violated when a user clicks a button and nothing happens with no feedback?',
    options: [
      'Consistency and Standards',
      'Visibility of System Status',
      'User Control and Freedom',
      'Error Prevention'
    ],
    correctAnswer: 1,
    explanation: 'Visibility of System Status requires that users always know what is happening through appropriate feedback.'
  },
  {
    id: 'q2',
    question: 'What is the best way to implement "Recognition Rather Than Recall"?',
    options: [
      'Use complex command syntax',
      'Hide all options until needed',
      'Show available options in dropdown menus',
      'Require memorization of shortcuts'
    ],
    correctAnswer: 2,
    explanation: 'Showing available options helps users recognize choices rather than having to recall them from memory.'
  },
  {
    id: 'q3',
    question: 'Which design follows the "Match Between System and Real World" principle?',
    options: [
      'Using technical database terms in user interface',
      'Folder icon for organizing files',
      'Complex navigation structure',
      'Cryptic error messages'
    ],
    correctAnswer: 1,
    explanation: 'Using familiar metaphors like folders helps users understand the system through real-world concepts.'
  }
] 