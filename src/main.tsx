import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import React, { useState } from "react";
 
// const LoginMenu: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
 
//   const handleLogin = () => {
//     if (email === "test@example.com" && password === "password") {
//       alert("Login successful!");
//     } else {
//       setError("Incorrect email or password.");
//     }
//   };
 
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
//         {error && (
//           <div className="p-2 text-sm text-red-600 bg-red-100 rounded">
//             {error}
//           </div>
//         )}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-600">
//             Email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-600">
//             Password
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <button
//           onClick={handleLogin}
//           className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };
 
// export default LoginMenu;
 