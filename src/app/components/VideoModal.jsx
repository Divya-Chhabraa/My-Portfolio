import React from "react";

const VideoModal = ({ show, onClose, videoPath }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-4 max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-3xl text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <video
          src={videoPath}
          controls
          autoPlay
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default VideoModal;
