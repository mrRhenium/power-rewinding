"use client";

import style from "./layout.module.css"

import { ImImages } from "react-icons/im";
import { BsCameraFill } from "react-icons/bs";
import { PiChatTextDuotone, PiToolboxFill } from "react-icons/pi";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TaskIDLayout({ children, params }) {
  const pathname = usePathname();
  const fileUpload = (e) => { }

  return (
    <div className={style.container}>

      {/* children start */}
      <section className={style.childerContainer}>{children}</section>
      {/* children start */}

      {/*Navigator */}
      <section className={style.navigatorContainer}>
        <div className={style.navIconWrapper}>

          <div>
            <Link href={`/dashboard/tasks`}>
              <PiToolboxFill className={style.icons} />
              Tasks
            </Link>
          </div>

          <div>
            <label htmlFor="imageFile">
              <BsCameraFill className={style.icons} />
              Camera
              <input
                style={{ display: "none" }}
                id="imageFile"
                type="file"
                name="image"
                accept="image/*"
                capture="camera"
                onChange={(e) => {
                  fileUpload(e);
                }}
              />
            </label>
          </div>

          <div className={pathname.includes("media") ? style.active : null}>
            <Link href={`media`}>
              <ImImages className={style.icons} color={pathname.includes("media") ? "var(--primary-color)" : null} />
              Media
            </Link>
          </div>

          <div className={pathname.includes("remark") ? style.active : null}>
            <Link href={`remark`}>
              <PiChatTextDuotone className={style.icons} color={pathname.includes("remark") ? "var(--primary-color)" : null} />
              Remark
            </Link>
          </div>

        </div>
      </section>
      {/*Navigator */}

    </div>
  );
}
