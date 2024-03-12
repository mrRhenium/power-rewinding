"use client";

import style from "./mediaPage.module.css";

import { MdAddAPhoto } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Media({ params }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    setMedia([
      { id: 111221 },
      { id: 2878454 },
      { id: 3785451 },
      { id: 454654 },
      { id: 3785454 },
      { id: 454654 },
      { id: 2878454 },
      { id: 3785459 },
      { id: 454654 },
      { id: 3785454 },
      { id: 454657 },

    ]);
  }, []);

  const FaFileUpload = (e) => { }

  return (
    <div className="section-body"
      style={{ width: "100%", height: "100%" }}>
      <div className="container-fluid" style={{ height: "100%" }} >
        <div className="tab-content" style={{ height: "100%" }}>
          <div
            className="tab-pane fade show active d-flex flex-column"
            id="user-list"
            role="tabpanel"
            style={{ height: "100%" }}
          >
            <div className="card" style={{ height: "100%" }}>
              <div className="card-header" style={{ padding: ".5rem" }}>
                <h6>{`${params.taskid}`}</h6>
              </div>

              <div className="card-body cardBody"
                style={{ padding: "0.1rem 0 1rem 0", height: "100%", overflow: "auto" }}>
                <div className={style.mediaContainer}>
                  <div className={style.mediaWrapper}>

                    <div className={style.mediaCover}>
                      <label htmlFor="imageFile">
                        <MdAddAPhoto size={50} />
                        <input
                          style={{ display: "none" }}
                          id="imageFile"
                          type="file"
                          name="image"
                          accept="image/*"
                          capture="camera"
                          onChange={(e) => {
                            FaFileUpload(e);
                          }}
                        />
                      </label>
                    </div>

                    {media.map((media, index) => {
                      return (
                        <div key={index} className={style.mediaCover}>
                          <Link
                            href={"https://img.freepik.com/premium-photo/male-worker-inspection-pump-motor-oil-steel-long-pipes-pipe-elbow-station-oil-factory-during-refinery-valve-visual-check-record-pipeline_478515-7134.jpg?w=826"
                            }>
                            <Image
                              src={"https://img.freepik.com/premium-photo/male-worker-inspection-pump-motor-oil-steel-long-pipes-pipe-elbow-station-oil-factory-during-refinery-valve-visual-check-record-pipeline_478515-7134.jpg?w=826"}
                              fill={true} />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
