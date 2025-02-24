import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="dark:bg-dark-200 h-[53px] px-5 flex-center-v justify-between">
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

      <div>something else...</div>
    </nav>
  );
};

export default Navbar;
