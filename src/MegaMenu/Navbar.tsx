import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/solid";
 
 
const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 
  // Function to toggle dropdown visibility
  const toggleDropdown = (section: string) => {
    setActiveDropdown((prev) => (prev === section ? null : section));
  };
 
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyMenu</div>
        <div className="flex space-x-4">
          {/* Home Dropdown */}
          <div 
  className="relative" 
  onMouseEnter={() => toggleDropdown("Home")}
  onMouseLeave={() => toggleDropdown("")}
>
<button className="text-white hover:text-gray-300">
  {/*<button className="flex items-center text-white hover:text-gray-300">
      <HomeIcon className="w-5 h-5 mr-1" /> {/* Home icon with size and margin */}
    Home

 </button>
   {activeDropdown === "Home" && (
    <ul className="absolute bg-white shadow-lg p-2 rounded">
      <li className="hover:bg-gray-200 px-1">Item1</li>
      <li className="hover:bg-gray-200 px-1">Item2</li>
      <li className="hover:bg-gray-200 px-1">Item3</li>
      <li className="hover:bg-gray-200 px-1">Item4</li>
      <li className="hover:bg-gray-200 px-1">Item5</li>
    </ul>
  )}
</div>

          {/* About Dropdown */}
<div 
  className="relative" 
  onMouseEnter={() => toggleDropdown("about")}
  onMouseLeave={() => toggleDropdown("")}
>
  <button className="text-white hover:text-gray-300">
     About
   </button>   {activeDropdown === "about" && (
    <ul className="absolute bg-white shadow-lg p-2 rounded">
      <li className="hover:bg-gray-200 px-1">Item1</li>
      <li className="hover:bg-gray-200 px-1">Item2</li>
      <li className="hover:bg-gray-200 px-1">Item3</li>
      <li className="hover:bg-gray-200 px-1">Item4</li>
      <li className="hover:bg-gray-200 px-1">Item5</li>
    </ul>
  )}
</div>

 
          {/* Services Dropdown */}
          <div 
  className="relative" 
  onMouseEnter={() => toggleDropdown("Services ")}
  onMouseLeave={() => toggleDropdown("")}
>
  <button className="text-white hover:text-gray-300">
    Service
  </button>
  {activeDropdown === "Services " && (
    <ul className="absolute bg-white shadow-lg p-2 rounded">
      <li className="hover:bg-gray-200 px-1">Item1</li>
      <li className="hover:bg-gray-200 px-1">Item2</li>
      <li className="hover:bg-gray-200 px-1">Item3</li>
      <li className="hover:bg-gray-200 px-1">Item4</li>
      <li className="hover:bg-gray-200 px-1">Item5</li>
    </ul>
  )}
</div>

          {/* Contact Dropdown */}
          <div className="relative"
          onMouseEnter={() => toggleDropdown("contact")}
          onMouseLeave={() => toggleDropdown("")}
          >
            <button
              // onClick={() => toggleDropdown("contact")}
              className="text-white hover:text-gray-300"
            >
              Contact
            </button>
            {activeDropdown === "contact" && (
              <ul className="absolute bg-white shadow-lg p-2 rounded">
                <li className="hover:bg-gray-200 px-1">Contact1</li>
                <li className="hover:bg-gray-200 px-1">Contact2</li>
                <li className="hover:bg-gray-200 px-1">Contact3</li>
                <li className="hover:bg-gray-200 px-1">Contact2</li>
                <li className="hover:bg-gray-200 px-1">Contact3</li>
                


              </ul>
            )}
          </div>

{/*Profile dropdown */}
          <div 
  className="relative" 
  onMouseEnter={() => toggleDropdown("Profile")}
  onMouseLeave={() => toggleDropdown("")}
>
  <button className="text-white hover:text-gray-300">
    Profile
  </button>
  {activeDropdown === "Profile" && (
    <ul className="absolute bg-white shadow-lg p-2 rounded">
      <li className="hover:bg-gray-200 px-1">Prof1</li>
      <li className="hover:bg-gray-200 px-1">Prof1</li>
      <li className="hover:bg-gray-200 px-1">Prof1</li>
      <li className="hover:bg-gray-200 px-1">Prof1</li>
      <li className="hover:bg-gray-200 px-1">Prof1</li>
    </ul>
  )}
</div>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;
 





// import React, { useState } from "react";
// // Import the Heroicons Home icon
// import { HomeIcon } from "@heroicons/react/solid";
 
// const Navbar: React.FC = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 
//   // Function to toggle dropdown visibility
//   const toggleDropdown = (section: string) => {
//     setActiveDropdown((prev) => (prev === section ? null : section));
//   };
 
//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">MyApp</div>
//         <div className="flex space-x-4">
//           {/* Home Dropdown with Icon */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("home")}
//               className="flex items-center text-white hover:text-gray-300"
//             >
//               <HomeIcon className="w-5 h-5 mr-1" /> {/* Home icon with size and margin */}
//               Home
//             </button>
//             {activeDropdown === "home" && (
//               <ul className="absolute bg-white shadow-lg p-2 space-y-1 mt-2 rounded">
//                 <li className="hover:bg-gray-200 p-2">Home Item 1</li>
//                 <li className="hover:bg-gray-200 p-2">Home Item 2</li>
//                 <li className="hover:bg-gray-200 p-2">Home Item 3</li>
//               </ul>
//             )}
//           </div>
 
//           {/* About Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("about")}
//               className="text-white hover:text-gray-300"
//             >
//               About
//             </button>
//             {activeDropdown === "about" && (
//               <ul className="absolute bg-white shadow-lg p-2 space-y-1 mt-2 rounded">
//                 <li className="hover:bg-gray-200 p-2">About Item 1</li>
//                 <li className="hover:bg-gray-200 p-2">About Item 2</li>
//                 <li className="hover:bg-gray-200 p-2">About Item 3</li>
//               </ul>
//             )}
//           </div>
 
//           {/* Services Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("services")}
//               className="text-white hover:text-gray-300"
//             >
//               Services
//             </button>
//             {activeDropdown === "services" && (
//               <ul className="absolute bg-white shadow-lg p-2 space-y-1 mt-2 rounded">
//                 <li className="hover:bg-gray-200 p-2">Service 1</li>
//                 <li className="hover:bg-gray-200 p-2">Service 2</li>
//                 <li className="hover:bg-gray-200 p-2">Service 3</li>
//               </ul>
//             )}
//           </div>
 
//           {/* Contact Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("contact")}
//               className="text-white hover:text-gray-300"
//             >
//               Contact
//             </button>
//             {activeDropdown === "contact" && (
//               <ul className="absolute bg-white shadow-lg p-2 space-y-1 mt-2 rounded">
//                 <li className="hover:bg-gray-200 p-2">Contact Method 1</li>
//                 <li className="hover:bg-gray-200 p-2">Contact Method 2</li>
//                 <li className="hover:bg-gray-200 p-2">Contact Method 3</li>
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
 
// export default Navbar;
 