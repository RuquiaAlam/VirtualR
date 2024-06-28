import React from 'react'

import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <p className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </p>
      </h1>

      <div className="flex flex-col items-center">
        <p className="text-lg text-center my-10 text-neutral-500  max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools.
          <p>
            Get started today and turn your imagination into immersive reality!
          </p>
        </p>
      </div>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="px-4 py-3 mx-3 rounded-md border bg-gradient-to-r from-orange-500 to-orange-800"
        >
          Start for free
        </a>
        <a href="#" className="px-2 py-3 rounded-md border ">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className=" rounded-lg border border-orange-700 shadow-orange-400 w-1/3 mx-2 my-4"
        >
          <source src={video2} type="video/mp4"></source>
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
}

export default HeroSection