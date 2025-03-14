
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"



export function ImageGallery({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (images.length === 0) return null

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Main image */}
      <div className="relative w-full overflow-hidden aspect-video rounded-xl">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute flex items-center justify-center w-10 h-10 text-white transition-colors -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute flex items-center justify-center w-10 h-10 text-white transition-colors -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 pb-2 mt-4 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                index === currentIndex
                  ? "border-blue-600 dark:border-blue-400 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${alt} thumbnail ${index + 1}`}
                className="object-cover"
                fill
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}