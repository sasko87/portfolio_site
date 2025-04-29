import React from "react";

const Card = ({ title, titleIcon, image, horizontal = false }) => {
  console.log("image", image);
  return (
    <>
      {!horizontal && (
        <div className="bg-stone-900 flex-1 min-w-[336px] h-[85%] m-4 mt-15 mb-15  flex  flex-col p-5 rounded-4xl self-center max-[980px]:h-fit">
          <div className="self-center">
            <h3 className="text-neutral-200 text-xl font-bold flex items-center gap-4">
              <span className="text-2xl p-5 text-rose-600 bg-stone-800 rounded-2xl">
                {titleIcon}
              </span>
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            {image &&
              image.map((image, index) => (
                <div
                  key={index}
                  className="text-neutral-200 text-5xl m-2 p-5 bg-stone-950 rounded-2xl mt-7 flex flex-col items-center justify-center w-33 h-30"
                >
                  <image.image />
                  <p className="text-xl">{image.name}</p>
                </div>
              ))}
          </div>
        </div>
      )}
      {horizontal && (
        <div className="bg-stone-900  w-11/12 flex flex-col m-15 flex-1 p-5 rounded-4xl self-center">
          <div className="self-center">
            <h3 className="text-neutral-200 text-xl font-bold flex items-center gap-4">
              <span className="text-2xl p-5 text-rose-600 bg-stone-800 rounded-2xl">
                {titleIcon}
              </span>
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            {image &&
              image.map((image, index) => (
                <div
                  key={index}
                  className="text-neutral-200 text-5xl m-10 p-5 pl-8 pr-8 bg-stone-950 rounded-2xl mt-7 flex flex-col items-center justify-center w-50 h-30"
                >
                  <image.image />
                  <p className="text-xl">{image.name}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
