import { FaBook, FaRocket, FaReact} from "react-icons/fa";
import React from "react";
const link = [
    {
        name: "Vite Documentation",
        icon: <FaBook/>,
        href: "#"
    },
     {
        name: "React Guide",
        icon: <FaReact/>,
        href: "#"
    },
     {
        name: "Frontend Trend",
        icon: <FaRocket/>,
        href: "#"
    },
]

const Aside = () => {
    return(
        <aside className=" rounded shadow-sm bg-gray-200 p-8 max-w-[450px] mx-auto">
            <h3 className="text-xl font-bold mb-4">📌 Related Links</h3>
            <ul className="mt-2 space-y-2">
                {link.map((link) => (
                    <li>
                        <a href={link.href}
                        className=" flex items-center text-blue-500 gap-1 hover:underline">
                            {link.icon}
                            {link.name}
                        </a>
                    </li>
                ) )}

            </ul>
        </aside>
    )
}

export default Aside;