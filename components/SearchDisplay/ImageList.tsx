import Image from "next/image";
import React from "react";
import ImageL from "./ImageL";

const ImageList = () => {
    const imageSrcList = [
        { name: "/Rectangle68.png", type: "singleImage" },
        { name: "/Rectangle68.png", type: "singleImage" },
        { name: "/Rectangle68.png", type: "singleImage" },
        { name: "/Rectangle68.png", type: "multiImage" },
        { name: "/Rectangle68.png", type: "big" },
        { name: "/Rectangle68.png", type: "singleImage" },
        { name: "/Rectangle68.png", type: "singleImage" },
        { name: "/Rectangle68.png", type: "singleImage" },
        { name: "/Rectangle68.png", type: "reels" },


    ];
    return (
        <div className="grid grid-cols-4 gap-[18px] text-white text-sm">
            {imageSrcList.map((image, index) => {
                return <ImageL name={image?.name} type={image?.type} key={index}/>;
            })}
        </div>
    );
};

export default ImageList;
