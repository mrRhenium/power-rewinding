"use client";

import SidePanel from "@/components/Sidepanel/Sidepanel";
import style from "./layout.module.css"

import { SlUser } from "react-icons/sl";
import { GrUserWorker } from "react-icons/gr";
import { PiFoldersLight, PiToolboxFill } from "react-icons/pi";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [flag, setFlag] = useState(1);

  return (
    <div className={style.container}>
      {/* Side pane start */}
      <section className={style.sidebarContainer}>
        <SidePanel />
      </section>
      {/* Side pane end */}

      {/* children start */}
      <section className={flag ? style.childerContainer : style.childerContainer_worker}>
        {children}
      </section>
      {/* children start */}

      {/* helper for gap start */}
      {
        !pathname.includes("tasks") ?
          <section className={style.navigatorContainer}>
            <div className={style.navIconWrapper}>

              <div className={pathname.includes("users") ? style.active : null}>
                <Link href={"/dashboard/users"}>
                  <GrUserWorker className={style.icons} color={pathname.includes("users") ? "var(--primary-color)" : null} />
                  Workers
                </Link>
              </div>

              <div className={pathname.includes("jobs") ? style.active : null}>
                <Link href={"/dashboard/jobs"}>
                  <PiFoldersLight className={style.icons} color={pathname.includes("jobs") ? "var(--primary-color)" : null} />
                  Folders
                </Link>
              </div>


              <div className={pathname.includes("task") ? style.active : null}>
                <Link href={"/dashboard/tasks"}>
                  <PiToolboxFill className={style.icons} color={pathname.includes("task") ? "var(--primary-color)" : null} />
                  Tasks
                </Link>
              </div>

            </div>
          </section> : null
      }
      {/* helper for gap start */}

    </div>
  );
}
