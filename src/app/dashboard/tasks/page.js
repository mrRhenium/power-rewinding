"use client";

import Link from "next/link";
import style from "./tasks.module.css";
import { useEffect, useState } from "react";
import { PiToolboxFill } from "react-icons/pi";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
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
      { id: 3785454 },
      { id: 454657 },
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
      { id: 3785454 },
      { id: 454657 },
    ]);
  }, []);

  return (
    <div className="section-body" style={{ width: "100%", padding: ".5rem 0" }}>
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

                <div className="float-left" style={{ padding: ".1rem 0 0 .5rem" }}>
                  <h6>Tasks - Jobs</h6>
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
                <div className={style.tasksContainer}>
                  <div className={style.taskWrapper}>
                    {tasks.map((task, index) => {
                      return (
                        <div key={index} className={style.taskCover}>
                          <Link href={`/dashboard/tasks/${task.id}/media`}>
                            <PiToolboxFill className={style.taskIcon} />
                          </Link>
                          <span>{`Task-Id : ${task.id}`}</span>
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
