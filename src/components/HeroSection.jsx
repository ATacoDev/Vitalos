import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import vitalosTitle from "../assets/vitalosTitle.png"

const HeroSection = () => {
  return (

    <div className="flex flex-col items-center">

<img
    src={vitalosTitle} // Replace with your actual image path or variable
    alt="Vitalos Title"
    className="rounded-lg w-1/3" // Adjust the width (1/3 of the container)
  />

<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
  <span className="bg-gradient-to-r from-blue-700 via-red-800 to-orange-500 text-transparent bg-clip-text">
    Glory
  </span>
  {" "}to those who take it
</h1>

        <p className="mt-10 text-lg text-center text-neutral-599 max-w-4xl">
            Welcome to the world of VITALOS! 🔥 Kickstarter LAUNCHING SOON!
        </p>
        <div className="flex justify-center my-10">
            <a href="https://www.instagram.com/vitalosgame/" className="bg-gradient-to-r from-blue-700 via-red-800 to-orange-500 py-3 px-4 mx-3 rounded-md">
                Learn More!
            </a>
            {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Documentation
            </a> */}
        </div>
        <div className="flex mt-10 justify-center">
            
        </div>
    </div>
  )
}

export default HeroSection
