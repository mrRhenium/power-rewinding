"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MdAddAPhoto } from 'react-icons/md';

const Camera = () => {
  const videoRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [files, setFiles] = useState(null)

  useEffect(() => {
    // Request access to the camera hello
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraReady(true);
        }
      } catch (err) {
        console.error('Error accessing the camera', err);
      }
    };

    getCameraStream();
  }, []);

  const captureImage = () => {
    if (!isCameraReady) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL('image/png');
    setCapturedImages((prevImages) => [...prevImages, imageDataUrl]);
  };
  const handleShare = async () => {
    if (navigator.canShare) {

      try {
        // Share the downloaded image as a file
        await navigator.share({
          title: 'Share this PWA!',
          text: 'Check out this amazing Progressive Web App!',
          url: window.location.href,
          files: [files],
        });
      } catch (error) {
        alert("Error");
        console.error('Sharing failed using Web Share API:', error);
      }
    }
  };


  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: "50%" }}></video>

      <button onClick={captureImage} disabled={!isCameraReady}>Capture Image</button>

      <div>
        {capturedImages.map((image, index) => (
          <img key={index} src={image} alt="Captured" style={{ width: 100, margin: 5 }} />
        ))}
      </div>

      <label
        htmlFor="imageFile"
      >
        {/* djfkdjkj */}
        <MdAddAPhoto size={55} />

        <strong style={{ fontSize: "1.2rem" }}>फ़ोटो खिचे</strong>
        <input
          style={{ display: "none" }}
          id="imageFile"
          type="file"
          name="image"
          accept="image/*"
          capture="camera"
          onChange={(e) => setFiles(e.target.files[0])}
        />
      </label>

      <br />

      <button onClick={() => {
        handleShare();
      }}>Share</button>

    </div>
  );
};

export default Camera;
