import React from "react";
import bgImage from "../assets/img/hero-back-img.jpg"


const Hero = () => {
    return(
        <>

        <div className="bg-cover bg-center h-96 items-center justify-center text-white flex"
        style={{ backgroundImage:`url(${bgImage})`}}>
<h1 className="text-4xl font-bold rounded-lg backdrop-blur-sm p-4">Welcome to My Website</h1>

        </div>
        
        </>
    )
}

export default Hero;