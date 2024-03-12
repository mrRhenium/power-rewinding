"use client";

import Link from "next/link";
import { useState } from "react";
import DataTable2 from "@/components/DataTable2";

// import Button from "@/components/Button/Button";
import { ImImages } from "react-icons/im";
import { PiChatTextDuotone } from "react-icons/pi";

export default function JobDetail({ params }) {

  const [jobDeatil, setJobDetail] = useState([
    {
      name: "nitesh yadav",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    },
    {
      name: "nitesh yadav fdsgdfgfd",
      id: "123456"
    }
  ]);


  const headers = [
    { name: "NAME", field: "name", sortable: true, classKey: "" },
    { name: "IMAGES  / REMARK", field: "images", classKey: "" },
  ];

  const searchItems = ["name"];

  const queriesData = jobDeatil?.map((value, index) => {
    let buttons = [];

    buttons.push(
      <Link
        key="viewButton##"
        type="button"
        id="enquiries_view_button"
        href={`${params.jobid}/${value.id}/media`}
        title="View"
      >
        <ImImages style={{ marginLeft: "1rem", color: "var(--primary-color)", cursor: "pointer" }} size={17} />
      </Link>
    );

    buttons.push(
      <Link
        key="viewButton##"
        type="button"
        id="enquiries_view_button"
        href={`${params.jobid}/${value.id}/remark`}
        title="View"
      >
        <PiChatTextDuotone style={{ marginLeft: "2.5rem", color: "var(--primary-color)", cursor: "pointer" }} size={18} />
      </Link>
    );

    value["images"] = buttons.length > 0 ? buttons : "-";
    value["images"] = buttons.length > 0 ? buttons : "-";

    return value;
  });

  return (
    <div className="section-body"
      style={{ width: "100%", height: "100%" }}>
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
                <h6 className="card-title">DETAILS</h6>
              </div>
              <div className="card-body" style={{ overflow: "auto", padding: ".5rem" }}>
                <div className="table-responsive">
                  {
                    <DataTable2
                      lists={queriesData}
                      headers={headers}
                      searchItems={searchItems}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
