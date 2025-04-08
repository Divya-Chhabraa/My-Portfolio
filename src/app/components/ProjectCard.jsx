import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import VideoModal from "./VideoModal"; // Make sure this path is correct

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, videoPath }) => {
  const [showVideo, setShowVideo] = useState(false);

  const isCamConnect = title === "CamConnect App";

  const handlePreviewClick = (e) => {
    if (isCamConnect) {
      e.preventDefault();
      setShowVideo(true);
    }
    // else: allow anchor tag to open link normally
  };

  return (
    <>
      <div>
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            {/* GitHub Link */}
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </a>

            {/* Preview Link or Video Modal Trigger */}
            <a
              href={isCamConnect ? "#" : previewUrl}
              onClick={handlePreviewClick}
              target={isCamConnect ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </a>
          </div>
        </div>

        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>

      {/* Show modal only for CamConnect */}
      {isCamConnect && (
  <VideoModal
    show={showVideo}
    onClose={() => setShowVideo(false)}
    videoPath={"/videos/CamConnect.mp4"} // ✅ path should be this
  />
)}

    </>
  );
};

export default ProjectCard;
