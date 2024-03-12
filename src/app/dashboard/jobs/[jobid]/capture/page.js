"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import style from "./capture.module.css";
import { MdAddAPhoto } from "react-icons/md";
import { FcPicture } from "react-icons/fc";
import { SlPicture } from "react-icons/sl";

export default function Capture() {
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing camera:", err));
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas
      .getContext("2d")
      .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageUrl = canvas.toDataURL("image/png");
    setCapturedImage(imageUrl);
    videoRef.current.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });
  };

  const retakePicture = () => {
    setCapturedImage(null);
    openCamera();
  };

  const validationSchema = Yup.object().shape({
    remark: Yup.string().required("Remarks are required"),
  });

  const formik = useFormik({
    initialValues: {
      remark: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Handle form submission
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <div className={style.captureContainer}>
      <form onSubmit={formik.handleSubmit} className={style.captureWrapper}>
        <div className={style.captureImgWrapper}>
          <div className={style.captureImg}>
            {capturedImage ? (
              <img src={capturedImage} alt="Captured" />
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  style={{ display: capturedImage ? "none" : "block" }}
                ></video>
                <button
                  type="button"
                  onClick={captureImage}
                  style={{ display: capturedImage ? "none" : "block" }}
                >
                  Capture
                </button>
              </>
            )}
            {/* <SlPicture /> <span>No Images Added</span> */}
          </div>
        </div>
        <div className={style.Remark}>
          <div className={style.captureBtn}>
            <button type="button">
              <MdAddAPhoto size={50} onClick={openCamera} />
            </button>
          </div>
          <div className={style.input}>
            <label htmlFor="remark">
              Remark <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={style.remarkInput}
              type="remark"
              name="remark"
              id="remark"
              value={formik.values.remark}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder='Enter your remark'
            />
            {formik.touched.remark && formik.errors.remark ? (
              <div className={style.error}>{formik.errors.remark}</div>
            ) : null}
          </div>
          <div>
            <button
              type="submit"
              id="button_2"
              className="btn"
              style={{
                backgroundColor: "var(--button-color)",
                color: "#ffffff",
                fontSize: ".8rem",
                margin: "auto",
              }}
            >
              SUBMIT
            </button>
            {capturedImage && (
          <div className={style.retakeBtn}>
            <button type="button" onClick={retakePicture}>
              Retake
            </button>
          </div>
        )}
          </div>
        </div>

        {capturedImage && (
          <div className={style.retakeBtn}>
            <button type="button" onClick={retakePicture}>
              Retake
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
