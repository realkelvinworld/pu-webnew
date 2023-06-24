"use client";
import { Socials1, Socials2, Socials3, Socials4 } from "./db";
import { Facebook, Youtube, Location } from "iconsax-react";
import { Twitter } from "react-feather";
import { motion } from "framer-motion";
import Link from "next/link";

function footer() {
  return (
    <footer className=" relative z-10 px-10 bg-transparent">
      <div className="gridbg inset-0 absolute z-10" />
      <main className="relative rounded-t-xl py-20 bg-blue-800 text-white">
        <div className="text-center flex relative z-10 flex-wrap justify-evenly">
          <div className="pb-10 w-72">
            <h1 className="font-semibold text-xl">Admisions</h1>
            {Socials1.map((adminContent1) => {
              const { id, name, link } = adminContent1;
              return (
                <div key={id}>
                  <Link href={link}>
                    <p className="text-sm pb-2">{name}</p>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="pb-10 w-72">
            <h1 className="font-semibold text-xl">Online Services</h1>
            {Socials2.map((adminContent2) => {
              const { id, name, link } = adminContent2;
              return (
                <div key={id}>
                  <Link href={link}>
                    <p className="text-sm pb-2">{name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="pb-10 w-72">
            <h1 className="font-semibold text-xl">Quick Links</h1>
            {Socials3.map((adminContent3) => {
              const { id, name, link } = adminContent3;
              return (
                <div key={id}>
                  <Link href={link}>
                    <p className="text-sm pb-2">{name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="pb-10 w-72">
            <h1 className="font-semibold text-xl">Contact</h1>
            {Socials4.map((adminContent4) => {
              const { id, name } = adminContent4;
              return (
                <div key={id}>
                  <p className="text-sm pb-2">{name}</p>
                </div>
              );
            })}
            <div className="flex items-center justify-evenly py-2">
              <Link href="https://www.facebook.com/pentvars">
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Facebook className="w-6 h-6 hover:text-yellow-500" />{" "}
                </motion.div>
              </Link>
              <Link href="https://twitter.com/pentvars">
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Twitter className="w-6 h-6 hover:text-yellow-500" />{" "}
                </motion.div>
              </Link>
              <Link href="https://www.youtube.com/playlist?list=PLWW7Is6EPM7vhHZ9j6vlWD7qcaq6enQfg">
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Youtube className="w-6 h-6 hover:text-yellow-500" />{" "}
                </motion.div>
              </Link>
              <Link href="https://pentvars.edu.gh/directions-to-campus/">
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Location className="w-6 h-6 hover:text-yellow-500" />{" "}
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}

export default footer;
