import React from "react";
import buildImg from "../assets/img/build-img.jpg"

const Build  = () => {
return(
    <section className="bg-gray-200 text-center py-16">
<div className="max-[] space-y-4   container mx-auto px-8">
    <img  className="mx-auto rounded-lg shadow-lg" src={buildImg} alt="build img" />
<h2 className="text-xl font-bold md:text-3xl"> 🎨Build Amazing Uis Width React & Vite</h2>
<p className="text-gray-600">Fast and lightweight, and  modern  frontend development</p>
<button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-300 text-white transition"> 🚀 Get Started</button>
</div>
    </section>
)
}

export default  Build;