import React from 'react'
import Feature from './ui/feature-with-image-comparison'
import { X } from 'lucide-react'

interface ImageCompareModalProps {
  open: boolean
  onClose: () => void
  rightImage: string
  wrongImage: string
  rightImageAlt: string
  wrongImageAlt: string
}

const ImageCompareModal: React.FC<ImageCompareModalProps> = ({ open, onClose, rightImage, wrongImage, rightImageAlt, wrongImageAlt }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center p-2 md:p-4 z-50" role="dialog" aria-modal="true">
      <div className="relative bg-white rounded-xl max-w-full md:max-w-3xl w-full max-h-[80vh] h-auto shadow-lg border border-gray-200 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-white/80 hover:bg-gray-100 rounded-full shadow focus-visible:ring-2 focus-visible:ring-blue-500 z-50"
          aria-label="Close image comparison modal"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        <div className="p-2 md:p-4 flex-1 flex items-center justify-center">
          <div className="w-full h-56 md:h-80 flex items-center justify-center">
            <Feature
              rightImage={rightImage}
              wrongImage={wrongImage}
              rightImageAlt={rightImageAlt}
              wrongImageAlt={wrongImageAlt}
              gripClassName="bg-gray-300 border border-gray-400 shadow rounded hover:scale-110 transition-all w-7 h-14 select-none absolute z-50 cursor-ew-resize flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCompareModal 