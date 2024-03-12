"use client";

import Link from "next/link";
import style from "./Sidepanel.module.css";

// import icons from react icons
import { PiFoldersLight, PiToolboxFill } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { IoLogoAppleAr } from "react-icons/io5";
import { CiLogout } from "react-icons/ci"

// import packages
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { FaUser } from "react-icons/fa";

export default function SidePanel() {
  const pathname = usePathname();
  const router = useRouter();

  const logoutHandler = () => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    Cookies.remove("userData");
    router.push("/auth/login");
  };

  return (
    <div className={style.SidePanelContainer}>
      <div className={style.wrapper}>
        <div className={style.iconsWrapper}>
          <ul>
            <li>
              <Link href={"/dashboard/jobs"}>
                <IoLogoAppleAr
                  className={style.icons}
                  size={35}
                  color="var(--primary-color)"
                />
              </Link>
            </li>

            <li className={pathname.includes("users") ? style.active : null}>
              <Link href={"/dashboard/users"}>
                <SlUser className={style.icons} color={pathname.includes("users") ? "var(--primary-color)" : null} />
                Workers
              </Link>
            </li>

            <li className={pathname.includes("jobs") ? style.active : null}>
              <Link href={"/dashboard/jobs"}>
                <PiFoldersLight className={style.icons} color={pathname.includes("users") ? "var(--primary-color)" : null} />
                Folders
              </Link>
            </li>

            <li className={pathname.includes("tasks") ? style.active : null}>
              <Link href={"/dashboard/tasks"}>
                <PiToolboxFill className={style.icons} color={pathname.includes("tasks") ? "var(--primary-color)" : null} />
                Folders
              </Link>
            </li>

          </ul>
        </div>

        <div className={style.profileWrapper}>

          <div className={style.userWrapper}>
            <FaUser style={{ marginTop: ".2rem" }} />
            <span > Admin </span>
          </div>

          <button
            onClick={() => {
              logoutHandler();
            }}
          >
            <CiLogout className={style.icons} size={20}
              style={{ transform: "rotateZ(180deg)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
