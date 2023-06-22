import { BtnIconProps, BtnProps } from "@/types/props";
import Link from "next/link";

export function BtnPrimary({ text, link, hideNav }: BtnProps) {
  return (
    <Link
      href={link}
      className="rounded-full flex flex-nowrap text-white bg-blue-800 px-4 py-2 hover:bg-opacity-60 hover:transition-all text-sm hover:duration-700 hover:ease-in-out"
      onClick={hideNav}
    >
      <span className="">{text}</span>
    </Link>
  );
}
export function BtnPrimaryIcon({ text, link, hideNav, icon }: BtnIconProps) {
  return (
    <Link
      href={link}
      className="rounded-full bg-blue-800 px-4 py-2 text-white hover:bg-opacity-60 hover:transition-all  hover:duration-700  hover:ease-in-out"
      onClick={hideNav}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
}
