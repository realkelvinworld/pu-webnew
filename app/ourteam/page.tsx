/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { PentImage3 } from "../components/img";

function page() {
  return (
    <div className="pb-72 relative">
      <div className="gridbg inset-0 absolute z-10" />
      {/* Heading */}
      <section className="relative z-10 px-10">
        <div className="pt-24  flex justify-center">
          <h1 className="text-left px-2 font-semibold text-xl lg:text-4xl border-l-4 border-blue-800 ">
            Meet Our Outstanding Team of Experts <br />{" "}
            <span className="font-medium">
              Exceptional Professionalism and Expertise!
            </span>
          </h1>
        </div>

        <div className="pb-20 mt-20">
          <div className="flex py-6 flex-row justify-between items-center">
            <h1 className="rounded-full px-4 py-2.5 border-2 border-yellow-500 text-xl">
              K
            </h1>
            <hr className=" border-2 ml-4 -mr-10 w-full" />
          </div>

          <div>
            <div className="flex flex-row justify-around flex-wrap">
              <div>
                <Image
                  src={PentImage3}
                  alt="Mr.Yeboah Faculty Head"
                  className="w-96 rounded-xl"
                />
                <h2 className="text-center  font-semibold text-xl py-6">
                  {" "}
                  Mr.Isaac Kumah Yeboah
                </h2>
              </div>
              <ul className=" font-medium lg:text-xl w-[50rem]">
                Isaac Kuma Yeboah: Awarded "Most Promising Researcher of the
                Year 2012" by Regent University College of Science and
                Technology. Received the "Zonal Championship Medal" by Ghana
                Robotic Academy Foundation in October 2012. Project leader for
                the Texas Instrument innovation challenge Europe analog design
                contest 2014. <br />
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Expertise
                </span>
                <li>
                  Isaac Kuma Yeboah: Head and lead researcher at the
                  International Digital Centre of Pentecost University.
                  Specialized in energy physics with a BSc. in physics from the
                  School of Physical Science, University of Cape Coast, Ghana.
                  Holds an MSc. in electronic science and technology, majoring
                  in circuits and systems from the School of Information
                  Engineering, Wuhan University of Technology, China. Research
                  interests include the application of artificial intelligence
                  at the edge, digital twin technology in industry automation,
                  digital communication, and wireless technology.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Publications
                </span>
                <li>
                  Published eight engineering and scientific research papers in
                  both local and international journals. Authored the book
                  "Optimization of Ultrasonic Flow Meter for Crude Oil Metering"
                  published by LAMBERT Academic Publishing in Germany.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Professional Memberships
                </span>
                <li>
                  Member of the International Engineering and Technology
                  Institute, World Scientific and Engineering Academy Society,
                  and Ghana Science Association.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Experience
                </span>
                <li>
                  Worked as a project coordinator at the Industrial Research
                  Institute of the Council for Scientific and Industrial
                  Research Ghana. Served as a lecturer at All Nations University
                  College and Regent University College of Science and
                  Technology.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Committee Involvement
                </span>
                <li>
                  Served as a scientific committee member reviewing papers for
                  the 10th IASME/WSEAS International Conference on Heat
                  Transfer, Thermal Engineering, and Environment held in
                  Istanbul, Turkey.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pb-20 mt-20">
          <div className="flex flex-row justify-between py-6 items-center">
            <hr className=" border-2 mr-4 -ml-10 w-full" />
            <h1 className="rounded-full px-4 py-2.5 border-2 border-yellow-500 text-xl">
              M
            </h1>
          </div>

          <div>
            <div className="flex flex-row justify-around flex-wrap-reverse">
              <ul className=" font-medium lg:text-xl  w-[50rem]">
                Matthew Asiedu: Co-author of the research publication on
                "Fabrication and Optimization of Bi-Quad Antenna and
                Energy-Efficient Balanced RF Power Amplifier for 5G-LTE
                Multi-Carrier Applications" featured in Volume 3 (2002), Issue
                3, Pages 874-885 by the International Telecommunication Union in
                2022. <br />
                <span className="font-semibold  px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Expertise
                </span>
                <li>
                  Assistant to the International Digital Centre at Pentecost
                  University. Holds a BSc. in Information Technology from
                  Pentecost University. Specialized in the area of Credit Card
                  Fraud Detection Using Transactional Alert Techniques during
                  his first-degree thesis. Research interests include computer
                  forensics, information security, artificial intelligence, and
                  expert systems.
                </li>
                <span className="font-semibold  px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Work Experience
                </span>
                <li>
                  I.T Support Technician from 2012 to 2016. Management
                  Information System Officer (MIS Officer) from 2016 to 2021
                </li>
                <span className="font-semibold  px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Student Mentorship
                </span>
                <li>
                  Student mentor in the area of Information Technology (I.T) at
                  Pentecost University from 2014 to the present.
                </li>
                <span className="font-semibold  px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Areas of Interest
                </span>
                <li>
                  Research interests include computer forensics, information
                  security, artificial intelligence, and expert systems.
                </li>
              </ul>
              <div>
                <Image
                  src={PentImage3}
                  alt="Mr.Yeboah Faculty Head"
                  className="w-96 rounded-xl"
                />
                <h2 className="text-center  font-semibold text-xl py-6">
                  {" "}
                  Mathew Asiedu
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-20 mt-20">
          <div className="flex flex-row py-6 justify-between items-center">
            <h1 className="rounded-full px-4 py-2.5 border-2 border-yellow-500 text-xl">
              B
            </h1>
            <hr className=" border-2 ml-4 -mr-10 w-full" />
          </div>

          <div>
            <div className="flex flex-row justify-around flex-wrap">
              <div>
                <Image
                  src={PentImage3}
                  alt="Mr.Yeboah Faculty Head"
                  className="w-96 rounded-xl"
                />
                <h2 className="text-center  font-semibold text-xl py-6">
                  {" "}
                  Richard Brace
                </h2>
              </div>
              <ul className=" font-medium lg:text-xl w-[50rem]">
                Co-author of publications on advanced communication technologies
                and green human resource management. Co-author of practical
                books on cost engineering and engineering practices. <br />
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Expertise
                </span>
                <li>
                  Research interests in cost engineering/quantity surveying,
                  sustainable engineering, AI, and computing. Application of
                  artificial intelligence techniques and computational methods
                  in engineering, including machine learning, data analytics,
                  optimization algorithms, and computer-aided design.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Professionalism
                </span>
                <li>
                  Solid educational background with a Bachelor of Science degree
                  in Quantity Surveying and Construction Economics. Additional
                  certifications in AI technologies, computer-aided design,
                  programming, and animation.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Collaboration
                </span>
                <li>
                  Multidisciplinary approach and collaborative efforts to drive
                  innovation in cost engineering, sustainable engineering, and
                  AI and computing. Valuable asset to the academic and research
                  community.
                </li>
                <span className="font-semibold px-2 bg-yellow-500 border-l-4 border-blue-800">
                  Team Members in Science Department
                </span>
                <li>
                  Researcher at the International Digital Centre affiliated with
                  Pentecost University.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
