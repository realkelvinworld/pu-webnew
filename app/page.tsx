import Image from "next/image";
import { ArrowTopRightOnSquareIcon, LinkIcon } from "@heroicons/react/24/solid";
import { UA } from "./components/img";

export default function Home() {
  return (
    <main className="relative pl-10 pr-10">
      {/* <div className="gridbg inset-0 absolute z-10" /> */}
      {/* Hero Header */}
      <section className="pt-20">
        <div>
          <div className="flex flex-row justify-between flex-wrap pb-10">
            <h1 className="font-medium  leading-10 lg:text-6xl text-4xl ">
              Welcome to the <br /> Faculty Of Engineering <br />
              Science and Computing
            </h1>
            <h2 className="text-left text-lg lg:text-right">
              -Since March 2003
              <br />
              <span className="font-medium ">
                Educate
                <br />
                Inovate <br />
                Develop
              </span>
            </h2>
          </div>
          <button className=" border rounded-lg px-10 py-2 text-white bg-blue-800 flex">
            Apply Now <ArrowTopRightOnSquareIcon className="w-5" />
          </button>
        </div>
        {/* Slideshow  */}
        <div className="mt-20">
          <div className=" flex items-center justify-center ">
            <Image
              src={UA}
              className="h-3/4 lg:w-3/5 mt-10 mb-10 rounded-xl"
              alt="University A+"
            />
          </div>
        </div>
        {/* About */}
        <div>
          <div>
            <h1>A</h1>
            <hr />
          </div>
        </div>
      </section>
    </main>
  );
}
