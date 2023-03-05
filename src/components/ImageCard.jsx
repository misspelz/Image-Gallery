import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="w-[100%] rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" alt="" />

      <div className="px-6 py-4">
        <div className="font-bold text-purple-600 mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {tags.map((tag, i) => (
          <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
