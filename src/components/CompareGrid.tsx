import React, { useState } from 'react'
import { CheckCircle, XCircle, Eye } from 'lucide-react'
import ImageCompareModal from './ImageCompareModal'

interface CompareGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  principles: any[]
}

const CompareGrid: React.FC<CompareGridProps> = ({ principles }) => {
  const [modalIndex, setModalIndex] = useState<number | null>(null)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {principles.map((principle, idx) => {
        const IconComponent = principle.icon
        return (
          <div key={principle.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <IconComponent className={`w-6 h-6 ${principle.color}`} />
                <h4 className="text-lg font-semibold text-gray-900">{principle.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{principle.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 pt-2">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Right Way</span>
                </div>
                <p className="text-green-700 text-sm">{principle.rightExample}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-800">Wrong Way</span>
                </div>
                <p className="text-red-700 text-sm">{principle.wrongExample}</p>
              </div>
            </div>
            {/* Visual View Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setModalIndex(idx)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
                aria-label="Open visual image comparison"
              >
                <Eye className="w-5 h-5" />
                Visual View
              </button>
            </div>
            {/* Image Compare Modal */}
            <ImageCompareModal
              open={modalIndex === idx}
              onClose={() => setModalIndex(null)}
              rightImage={principle.rightImage}
              wrongImage={principle.wrongImage}
              rightImageAlt={principle.rightImageAlt}
              wrongImageAlt={principle.wrongImageAlt}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CompareGrid 