import React from "react";

function Banner({ banner }) {
  // console.log(banner)

  const { imageId } = banner;
  // console.log(img)
  return (
    <div className=" h-72 w-96">
      <div className="overflow-hidden">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
          alt="Dishes"
          className="h-72 w-64"
        />
      </div>
    </div>
  );
}

export default Banner;
