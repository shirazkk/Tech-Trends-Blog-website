// import Image from "next/image";
// import React from "react";
// import { Button } from "./ui/button";

// const RecentTopBlog = () => {
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4 py-8">
//       {/* Centered Image Div */}
//       <div className="relative w-full md:w-[90%] lg:w-[80%] h-[500px] md:h-[600px] lg:h-[70vh] flex justify-center items-center">
//         <Image
//           src="/nextjs.png"
//           alt="Blog background"
//           fill
//           quality={100}
//           className="object-cover rounded-md shadow-lg"
//         />

//         {/* Overlay Box */}
//         <div className="absolute bottom-0 right-0 bg-white text-black p-4 md:p-6 rounded-t-md shadow-md w-full md:w-[75%] lg:w-[60%]">
//           {/* Blog Header */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3 md:mb-4">
//             <h4 className="text-xs md:text-sm font-medium uppercase tracking-wide text-gray-600">
//               Development
//             </h4>
//             <span className="text-xs md:text-sm text-gray-400">24 September 2024</span>
//           </div>

//           {/* Blog Title */}
//           <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
//             How to Make a Game Look More Attractive with New VR & AI Technology
//           </h2>

//           {/* Blog Description */}
//           <p className="text-black text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
//             Google has been investing in AI for many years and bringing its
//             benefits to individuals, businesses, and communities. Whether it's
//             publishing state-of-the-art research, building helpful products, or
//             developing tools and resources, we're committed to making AI
//             accessible to everyone.
//           </p>

//           {/* Read More Button */}
//           <Button
//             variant="destructive"
//             className="w-full sm:w-auto bg-black text-white text-xs md:text-sm font-medium px-4 py-2 rounded hover:bg-gray-700 transition"
//           >
//             Read More
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentTopBlog;