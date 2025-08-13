import React from "react";
import articleImg from "../assets/img/Latest-tech-news3.jpg"

const Article = () => {
    return(
        <article className="mx-auto container p-8 space-y-4 rounded-lg max-w-[900px]">
            <h2 className="text-2xl font-bold">📰 Latest News</h2>
            <div className=" bg-white p-4 shadow-lg flex gap-6">
                <img className="rounded-lg md:max-w-[400px] max-w-[200px]" src={articleImg} alt="article Img" />
                <div>
                    <h3 className="text-xl font-bold pb-4">🚀 Vite is Revolutionizing Frontend </h3>
                    <p className="text-gray-700">Vite is a next-gen frontend tool that delivers fast development.</p>
                </div>
            </div>
        </article>
    )
 }

export default Article; 