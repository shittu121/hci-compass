/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Target, CheckCircle, XCircle } from 'lucide-react'

interface QuizProps {
  quizQuestions: any[]
  quizAnswers: number[]
  setQuizAnswers: (answers: number[]) => void
  currentQuiz: number
  setCurrentQuiz: (idx: number) => void
  showQuizResults: boolean
  setShowQuizResults: (show: boolean) => void
  calculateScore: () => number
}

const Quiz: React.FC<QuizProps> = ({ quizQuestions, quizAnswers, setQuizAnswers, currentQuiz, setCurrentQuiz, showQuizResults, setShowQuizResults, calculateScore }) => (
  <div className="max-w-3xl mx-auto">
    {!showQuizResults ? (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">HCI Knowledge Quiz</h3>
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuiz + 1} of {quizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuiz + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">
            {quizQuestions[currentQuiz].question}
          </h4>
          <div className="space-y-3">
            {quizQuestions[currentQuiz].options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => {
                  const newAnswers = [...quizAnswers]
                  newAnswers[currentQuiz] = index
                  setQuizAnswers(newAnswers)
                }}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  quizAnswers[currentQuiz] === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    quizAnswers[currentQuiz] === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {quizAnswers[currentQuiz] === index && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="flex justify-between pt-6">
            <button
              onClick={() => setCurrentQuiz(Math.max(0, currentQuiz - 1))}
              disabled={currentQuiz === 0}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentQuiz < quizQuestions.length - 1) {
                  setCurrentQuiz(currentQuiz + 1)
                } else {
                  setShowQuizResults(true)
                }
              }}
              disabled={quizAnswers[currentQuiz] === undefined}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuiz === quizQuestions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
          <p className="text-gray-600">Here are your results</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {calculateScore()} / {quizQuestions.length}
          </div>
          <p className="text-blue-800">
            {calculateScore() === quizQuestions.length 
              ? 'Perfect! You have excellent HCI knowledge!' 
              : calculateScore() >= quizQuestions.length * 0.7 
                ? 'Great job! You have strong HCI understanding.' 
                : 'Keep learning! Review the principles to improve.'}
          </p>
        </div>
        <div className="space-y-4 mb-8">
          {quizQuestions.map((question: any, index: number) => (
            <div key={question.id} className="text-left p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3">
                {quizAnswers[index] === question.correctAnswer ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-1">{question.question}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Your answer: {question.options[quizAnswers[index]]}
                  </p>
                  {quizAnswers[index] !== question.correctAnswer && (
                    <p className="text-sm text-green-600 mb-2">
                      Correct answer: {question.options[question.correctAnswer]}
                    </p>
                  )}
                  <p className="text-sm text-gray-700">{question.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setCurrentQuiz(0)
            setQuizAnswers([])
            setShowQuizResults(false)
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    )}
  </div>
)

export default Quiz 