
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="text-lg font-semibold text-gray-900">HCI Compass</span>
            </div>
            <p className="text-gray-600 mb-4">
              Navigate the principles of Human-Computer Interaction with confidence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>Built with accessibility in mind, by Group 5.</span>
              <span>•</span>
              <span>Following HCI best practices</span>
              <span>•</span>
              <span>Responsive design</span>
            </div>
          </div>
        </div>
      </footer>
  )
}
