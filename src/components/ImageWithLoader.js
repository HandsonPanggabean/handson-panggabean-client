import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {/* Skeleton (visible while loading) */}
      {loading && (
        <div className="rounded-lg shadow-lg w-80 h-80 dark:bg-slate-400 bg-slate-500 animate-pulse" />
      )}

      {/* Actual Image (always rendered) */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        className={`
          ${className}
          transition-opacity duration-500
          ${loading ? "opacity-0 absolute inset-0" : "opacity-100"}
        `}
      />
    </div>
  );
};

export default ImageWithLoader;
