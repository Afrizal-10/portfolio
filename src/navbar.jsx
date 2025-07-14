// import {useState, useEffect} from "react";
// import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
// import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

// // Data menu
// const navigation = [
//   {name: "Home", href: "#home"},
//   {name: "About", href: "#about"},
//   {name: "Projects", href: "#projects"},
//   {name: "Testimoni", href: "#testimoni"},
//   {name: "Contact", href: "#contact"},
// ];

// // Helper
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// function Navbar() {
//   const [active, setActive] = useState("Home");

//   // Scroll listener untuk highlight navbar saat scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       for (let item of navigation) {
//         const id = item.href.replace("#", "");
//         const section = document.getElementById(id);
//         if (section) {
//           const offsetTop = section.offsetTop - 100;
//           const offsetBottom = offsetTop + section.offsetHeight;

//           if (scrollY >= offsetTop && scrollY < offsetBottom) {
//             setActive(item.name);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Disclosure as="nav" className="bg-gray-800 fixed top-0 left-0 w-full z-50">
//       <div className="w-full">
//         <div className="relative flex h-16 items-center justify-between px-4 sm:px-8">
//           {/* Mobile menu button */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
//               <Bars3Icon
//                 className="block h-6 w-6 group-data-open:hidden"
//                 aria-hidden="true"
//               />
//               <XMarkIcon
//                 className="hidden h-6 w-6 group-data-open:block"
//                 aria-hidden="true"
//               />
//             </DisclosureButton>
//           </div>

//           {/* Desktop menu */}
//           <div className="flex flex-1 items-center justify-center sm:justify-center">
//             <div className="hidden sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setActive(item.name)}
//                     className={classNames(
//                       active === item.name
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               onClick={() => setActive(item.name)}
//               className={classNames(
//                 active === item.name
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }

// export default Navbar;
