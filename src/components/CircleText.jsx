// import React from "react";

// function CircleText() {
//   const text = "APPOINTMENT • ";
//   const letters = text.split("");

//   return (
//     <div className="relative w-[300px] h-[300px] flex items-center justify-center">
//       {/* Arrow */}
//       {/* <div className="absolute text-4xl z-10 text-gray-800">➜</div> */}

//       {/* Circular Text */}
//       <div className="absolute w-full h-full animate-spin-slow">
//         {letters.map((char, index) => {
//           const angle = (360 / letters.length) * index;
//           return (
//             <span
//               key={index}
//               className="absolute left-1/2 top-1/2 text-blue-600 font-bold text-sm"
//               style={{
//                 transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
//                 transformOrigin: "center center",
//               }}
//             >
//               {char}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CircleText;

