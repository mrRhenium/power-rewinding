"use client";

import Link from "next/link";
import style from "./jobs.module.css";
import { useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";

export default function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    setFolders([
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

  return (

    <div className="section-body" style={{ width: "100%" }}>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="tab-content" style={{ height: "100%" }}>
          <div
            className="tab-pane fade show active d-flex flex-column"
            id="user-list"
            role="tabpanel"
            style={{ height: "100%" }}
          >
            <div className="card" style={{ height: "100%" }}>
              <div className="card-header" style={{ padding: ".5rem" }}>

                <div className="float-left">
                  <select
                    id="list_length"
                    name="list_length"
                    className="form-select"
                    onChange={() => { }}
                    style={{ fontSize: ".7rem" }}
                  >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="float-right">
                  <div className="input-container-search d-flex">
                    <input
                      id="search"
                      name="search"
                      type="text"
                      className="form-control search-input"
                      placeholder="Search"
                      value={""}
                      onChange={(e) => { }}
                      style={{ fontSize: ".7rem" }}
                    />
                  </div>
                </div>

              </div>
              <div className="card-body" style={{ padding: "0.1rem 0 1rem 0", overflow: "auto" }}>
                <div className={style.foldersContainer}>
                  <div className={style.folderWrapper}>
                    {folders.map((folder, index) => {
                      return (
                        <div key={index} className={style.folderCover}>
                          <Link href={`/dashboard/jobs/${folder.id}`}>
                            <FcOpenedFolder className={style.folderIcon} />
                          </Link>
                          <span>{`Job Id : ${folder.id}`}</span>
                          {/* <span>{`Client : ${folder.id}`}</span> */}
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
    </div>
  );
}
