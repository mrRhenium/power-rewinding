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
    if (navigator.canShare && capturedImages.length > 0) {
      const imageDataUrl = capturedImages[capturedImages.length - 1];
  
      try {
        const blob = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => resolve(event.target.result);
          reader.onerror = reject;
          reader.readAsDataURL(new Blob([imageDataUrl.replace('data:image/png;base64,', '')], { type: 'image/png' }));
        });
  
        await navigator.share({
          title: 'Share this PWA!',
          text: 'Check out this amazing Progressive Web App!',
          url: window.location.href,
          files: [blob],
        });
        console.log('Shared using Web Share API');
      } catch (error) {
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

      {/* <label
        htmlFor="imageFile"
      >
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
      </label> */}

      <br />

      <button onClick={() => {
        handleShare();
      }}>Share</button>

    </div>
  );
};

export default Camera;
