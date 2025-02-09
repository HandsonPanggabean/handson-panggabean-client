import { useEffect } from "react";

// react lucide
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const FullscreenImageViewer = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose(); // Close on ESC key
      } else if (e.key === "ArrowRight") {
        onNext(); // Next on Right Arrow
      } else if (e.key === "ArrowLeft") {
        onPrev(); // Prev on Left Arrow
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </div>

      <div
        className="absolute left-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
        onClick={onPrev}
      >
        <ChevronLeft className="w-8 h-8" />
      </div>

      <img
        src={images[currentIndex].img_url}
        alt={`fullscreen-${currentIndex}`}
        className="max-w-full max-h-full object-contain rounded-lg shadow-xl cursor-pointer"
      />

      <div
        className="absolute right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
        onClick={onNext}
      >
        <ChevronRight className="w-8 h-8" />
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
