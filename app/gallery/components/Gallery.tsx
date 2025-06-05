"use client";

import React from "react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage, placeholder } from "@cloudinary/react";

export const Gallery: React.FC<{ images: CloudinaryImage[] }> = ({
  images,
}) => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images.map((image, i) => (
        <AdvancedImage
          key={i}
          cldImg={image}
          style={{ maxWidth: "100%" }}
          plugins={[placeholder()]}
          className="rounded-lg shadow-lg"
        />
      ))}
    </LightGallery>
  );
};
