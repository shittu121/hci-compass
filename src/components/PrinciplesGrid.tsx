/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface PrinciplesGridProps {
  principles: any[]
  onSelect: (principle: any) => void
}

const PrinciplesGrid: React.FC<PrinciplesGridProps> = ({ principles, onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {principles.map((principle) => {
      const IconComponent = principle.icon
      return (
        <div
          key={principle.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          onClick={() => onSelect(principle)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelect(principle)
            }
          }}
        >
          <div className="flex items-start space-x-4">
            <IconComponent className={`w-8 h-8 ${principle.color} flex-shrink-0 mt-1`} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {principle.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {principle.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {principle.description}
              </p>
              <div className="flex items-center mt-4 text-blue-600 text-sm font-medium">
                Learn More
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

export default PrinciplesGrid 