"use client";

import style from "./layout.module.css";

// import next packages
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { SlArrowLeftCircle } from "react-icons/sl";

export default function Jobslayout({ children, params }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={style.container}>

      {/* Header start */}
      {
        pathname.includes("jobs") && !pathname.includes("media") &&
          !pathname.includes("remark") ?
          <section className={style.headerContainer}>
            <div className={style.buttonWrapper}>
              <Link
                href={"/dashboard/jobs"}
                className={pathname == "/dashboard/jobs" ? style.active : null}
              >
                Folders
              </Link>
              <Link
                href={"/dashboard/jobs/add"}
                className={pathname == "/dashboard/jobs/add" ? style.active : null}
              >
                Add folder
              </Link>
            </div>

            <div className={style.userWrapper}>
              <span ><FaUser /> Admin </span>
            </div>

          </section>
          :
          <section className={style.headerContainer}>
            <div className={style.backBtnWrapper} onClick={() => router.back()}>
              <SlArrowLeftCircle size={18} />
              <span>Back</span>
            </div>
          </section>
      }
      {/* Header end */}

      {/* children start */}
      <section className={style.childerContainer}>{children}</section>
      {/* children start */}

    </div>
  );
}
