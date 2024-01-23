"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
const ActiveLink = ({
  children,
  href,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon: string;
}) => {
  const pathname = usePathname();

  const isActiveLink = pathname === href;

  return (
    <Link
      href={href}
      className={`no-underline p-2 px-3 flex gap-2 h-full border-round-3xl border-solid border-2 ${
        isActiveLink
          ? `bg-blue-500 text-gray-100 font-bold border-blue-500`
          : "text-gray-600 border-gray-500"
      }`}
    >
      <i className={`pi ${icon}`} />
      {children}
    </Link>
  );
};

export default ActiveLink;
