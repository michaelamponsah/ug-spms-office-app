import Link from "next/link";
import React from "react";

const SideNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="">Dashboard</Link>
        </li>
        <li>
          <Link href="">Bus Reservations</Link>
        </li>
        <li>
          <Link href="">Conf. Hall Rsv</Link>
        </li>
        <li>
          <Link href="">Letters Seen</Link>
        </li>
        <li>
          <Link href="">Letters Worked On</Link>
        </li>
        <li>
          <Link href="">Promotions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
