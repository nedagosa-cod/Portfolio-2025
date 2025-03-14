import { X } from "lucide-react"
import { useEffect } from "react"

export function Modal({ isOpen, onClose, children, title }) {
  // Close on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl transition-all transform scale-100 opacity-100 z-50">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          {title && <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 ml-auto text-gray-500 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
