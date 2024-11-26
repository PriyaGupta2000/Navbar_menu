import React from "react";
import Navbar from "./MegaMenu/Navbar";

 
 
const App: React.FC = () => {
  return (
  
    
      <div>
       <Navbar/>
      </div>
  );
};
 
export default App;
 

// import React, { useState } from "react";
// import Navbar from "./MegaMenu/Navbar";
 

 
// const App: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<string | null>(null);
 
//   const toggleSection = (section: string) => {
//     setActiveSection((prev) => (prev === section ? null : section));
//   };
 
//   return (
//     <div>
//       <Navbar toggleSection={toggleSection} activeSection={activeSection} />
//       <div className="p-4">
//         {/* Home Section */}
//         {activeSection === "home" && (
//           <div className="text-gray-700 text-lg">
//             <h2 className="text-2xl font-bold mb-4"></h2>
//             <ul className="mt-4 space-y-2">
//               {/* <li>Home Item 1</li>
//               <li>Home Item 2</li>
//               <li>Home Item 3</li> */}
//             </ul>
//           </div>
//         )}
 
//         {/* About Section */}
//         {activeSection === "about" && (
//           <div className="text-gray-700 text-lg">
//             <h2 className="text-2xl font-bold mb-4"></h2>
//             <ul className="mt-4 space-y-2">
//               {/* <li>About Item 1</li>
//               <li>About Item 2</li>
//               <li>About Item 3</li> */}
//             </ul>
//           </div>
//         )}
 
//         {/* Services Section */}
//         {activeSection === "services" && (
//           <div className="text-gray-700 text-lg">
//             <h2 className="text-2xl font-bold mb-4"></h2>
//             <ul className="mt-4 space-y-2">
//               {/* <li>Service 1</li>
//               <li>Service 2</li>
//               <li>Service 3</li> */}
//             </ul>
//           </div>
//         )}
 
//         {/* Contact Section */}
//         {activeSection === "contact" && (
//           <div className="text-gray-700 text-lg">
//             <h2 className="text-2xl font-bold mb-4"></h2>
//             <ul className="mt-4 space-y-2">
//               {/* <li>Contact Method 1</li>
//               <li>Contact Method 2</li>
//               <li>Contact Method 3</li> */}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
 
// export default App;
 