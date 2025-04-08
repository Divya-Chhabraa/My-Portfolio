import React, { useEffect } from "react";

const VideoModal = ({ show, onClose, videoPath }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "video-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="video-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div className="relative bg-white p-2 rounded-lg w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-3xl font-bold text-black hover:text-red-600"
        >
          &times;
        </button>
        <video
          src={videoPath}
          controls
          autoPlay
          muted
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default VideoModal;
