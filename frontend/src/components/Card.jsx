import React from "react";

const Card = ({ title, titleIcon, image, horizontal = false }) => {
  console.log("image", image);
  return (
    <>
      {!horizontal && (
        <div className="bg-stone-900 flex-1 w-1/2  h-[85%]  mt-10 mb-5  flex  flex-col p-5 rounded-4xl self-center max-[1181px]:h-fit max-xl:w-full  max-xl:mt-0 ">
          <div className="self-center">
            <h3 className="text-neutral-200 text-xl font-bold flex items-center gap-4">
              <span className="text-2xl p-5 text-rose-600 bg-stone-800 rounded-2xl">
                {titleIcon}
              </span>
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center  ">
            {image &&
              image.map((image, index) => (
                <div
                  key={index}
                  className="text-neutral-200 text-5xl m-2 p-5 bg-stone-950 rounded-2xl mt-7 flex flex-col items-center justify-center w-33 h-30 filter grayscale hover:grayscale-0 transition-all duration-400 max-xs:w-26 max-xs:h-28 gap-1 "
                >
                  <div>
                    <img
                      src={image.image}
                      alt={image.name}
                      loading="lazy"
                      className="w-18 h-18"
                    />
                  </div>
                  <div>
                    <p className="text-xl max-xs:text-sm">{image.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {horizontal && (
        <div className="bg-stone-900  w-full flex flex-col  flex-1 p-5 rounded-4xl self-center ">
          <div className="self-center">
            <h3 className="text-neutral-200 text-xl font-bold flex items-center gap-4">
              <span className="text-2xl p-5 text-rose-600 bg-stone-800 rounded-2xl">
                {titleIcon}
              </span>
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center ">
            {image &&
              image.map((image, index) => (
                <div
                  key={index}
                  className="text-neutral-200 text-5xl m-2 p-5  bg-stone-950 rounded-2xl mt-7 flex flex-col items-center justify-center w-50 h-30 filter grayscale hover:grayscale-0 transition-all duration-400"
                >
                  <img
                    src={image.image}
                    alt={image.name}
                    loading="lazy"
                    className="w-20 h-20"
                  />

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
