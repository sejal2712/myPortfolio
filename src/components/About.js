import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" data-aos="fade-left" data-aos-duration="2000">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm SEJAL.
            <h3><br className="hidden lg:inline-block" />I love to build amazing projects.</h3>
          </h1>
          <h2 className="mb-8 leading-relaxed">
            I am an engineering graduate pursuing my Bachelors degree from Acropolis Institute in the field of Computer Science and Information Technology. I am a passionate Web Developer !!
          </h2>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Resume
            </a>
            <a
              href="https://github.com/sejal2712"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Github
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="zoom-out" data-aos-duration="2500">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./picc.jpg"
          />
        </div>
      </div>
    </section>
  );
}