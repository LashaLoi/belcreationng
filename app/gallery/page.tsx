"use client";

import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

import { Gallery } from "./components/Gallery";
import { useEffect } from "react";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});

export default function GalleryPage() {
  const publicId = "DSC_5711_ne0i5e";

  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/dgdjblnke/image/upload/v1718349142/camp/DSC_5711_ne0i5e.jpg",
    )
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  });

  const myImage = cld
    .image(publicId)
    .resize(thumbnail().width(300).height(300).gravity(autoGravity()))
    .delivery(format("auto"))
    .delivery(quality("auto"));

  // console.log({ myImage });
  myImage;

  return (
    <div className="h-screen">
      hello
      {/*<Gallery images={[myImage]} />*/}
    </div>
  );
}
