"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaEdit, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { showErrorToast, showSuccessToast } from "@/utils/toaster";
import DataTable2 from "@/components/DataTable2";
// import Button from '@/components/Button/Button';
// import PermissionContext from '@/app/context/PermissionContext';

const Users = () => {
  //  const {authPermissions}=useContext(PermissionContext)
  const [users, setUsers] = useState([]);

  const fethUsers = async () => {
    const response = await fetch("/api/admin/users");
    const res = await response.json();
    setUsers(res.data);
  };

  useEffect(() => {
    fethUsers();
  }, []);

  const headers = [
    // { name: 'S.No.', field: 'sr_no', classKey: '' },
    { name: "NAME", field: "name", sortable: true, classKey: "" },
    { name: "EMAIL", field: "email", sortable: true, classKey: "" },
    { name: "ROLE", field: "role_name", sortable: true, classKey: "" },
    { name: "ACTION", field: "action", classKey: "" },
  ];

  const searchItems = ["name", "role_name", "email"];

  const userDeleteHandler = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirmed) {
      try {
        const response = await fetch(`/api/admin/users/${id}`, {
          method: "DELETE",
        });
        const res = await response.json();

        setUsers(users.filter((user) => user.id !== id));
        showSuccessToast(res.message);
      } catch (error) {
        showErrorToast("User delete error!");
      }
    }
  };

  const usersData = users?.map((value, index) => {
    let buttons = [];
    //  if (authPermissions?.includes('User-Update')){
    buttons.push(
      <Link
        id={`editButton_${index}`}
        key="editButton##1"
        type="button"
        href={`/dashboard/users/edit/${value.id}`}
        style={{ border: "none", background: "none" }}
        title="Edit"
      >
        <FaEdit color="green" size={13} />
      </Link>
    );
    //  }

    // if(authPermissions?.includes("User-Delete")){
    buttons.push(
      <button
        id={`deleteButton_${index}`}
        key="deleteButton##1"
        type="button"
        data-id={value.id}
        onClick={() => userDeleteHandler(value.id)}
        title="Delete"
        style={{ border: "none", background: "none", marginLeft: "1rem" }}
      >
        <FaTrash color="red" size={13} />
      </button>
    );
    // }

    value["action"] = buttons.length > 0 ? buttons : "-";

    return value;
  });

  return (
    <div className="section-body" style={{ width: "100%", height: "fit-content" }}>
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
                <h6 className="card-title" >WORKERS - LIST</h6>
              </div>
              <div className="card-body" style={{ overflow: "auto", padding: ".5rem" }}>
                <div className="table-responsive">
                  {
                    <DataTable2
                      lists={usersData}
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

export default Users;
