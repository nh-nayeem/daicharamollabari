"use client";

import { useEffect, useRef, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

export default function PanoramaViewer() {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [imageToLoad, setImageToLoad] = useState("");

  // Track which image is actually loaded in the viewer
  const lastLoadedImageRef = useRef(null);

  // Initialize viewer
  useEffect(() => {
    if (!containerRef.current) return;
  
    const viewer = new Viewer({
      container: containerRef.current,
      panorama: null, // No image on init
      navbar: true,
    });
  
    viewerRef.current = viewer;
  
    // Set the first image after viewer is ready
    setTimeout(() => {
        setImageToLoad("/panorama3.jpg");
    }, 0);
  
    return () => {
      viewer.destroy();
    };
  }, []);
  

  // Load image when imageToLoad changes, even if it's the same as before
  useEffect(() => {
    if (!viewerRef.current || !imageToLoad) return;

    // Load regardless of whether it's same as before
    viewerRef.current
      .setPanorama(imageToLoad)
      .then(() => {
        console.log("Loaded:", imageToLoad);
        lastLoadedImageRef.current = imageToLoad;
      })
      .catch((err) => {
        console.error("Error loading panorama:", err);

        // Check if image exists at all
        const img = new Image();
        img.onload = () => console.log("Image is valid:", imageToLoad);
        img.onerror = () =>
          console.error("Image not found or inaccessible:", imageToLoad);
        img.src = imageToLoad;
      });
  }, [imageToLoad]);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "550px",
          borderRadius: "12px",
          backgroundColor: "#000",
        }}
      />
      <div className="mt-4 flex gap-4 justify-center">
        <button
          onClick={() => setImageToLoad("/panorama1.jpg")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Panorama 1
        </button>
        <button
          onClick={() => setImageToLoad("/panorama2.jpg")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Panorama 2
        </button>
        <button
          onClick={() => setImageToLoad("/panorama3.jpg")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Panorama 3
        </button>
      </div>
    </div>
  );
}
