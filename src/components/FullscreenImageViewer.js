import { useEffect, useState } from "react";

// react lucide
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Components
import ImageWithLoader from "./ImageWithLoader";

const FullscreenImageViewer = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (!images || !images[currentIndex]) return;

    const img = new Image();
    img.src = images[currentIndex].img_url;

    img.onload = () => {
      setIsPortrait(img.height > img.width);
    };
  }, [images, currentIndex]);

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
        className="absolute z-20 p-2 text-white bg-gray-500 rounded-full cursor-pointer top-4 right-4 bg-opacity-30 hover:bg-opacity-50 hover:bg-gray-400"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </div>

      <div
        className="absolute z-20 p-2 text-white bg-gray-500 rounded-full cursor-pointer left-4 bg-opacity-30 hover:bg-opacity-50 hover:bg-gray-400"
        onClick={onPrev}
      >
        <ChevronLeft className="w-8 h-8" />
      </div>

      <ImageWithLoader
        src={images[currentIndex].img_url}
        alt={`fullscreen-${currentIndex}`}
        className={`z-10 object-contain max-w-full max-h-full rounded-lg shadow-xl cursor-pointer ${
          isPortrait
            ? "max-h-[calc(100svh-5rem)] md:max-h-[calc(100vh-8rem)] w-auto"
            : "max-w-[calc(100svw-5rem)] md:max-w-[calc(100vw-8rem)] h-auto"
        }`}
      />

      <div
        className="absolute z-20 p-2 text-white bg-gray-500 rounded-full cursor-pointer right-4 bg-opacity-30 hover:bg-opacity-50 hover:bg-gray-400"
        onClick={onNext}
      >
        <ChevronRight className="w-8 h-8" />
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
