import React from "react";

/**
 * AnimatedNdpLogo
 *  - Works immediately with a PNG/SVG logo via the `logoSrc` prop (no tracing required).
 *  - Sequence:
 *      1) Ribbon (left) revealed with a horizontal sweep.
 *      2) Map outline (right) revealed with a second sweep.
 *      3) "NDP" text revealed with a top→down mask (like a drop/overlay).
 *  - If you later convert your logo to pure SVG paths, see the "TODO: precise path animation" section below.
 *
 * Props:
 *  - logoSrc: string (required) – path/URL to your logo image. Example: 
 *      <AnimatedNdpLogo logoSrc={"/assets/ndp-logo.png"} />
 *  - width / height: optional (numbers or strings). Defaults to 420 x auto.
 */

// export default function AnimatedNdpLogo({ logoSrc, width = 420, height = "auto" }) {
//   return (
//     <div className="inline-block">
//       <style>{`
//         /* --- timings --- */
//         :root { 
//           --t1: 1100ms; /* ribbon reveal */
//           --t2: 1100ms; /* map reveal */
//           --t3: 900ms;  /* text drop */
//           --delay2: 950ms;  /* delay for map */
//           --delay3: 1800ms; /* delay for text */
//         }

//         /* smooth entry */
//         .ndp-wrap { 
//           opacity: 0; 
//           transform: translateY(20px) scale(.98);
//           animation: wrapIn 600ms ease forwards; 
//         }

//         @keyframes wrapIn { to { opacity: 1; transform: translateY(0) scale(1); } }

//         /* --- masks --- */
//         .sweep-left rect { animation: sweepLeft var(--t1) ease-out forwards; }
//         @keyframes sweepLeft {
//           from { width: 0; }
//           to { width: 48%; }
//         }

//         .sweep-right rect { animation: sweepRight var(--t2) ease-out forwards; animation-delay: var(--delay2); }
//         @keyframes sweepRight {
//           from { x: 48%; width: 0; }
//           to { x: 48%; width: 52%; }
//         }

//         .drop-clip rect { animation: dropReveal var(--t3) cubic-bezier(.2,.8,.2,1) forwards; animation-delay: var(--delay3); }
//         @keyframes dropReveal {
//           from { y: -10%; height: 0; }
//           60% { y: 0; height: 65%; }
//           to { y: 0; height: 100%; }
//         }

//         /* subtle highlight on text at the end */
//         .ndp-shine { opacity: 0; animation: shine .7s ease-out forwards; animation-delay: calc(var(--delay3) + var(--t3) - 200ms); }
//         @keyframes shine {
//           from { opacity: 0; filter: brightness(1); }
//           60%  { opacity: 1; filter: brightness(1.3); }
//           to   { opacity: 1; filter: brightness(1); }
//         }
//       `}</style>

//       <svg 
//         className="ndp-wrap"
//         width={width}
//         height={height}
//         viewBox="0 0 564 442"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Definitions: three masks that progressively reveal the same base image */}
//         <defs>
//           {/* 1) Left sweep for the ribbon area */}
//           <mask id="mask-ribbon" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
//             <rect x="0" y="0" width="0" height="1" fill="#fff" className="sweep-left" />
//           </mask>

//           {/* 2) Right sweep for the map */}
//           <mask id="mask-map" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
//             <rect x=".48" y="0" width="0" height="1" fill="#fff" className="sweep-right" />
//           </mask>

//           {/* 3) Top→down reveal over the approximate NDP text zone (center-right). */}
//           <mask id="mask-text" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
//             {/* This rect sits over the right 60% where the letters live; adjust if needed */}
//             <rect x=".42" y="0" width=".58" height="0" fill="#fff" className="drop-clip" />
//           </mask>
//         </defs>

//         {/* Base (hidden) – ensures we don't see anything until masks play */}
//         <image href={logoSrc} x="0" y="0" width="564" height="442" opacity="0.06"/>

//         {/* 1) Ribbon */}
//         <image href={logoSrc} x="0" y="0" width="564" height="442" mask="url(#mask-ribbon)"/>

//         {/* 2) Map */}
//         <image href={logoSrc} x="0" y="0" width="564" height="442" mask="url(#mask-map)"/>

//         {/* 3) Text (extra shine) */}
//         <g className="ndp-shine">
//           <image href={logoSrc} x="0" y="0" width="564" height="442" mask="url(#mask-text)"/>
//         </g>

//         {/* Optional: "draw" outline illusion using a soft stroke that animates in */}
//         <g opacity="0.85">
//           <rect x="6" y="6" width="552" height="430" rx="18" fill="transparent" stroke="rgba(255,165,0,.08)" strokeWidth="4" />
//         </g>
//       </svg>

//       {/* ---
//         TODO: precise path animation (when you have vector paths)
//         1) Convert your PNG to SVG (Inkscape: Path > Trace Bitmap, or Illustrator: Image Trace),
//            then ungroup and isolate: (a) ribbon, (b) map outline, (c) letters N D P.
//         2) Replace below placeholders <path d="..."/> with your real paths.
//         3) The stroke-dasharray trick draws them as if by hand.
//       --- */}

//       <svg width="0" height="0" style={{position:"absolute"}} aria-hidden>
//         <defs>
//           <style>{`
//             .draw { 
//               fill: none; 
//               stroke: #ff8c00; /* match your orange */
//               stroke-width: 9; 
//               stroke-linecap: round; 
//               stroke-linejoin: round;
//               stroke-dasharray: var(--len, 1000);
//               stroke-dashoffset: var(--len, 1000);
//               animation: dash 1.2s ease forwards; 
//             }
//             .draw.delay { animation-delay: .9s; }
//             @keyframes dash { to { stroke-dashoffset: 0; } }
//           `}</style>
//         </defs>
//       </svg>
//     </div>
//   );
// }

// /*
// USAGE (React):

// import AnimatedNdpLogo from "./AnimatedNdpLogo";

// export default function Example() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
//       <AnimatedNdpLogo logoSrc={"/assets/ndp-logo.png"} width={520} />
//     </div>
//   );
// }
// */
