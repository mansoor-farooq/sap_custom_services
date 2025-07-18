// import React, { useEffect, useState } from 'react';
// import Layout from '../component/Layout';
// import axios from 'axios';


// const YoungBazerHealth = () => {



//     const [YoungBazerHealth, setYoungBazerHealth] = useState([]);


//     const fetchYoungBazerHealth = async () => {
//         axios.get('http://202.143.125.148:9000/health')
//             .then((response) => {
//                 console.log('Response:', response);
//                 setYoungBazerHealth(response.status);
//             })
//     }


//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8;

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentYoungBazerHealth = YoungBazerHealth.slice(indexOfFirstItem, indexOfLastItem);

//     const totalPages = Math.ceil(YoungBazerHealth.length / itemsPerPage);
//     const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//     fetchYoungBazerHealth();


//     return (
//         <Layout>
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-3xl font-bold mb-4">Young Bazer Health</h1>
//                 <p className="text-lg mb-4"> Young Bazer Health is a comprehensive program designed to promote the well-being of young individuals. It focuses on various aspects of health including physical fitness, mental wellness, and nutritional guidance.</p>
//                 <p className="text-lg mb-4">The program includes regular health check-ups, workshops on healthy living, and access to resources that support a balanced lifestyle. It aims to empower young people with the knowledge and tools they need to lead healthier lives.</p>
//                 <p className="text-lg mb-4">Through community engagement and support, Young Bazer Health strives to create a positive impact on the health of young individuals, fostering a culture of wellness and proactive health management.</p>
//             </div>
//             <div className="pt-20 p-4 max-w-7xl mx-auto">
//                 <div >
//                     <h2 className="text-xl text-gray-700  mb-1 font-extrabold  textAlign: text-center">Services</h2>
//                     {/* Desktop View */}
//                     <div className="hidden md:block overflow-x-auto">
//                         <table className="min-w-full bg-white border text-gray-700 font-bold border-gray-200 shadow-sm">
//                             <thead className="bg-gray-100">
//                                 <tr>
//                                     <th className="px-4 py-3 border-b text-left">No:</th>
//                                     {/* <th className="px-4 py-3 border-b text-left">Name</th> */}
//                                     <th className="px-4 py-3 border-b text-left">Service responce</th>
//                                     <th className="px-4 py-3 border-b text-left">Status</th>
//                                     {/* <th className="px-4 py-3 border-b text-left">Email</th> */}
//                                     {/* <th className="px-4 py-3 border-b text-left">Password</th> */}
//                                     {/* <th className="px-4 py-3 border-b text-left">Actions</th> */}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {currentYoungBazerHealth.map((user, index) => (

//                                     <tr className="hover:bg-gray-50">

//                                         <td className="px-4 py-3 border-b">{indexOfFirstItem + index + 1}</td>
//                                         <td className="px-4 py-3 border-b">Young bazer backend health</td>
//                                         <td className="px-4 py-3 border-b font-semibold">
//                                             <span
//                                                 className={`h-3 w-3 rounded-full inline-block mx-auto ${user.error ? 'bg-red-500' : user.status ? 'bg-green-500' : 'bg-yellow-500'}`}
//                                             ></span>
//                                         </td>




//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>


//                 <div className="md:hidden mt-6 relative">

//                     {/* Overlay click zones for prev/next */}
//                     <div
//                         className="absolute inset-0 flex z-10"
//                         style={{ YoungBazerHealthelect: 'none' }} // prevent text selection on taps
//                     >
//                         <div
//                             className="w-1/2 h-full"
//                             onClick={() => {
//                                 if (currentPage > 1) setCurrentPage(currentPage - 1);
//                             }}
//                         />
//                         <div
//                             className="w-1/2 h-full"
//                             onClick={() => {
//                                 if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//                             }}
//                         />
//                     </div>

//                     {/* Content, allow pointer events only on buttons */}
//                     <div className="relative z-20 pointer-events-none">
//                         {/* Header */}
//                         <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-gray-100 text-xs font-semibold text-gray-600 border-b pointer-events-none">
//                             <span>No</span>
//                             <span className="col-span-2">Service responce</span>
//                             <span>Status</span>
//                         </div>

//                         {/* User rows */}
//                         {currentYoungBazerHealth.map((user, index) => (
//                             <div
//                                 key={user.id}
//                                 className="grid grid-cols-4 gap-2 px-4 py-3 border-b items-center bg-white text-sm pointer-events-none"
//                             >
//                                 <span className="text-gray-600 font-medium">#{indexOfFirstItem + index + 1}</span>

//                                 <span className="col-span-2 text-gray-800 font-semibold truncate">
//                                     {user.title}
//                                 </span>

//                                 <span className="flex justify-center">
//                                     <span
//                                         className={`h-3 w-3 rounded-full inline-block ${user.error ? 'bg-red-500' : user.completed ? 'bg-green-500' : 'bg-yellow-500'}`}
//                                         title={user.error ? 'Error' : user.completed ? 'Active' : 'Pending'}
//                                     ></span>
//                                 </span>

//                                 {/* Buttons with pointer events enabled */}
//                                 {/* <div className="col-span-4 flex justify-end gap-4 mt-2 pointer-events-auto">
//                                     <button className="text-blue-600 text-sm font-medium hover:underline" onClick={() => console.log('Edit', user.id)}>Edit</button>
//                                     <button className="text-red-600 text-sm font-medium hover:underline" onClick={() => console.log('Delete', user.id)}>Delete</button>
//                                 </div> */}
//                             </div>
//                         ))}
//                     </div>
//                 </div>





//                 <div className="flex justify-center items-center mt-6 gap-4">
//                     <button
//                         onClick={() => setCurrentPage(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400 disabled:opacity-50"
//                     >
//                         Back
//                     </button>

//                     <span className="text-gray-700 font-semibold">
//                         Page {currentPage} of {totalPages}
//                     </span>

//                     <button
//                         onClick={() => setCurrentPage(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                         className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400 disabled:opacity-50"
//                     >
//                         Next
//                     </button>
//                 </div>

//             </div>
//         </Layout>

//     )
// }

// export default YoungBazerHealth

import React, { useEffect, useState } from 'react';
import Layout from '../component/Layout';
import axios from 'axios';

const YoungBazerHealth = () => {
    const [statusCode, setStatusCode] = useState(null);
    const [hasError, setHasError] = useState(false);

    const fetchYoungBazerHealth = async () => {
        try {
            const response = await axios.get('http://202.143.125.148:9000/health');
            console.log('Response:', response);
            setStatusCode(response.status);
            setHasError(false);
        } catch (error) {
            console.error('Error fetching health:', error);
            setHasError(true);
        }
    };

    useEffect(() => {
        fetchYoungBazerHealth();
    }, []);

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Young Bazer Health</h1>
                <p className="text-lg mb-4">A health monitoring system for backend service status.</p>

                <div className="overflow-x-auto mt-8">
                    <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 shadow-sm text-sm text-gray-700">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 border text-left">S.No</th>
                                <th className="px-4 py-3 border text-left">Service</th>
                                <th className="px-4 py-3 border text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3 border">1</td>
                                <td className="px-4 py-3 border">Young Bazer Backend</td>
                                <td className="px-4 py-3 border font-semibold">
                                    <span
                                        className={`h-3 w-3 rounded-full inline-block ${hasError ? 'bg-red-500' : statusCode === 200 ? 'bg-green-500' : 'bg-yellow-500'
                                            }`}
                                        title={hasError ? 'Error' : 'Online'}
                                    ></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>
    );
};

export default YoungBazerHealth;
