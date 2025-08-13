import avatar1 from "../assets/img/images.png"
import React from "react";

const tableHeading =[
    {
        colName: "Avatar",
        icon: "👤"
    },
    {
        colName: "Status",
        icon: "✅"
    },
    {
        colName: "Name",
        icon: "📛"
    }
]

const tableData =[
    {
        avatar: avatar1,
        name:"Alice",
        status: "Active"
    },
      {
        avatar: avatar1,
        name:"Raju",
        status: "inactive"
    },
      {
        avatar: avatar1,
        name:"jeba",
        status: "Active"
    }
]


const Table = () => {
    return(
<div className="mx-auto container p-6">
<h2 class="text-2xl font-bold mb-4">📊 User Data</h2>
<table className="min-w-full border border-collapse">
    <thead>
        <tr>
            {tableHeading.map((heading) => 
            <th 
            key={heading.colName}
            className="bg-gray-300 border-gray-400  px-4 py-2 border">
                {heading.icon}
                {heading.colName}
            </th>
            )}
        </tr>
    </thead>
            <tbody>
                {tableData.map((User, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">
                            <img  
                            width={50}
                            height={50}
                            src={User.avatar} alt="avatar img" />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                    {User.name}
                        </td>
                         <td className={`border border-gray-300 px-4 py-2 ${User.status == "Active" ? `text-green-600` : `text-red-600`}`}>
                    {User.status}
                        </td>
                    </tr>
                ))}
            </tbody>
</table>
</div>
    )
}

export default Table;