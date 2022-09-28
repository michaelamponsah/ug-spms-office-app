import Link from "next/link";
import React from "react";
import styles from "../styles/SideNav.module.css";

const SideNavigation = () => {
  return (
    <nav className={`${styles["nav-wrapper"]}`}>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/reservations/school-bus">Bus Reservations</Link>
        </li>
        <li>
          <Link href="/reservations/conference-room">Conf. Hall Rsv</Link>
        </li>
        <li>
          <Link href="/letters/letters-seen">Letters Seen</Link>
        </li>
        <li>
          <Link href="/letters/letters-worked-on">Letters Worked On</Link>
        </li>
        <li>
          <Link href="/promotions/processing-of-application-for-promotion">
            Promotions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
