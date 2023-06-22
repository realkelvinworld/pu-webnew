/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, LinkIcon } from "@heroicons/react/24/solid";
import { PentImage1, PentImage2, UA } from "./components/img";

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
              className="lg:w-3/5 mt-10 mb-10 rounded-xl"
              alt="University A+"
            />
          </div>
          <h2 className="text-center">There will be a slideshow here</h2>
        </div>
        {/* About */}
        <div className="pb-20 mt-20">
          <div className="flex flex-row justify-between items-center">
            <h1 className="rounded-full px-4 py-2.5 border-2 border-yellow-500 text-xl">
              A
            </h1>
            <hr className=" border-2 ml-4 -mr-10 w-full" />
          </div>
          {/* section content */}
          <div>
            <h2 className="text-right font-medium text-xl mb-6">About Us</h2>
            <div className="flex flex-row justify-between flex-wrap">
              <h1 className="text-4xl lg:text-6xl  font-semibold ">
                WE BELIEVE IN <br /> QUALITY
              </h1>
              <p className=" font-medium lg:text-2xl">
                We support education in cutting-edge engineering fields like
                Electricals and <br /> Electronics, Robotics and Automation,
                Manufacturing, Systems, and <br /> Environmental Engineering.
                Our programs equip graduates with knowledge, <br /> skills, and
                ethics for success. <br /> <br /> Our mission is to foster
                global Industry 4.0, drive Ghana's industrialization, <br /> and
                meet manufacturing sector needs. We produce innovative,
                sustainable <br /> engineers, prepare students for careers,
                leadership, and promote Christ-led <br /> service with
                integrity.
              </p>
            </div>
          </div>
        </div>
        {/* Images with button section */}
        <div className="my-24  ">
          <div className="flex flex-wrap justify-around items-center -mx-10">
            <div className="mb-4">
              <Image
                src={PentImage1}
                className="w-imgmobile lg:w-img rounded-xl "
                alt=" pentecost universityengineering faculty images"
              />
              <h1 className="text-center font-medium">Robotics department</h1>
            </div>
            <div className="hidden lg:p-0.5 lg:flex bg-slate-400 h-72 mx-10  "></div>
            <div className="mb-4">
              <Image
                src={PentImage2}
                className="w-imgmobile lg:w-img rounded-xl "
                alt=" pentecost universityengineering faculty images"
              />
              <h1 className="text-center font-medium">
                Engeneering students on the field
              </h1>
            </div>
          </div>
          {/* Eligibility text goes here */}
          <h1 className="mt-10 text-center text-2xl font-medium">
            We accept students from both Science and <br /> Non-Science
            backgrounds
          </h1>
          <div className="flex items-center justify-center">
            <button className=" border rounded-lg px-10 py-2 text-white bg-blue-800 flex">
              Check eligibilty <ArrowTopRightOnSquareIcon className="w-5" />
            </button>
          </div>
        </div>
        {/* Statistics */}
      </section>
    </main>
  );
}
