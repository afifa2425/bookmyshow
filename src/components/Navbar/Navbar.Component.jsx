import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
// function NavSm() {
//   return (
//     <>
//       <div className="text-white flex items-center justify-between">
//         <div>
//           <h3 className="text-xl font-bold ">Its All Starts Here!!</h3>
//           <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
//             Hampi <BiChevronDown />
//           </span>
//         </div>
//         <div className="w-8 h-8">
//           <h3 className="text-gray-400">Use App</h3>
//         </div>
//       </div>
//     </>
//   );
// }

// function NavMd() {
//   return (
//     <>
//       <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
//         <BiSearch />
//         <input
//           type="search"
//           className="w-full bg-transparent border-none focus:outline-none"
//         />
//       </div>
//     </>
//   );
// }

// function NavLg() {
//   return (
//     <>
//       <div className="container flex mx-auto px-4 items-center justify-between">
//         <div className="flex items-center w-1/2 gap-3">
//           <div className="w-5 h-5">
//             {/* <img
//               src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
//               alt="bookMyShowLogo"
//               className="w-10 h-10"
//             /> */}
//           </div>
//           <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
//             <BiSearch />
//             <input
//               type="search"
//               className="w-full bg-transparent border-none focus:outline-none"
//               placeholder="Search for movies,events,plays,sports and activities.."
//             />
//           </div>
//         </div>
//         <div className="flex items-center gap-3">
//           <span className="text-gray-300 text-base flex items-center cursor-pointer hover:text-white">
//             Hampi <BiChevronDown />
//           </span>
//           <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
//             Sign In
//           </button>
//           <div className="w-8 h-6 text-white">
//             <BiMenu className="w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

const Navbar = () => {
  //return <NavLg />;
  // return (
  //   <nav className="bg-darkBackground-700 px-4 my-3">
  //     <div className="md:hidden">
  //       <NavSm />
  //     </div>

  //     <div className="hidden md:flex lg:hidden">
  //       <NavMd />
  //     </div>

  //     <div className="hidden md:hidden lg:flex">
  //       <NavLg />
  //     </div>
  //   </nav>
  // );
  return <div className="text-red-500">bookmyshow</div>;
};

export default Navbar;
