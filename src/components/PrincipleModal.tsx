import { CheckCircle, XCircle, X } from 'lucide-react'
import React from 'react'

interface PrincipleModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPrinciple: any
  onClose: () => void
}

const PrincipleModal: React.FC<PrincipleModalProps> = ({ selectedPrinciple, onClose }) => {
  if (!selectedPrinciple) return null
  return (
    <div
      className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="principle-modal-title"
      aria-describedby="principle-modal-desc"
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <selectedPrinciple.icon className="w-8 h-8 text-blue-600" />
              <div>
                <h3 id="principle-modal-title" className="text-2xl font-bold text-gray-900">{selectedPrinciple.title}</h3>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {selectedPrinciple.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="p-6 space-y-8" id="principle-modal-desc">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
            <p className="text-gray-800">{selectedPrinciple.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Right Way</span>
              </div>
              <p className="text-green-700 mt-1">{selectedPrinciple.rightExample}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-800">Wrong Way</span>
              </div>
              <p className="text-red-700 mt-1">{selectedPrinciple.wrongExample}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Key Takeaways</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Always prioritize user needs and expectations</li>
              <li>• Provide clear feedback and system status</li>
              <li>• Maintain consistency across all interactions</li>
              <li>• Design for accessibility and inclusivity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrincipleModal 