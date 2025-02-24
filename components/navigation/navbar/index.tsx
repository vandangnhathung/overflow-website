import Image from "next/image";
import Link from "next/link";
import React from "react";

import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-center-v h-[53px] justify-between px-5 dark:bg-dark-200">
      <Link href="/" className="flex-center gap-x-1.5 font-space-grotesk">
        <Image
          src="/images/site-logo.svg"
          alt="devFlow Logo"
          width={18}
          height={18}
        ></Image>

        <p className="paragraph-bold dark:text-white">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <div>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
