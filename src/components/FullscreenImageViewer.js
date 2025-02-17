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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div
        className="absolute p-2 text-white bg-gray-800 rounded-full cursor-pointer top-4 right-4 hover:bg-gray-700"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </div>

      <div
        className="absolute p-2 text-white bg-gray-800 rounded-full cursor-pointer left-4 hover:bg-gray-700"
        onClick={onPrev}
      >
        <ChevronLeft className="w-8 h-8" />
      </div>

      <img
        src={images[currentIndex].img_url}
        alt={`fullscreen-${currentIndex}`}
        className="object-contain max-w-full max-h-full rounded-lg shadow-xl cursor-pointer"
      />

      <div
        className="absolute p-2 text-white bg-gray-800 rounded-full cursor-pointer right-4 hover:bg-gray-700"
        onClick={onNext}
      >
        <ChevronRight className="w-8 h-8" />
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
