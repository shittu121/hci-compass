import { useState, useEffect } from 'react'
import Header from './Header'
import PrincipleModal from './PrincipleModal'
import PrinciplesGrid from './PrinciplesGrid'
import CompareGrid from './CompareGrid'
import Quiz from './Quiz'
import { hciPrinciples, quizQuestions } from '../data/hciData'

export default function HCICompass() {
  const [activeTab, setActiveTab] = useState<'principles' | 'compare' | 'quiz'>('principles')
  const [searchTerm, setSearchTerm] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedPrinciple, setSelectedPrinciple] = useState<any>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [showQuizResults, setShowQuizResults] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter principles based on search
  const filteredPrinciples = hciPrinciples.filter(principle =>
    principle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    principle.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    principle.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Calculate quiz score
  const calculateScore = () => {
    return quizAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          {/* You can extract this to a LoadingScreen component if desired */}
          <svg className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">HCI Compass</h2>
          <p className="text-gray-600">Loading navigation tools...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Navigate Human-Computer Interaction Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the fundamental principles of HCI through interactive examples, 
            comparisons, and assessments. Find your way to better design decisions.
          </p>
        </div>
        {/* Tab Content */}
        {activeTab === 'principles' && (
          <div className="space-y-8">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search principles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                aria-label="Search HCI principles"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
              </span>
            </div>
            <PrinciplesGrid principles={filteredPrinciples} onSelect={setSelectedPrinciple} />
            {/* No Results */}
            {filteredPrinciples.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No principles found</h3>
                <p className="text-gray-600">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        )}
        {activeTab === 'compare' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Right vs Wrong Examples</h3>
              <p className="text-gray-600">
                Compare good and bad implementations of HCI principles
              </p>
            </div>
            <CompareGrid principles={hciPrinciples} />
          </div>
        )}
        {activeTab === 'quiz' && (
          <Quiz
            quizQuestions={quizQuestions}
            quizAnswers={quizAnswers}
            setQuizAnswers={setQuizAnswers}
            currentQuiz={currentQuiz}
            setCurrentQuiz={setCurrentQuiz}
            showQuizResults={showQuizResults}
            setShowQuizResults={setShowQuizResults}
            calculateScore={calculateScore}
          />
        )}
        {/* Principle Detail Modal */}
        <PrincipleModal selectedPrinciple={selectedPrinciple} onClose={() => setSelectedPrinciple(null)} />
      </main>
      
    </div>
  )
}