import { CodeIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { certifi } from "../data";

export default function Certification() {
  return (
    <section id="certification">
      <div className="container px-5 py-10 mx-auto" data-aos="zoom-in" data-aos-duration="1500">
        <div className="text-center mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Certifications
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {certifi.map((certi) => (
            <div key={certi} className="p-2 sm:w-1/8 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center text-green-400">
              <ArrowRightIcon className="w-4 h-4 ml-1" />
                <span className="title-font font-medium text-white">
                  {certi.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}