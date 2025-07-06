import { Compass, Menu, X } from 'lucide-react'
import React from 'react'

type HeaderProps = {
  activeTab: 'principles' | 'compare' | 'quiz',
  setActiveTab: (tab: 'principles' | 'compare' | 'quiz') => void,
  isMobileMenuOpen: boolean,
  setIsMobileMenuOpen: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <Compass className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">HCI Compass</h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4" aria-label="Main navigation">
          <button
            onClick={() => setActiveTab('principles')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${activeTab === 'principles' ? 'text-blue-700 underline' : 'text-gray-700 hover:underline'}`}
            aria-current={activeTab === 'principles' ? 'page' : undefined}
          >
            Principles
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${activeTab === 'compare' ? 'text-blue-700 underline' : 'text-gray-700 hover:underline'}`}
            aria-current={activeTab === 'compare' ? 'page' : undefined}
          >
            Compare
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${activeTab === 'quiz' ? 'text-blue-700 underline' : 'text-gray-700 hover:underline'}`}
            aria-current={activeTab === 'quiz' ? 'page' : undefined}
          >
            Quiz
          </button>
        </nav>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
    {/* Mobile Navigation - Overlay */}
    {isMobileMenuOpen && (
      <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => {
              setActiveTab('principles')
              setIsMobileMenuOpen(false)
            }}
            className={`block w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${activeTab === 'principles' ? 'text-blue-700 underline' : 'text-gray-700 hover:underline'}`}
          >
            Principles
          </button>
          <button
            onClick={() => {
              setActiveTab('compare')
              setIsMobileMenuOpen(false)
            }}
            className={`block w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${activeTab === 'compare' ? 'text-blue-700 underline' : 'text-gray-700 hover:underline'}`}
          >
            Compare
          </button>
          <button
            onClick={() => {
              setActiveTab('quiz')
              setIsMobileMenuOpen(false)
            }}
            className={`block w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none ${activeTab === 'quiz' ? 'text-blue-700 underline' : 'text-gray-700 hover:underline'}`}
          >
            Quiz
          </button>
        </div>
      </div>
    )}
  </header>
)

export default Header 