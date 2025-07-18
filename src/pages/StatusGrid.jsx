// import React from 'react';
// import Layout from '../component/Layout';
// const users = [
//     { id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: '12345' },
//     { id: 2, name: 'Bob Smith', email: 'bob@example.com', password: '12345' },
//     { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', password: '12345' },
//     { id: 4, name: 'Diana Prince', email: 'diana@example.com', password: '12345' },
//     { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', password: '12345' },
//     { id: 6, name: 'Fiona Adams', email: 'fiona@example.com', password: '12345' },
// ];

// const StatusGrid = () => {
//     return (
//         <Layout>
//             <div className="p-4">
//                 <h2 className="text-xl text-gray-700 font-bold mb-4">User List</h2>

//                 {/* Desktop Table */}
//                 <div className="hidden md:block overflow-x-auto">
//                     <table className="min-w-full bg-white border border-gray-200 text-left  text-gray-700 ">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="p-3 border-b">No:</th>
//                                 <th className="p-3 border-b">Name</th>
//                                 <th className="p-3 border-b">Email</th>
//                                 <th className="p-3 border-b">Password</th>
//                                 <th className="p-3 border-b">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user, index) => (
//                                 <tr key={user.id} className="hover:bg-gray-50">
//                                     <td className="p-3 border-b font-medium">{index + 1}</td>
//                                     <td className="p-3 border-b">{user.name}</td>
//                                     <td className="p-3 border-b">{user.email}</td>
//                                     <td className="p-3 border-b">{user.password}</td>
//                                     <td className="p-3 border-b">
//                                         <button className="text-blue-600 hover:underline">Edit</button>
//                                         <button className="text-red-600 hover:underline ml-2">Delete</button>

//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Mobile Card View */}
//                 <div className="md:hidden space-y-4">
//                     {users.map((user, index) => (
//                         <div
//                             key={user.id}
//                             className="bg-white border rounded p-4 shadow-sm"
//                         >
//                             <p className="font-semibold text-lg mb-2">{index + 1}</p>
//                             <p><span className="font-semibold">Name:</span> {user.name}</p>
//                             <p><span className="font-semibold">Email:</span> {user.email}</p>
//                             <p><span className="font-semibold">Password:</span> {user.password}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default StatusGrid;



import React, { useEffect, useState } from 'react';
import Layout from '../component/Layout';
import axios from 'axios';





// const users = [
//     { id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: '12345' },
//     { id: 2, name: 'Bob Smith', email: 'bob@example.com', password: '12345' },
//     { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', password: '12345' },
//     { id: 4, name: 'Diana Prince', email: 'diana@example.com', password: '12345' },
//     { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', password: '12345' },
//     { id: 6, name: 'Fiona Adams', email: 'fiona@example.com', password: '12345' },
// ];

const StatusGrid = () => {


    const [users, setUsers] = React.useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
                setUsers(response.data);
                console.log("Fetched users:", response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers(); // ✅ Call it here
    }, []); // ✅ Only run on mount

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);




    return (
        <Layout>

            <div className="pt-20 p-4 max-w-7xl mx-auto">
                <div >
                    <h2 className="text-xl text-gray-700  mb-1 font-extrabold  textAlign: text-center">Services</h2>
                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full bg-white border text-gray-700 font-bold border-gray-200 shadow-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 border-b text-left">No:</th>
                                    {/* <th className="px-4 py-3 border-b text-left">Name</th> */}
                                    <th className="px-4 py-3 border-b text-left">Service responce</th>
                                    <th className="px-4 py-3 border-b text-left">Status</th>
                                    {/* <th className="px-4 py-3 border-b text-left">Email</th> */}
                                    {/* <th className="px-4 py-3 border-b text-left">Password</th> */}
                                    {/* <th className="px-4 py-3 border-b text-left">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user, index) => (

                                    <tr key={user.id} className="hover:bg-gray-50">
                                        {/* <td className="px-4 py-3 border-b">{index + 1}</td> */}
                                        <td className="px-4 py-3 border-b">{indexOfFirstItem + index + 1}</td>

                                        <td className="px-4 py-3 border-b">{user.title}</td>
                                        {/* <td className="px-4 py-3 border-b">{user.completed ? 'Yes' : 'No'}</td> */}
                                        {/* <td
                                        className={`px-4 py-3 border-b font-semibold ${user.error
                                            ? 'text-red-600'
                                            : user.completed
                                                ? 'text-green-600'
                                                : 'text-yellow-600'
                                            }`}
                                    >
                                        {user.error ? 'Error' : user.completed ? 'Active' : 'Pending'}
                                    </td> */}
                                        <td className="px-4 py-3 border-b font-semibold">
                                            <span
                                                className={`h-3 w-3 rounded-full inline-block mx-auto ${user.error ? 'bg-red-500' : user.completed ? 'bg-green-500' : 'bg-yellow-500'}`}
                                            ></span>
                                        </td>



                                        {/* <td className="px-4 py-3 border-b">{user.name}</td> */}
                                        {/* <td className="px-4 py-3 border-b">{user.email}</td> */}
                                        {/* <td className="px-4 py-3 border-b">{user.password}</td> */}
                                        {/* <td className="px-4 py-3 border-b space-x-2">
                                            <button className="text-blue-600 hover:underline">Edit</button>
                                            <button className="text-red-600 hover:underline">Delete</button>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="md:hidden mt-6 relative">

                    {/* Overlay click zones for prev/next */}
                    <div
                        className="absolute inset-0 flex z-10"
                        style={{ userSelect: 'none' }} // prevent text selection on taps
                    >
                        <div
                            className="w-1/2 h-full"
                            onClick={() => {
                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                            }}
                        />
                        <div
                            className="w-1/2 h-full"
                            onClick={() => {
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                            }}
                        />
                    </div>

                    {/* Content, allow pointer events only on buttons */}
                    <div className="relative z-20 pointer-events-none">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-gray-100 text-xs font-semibold text-gray-600 border-b pointer-events-none">
                            <span>No</span>
                            <span className="col-span-2">Service responce</span>
                            <span>Status</span>
                        </div>

                        {/* User rows */}
                        {currentUsers.map((user, index) => (
                            <div
                                key={user.id}
                                className="grid grid-cols-4 gap-2 px-4 py-3 border-b items-center bg-white text-sm pointer-events-none"
                            >
                                <span className="text-gray-600 font-medium">#{indexOfFirstItem + index + 1}</span>

                                <span className="col-span-2 text-gray-800 font-semibold truncate">
                                    {user.title}
                                </span>

                                <span className="flex justify-center">
                                    <span
                                        className={`h-3 w-3 rounded-full inline-block ${user.error ? 'bg-red-500' : user.completed ? 'bg-green-500' : 'bg-yellow-500'}`}
                                        title={user.error ? 'Error' : user.completed ? 'Active' : 'Pending'}
                                    ></span>
                                </span>

                                {/* Buttons with pointer events enabled
                                <div className="col-span-4 flex justify-end gap-4 mt-2 pointer-events-auto">
                                    <button className="text-blue-600 text-sm font-medium hover:underline" onClick={() => console.log('Edit', user.id)}>Edit</button>
                                    <button className="text-red-600 text-sm font-medium hover:underline" onClick={() => console.log('Delete', user.id)}>Delete</button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>





                <div className="flex justify-center items-center mt-6 gap-4">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400 disabled:opacity-50"
                    >
                        Back
                    </button>

                    <span className="text-gray-700 font-semibold">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

            </div>


        </Layout>
    );
};

export default StatusGrid;
