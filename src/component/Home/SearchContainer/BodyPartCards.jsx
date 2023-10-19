import React from "react";
    
function BodyPartCards({ bodyPartName, imageNameObject }) {
  return (
    <div className="flex flex-col cursor-pointer items-center  w-[200px]  mr-4 shadow-md p-4 mb-4 dark:shadow-gray-600 dark:shadow-sm rounded-md">
      <img
        src={imageNameObject[bodyPartName]}
        alt="bodyPartName"
        className="w-[40px] h-[40px] hover:scale-95"></img>
      <h1 className="font-lg dark:text-white text-black">
        {bodyPartName.at(0).toUpperCase() +
          bodyPartName.substring(1).toLowerCase()}
      </h1>
    </div>
  );
}

export default BodyPartCards;
