"use client";
import React from "react";
import { courseOne } from "../components/db";
import Dropdown from "../components/dropdown";

function page() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-72 relative flex justify-center">
      <div className="gridbg inset-0 absolute z-10" />
      <section className=" relative z-10 px-10 lg:w-2/3 w-auto">
        <div className="pt-20">
          <h1 className="text-center text-4xl font-semibold">
            Courses Available Available at the Department
          </h1>
        </div>
        <div className=" py-6">
          <p className=" text-center font-medium text-gray-400">
            The Department of Systems Engineering offers essential courses in
            systems analysis, integration, risk management, project management,
            and simulation modeling. These courses equip students with in-demand
            skills for industries like aerospace, defense, transportation, and
            healthcare. Gain a strong foundation in systems thinking,
            problem-solving, and project management to excel in systems
            engineering and related fields.
          </p>
        </div>
        {/* Course content */}
        <div className=" text-center relative">
          {courseOne.map((c1) => {
            const { id, title, description, details, employment } = c1;
            return (
              <div key={id} className="py-20">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="font-medium">{description}</p>
                <Dropdown details={details} employment={employment} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default page;
