import React from 'react'

export const MySvgComponent100 = () => {
  return (
    <svg width="100" height="100" viewBox="50 50 100 100">
      <circle cx="50" cy="50" r="40" fill="red" />
    </svg>
  )
}
export const MySvgComponent24 = () => {
  return (
    // <svg width="24" height="24" viewBox="0 0 24 24">
    <svg width="100" height="100" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="blue" />
    </svg>
  )
}

export const SpoonSvgComponent = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <path
        d="M50 10 C 70 30, 70 70, 50 90 L 50 100 L 50 90 C 30 70, 30 30, 50 10 Z"
        fill="silver"
      />
    </svg>
  )
}
export const SpoonySpoon = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      fill="currentColor"
      stroke="currentcolor"
      strokeWidth="4"
    >
      <circle cx="20" cy="80" r="20" />
      <line x1="20" y1="80" x2="80" y2="20" />
      <path d="M0 0 L10 10 m 30  20" />
    </svg>
  )
}

// {/* <path
//         d="M50 10 C 70 30, 70 70, 50 90 L 50 100 L 50 90 C 30 70, 30 30, 50 10 Z"
//         fill="silver"
//       /> */}

// icon:spoon | Fontawesome https://fontawesome.com/ | Fontawesome
// import * as React from 'react'

export function IconSpoon(props) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96 0 96-80 192-160.2 192-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l236.5-236.4z" />
    </svg>
  )
}

// icon:bowl | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
// import * as React from "react";

export function IconBowl(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      // height="1em"
      // width="1em"
      {...props}
    >
      <path d="M22 15c0 3.9-3.1 7-7 7H9c-3.9 0-7-3.1-7-7v-3h20v3z" />
    </svg>
  )
}

// icon:milk | Lucide https://lucide.dev/ | Lucide
//ISC
// import * as React from "react";

export function IconMilk(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      // height="1em"
      // width="1em"
      {...props}
    >
      <path d="M8 2h8M9 2v2.789a4 4 0 01-.672 2.219l-.656.984A4 4 0 007 10.212V20a2 2 0 002 2h6a2 2 0 002-2v-9.789a4 4 0 00-.672-2.219l-.656-.984A4 4 0 0115 4.788V2" />
      <text font-family="Georgia, serif">Dinosaurs!</text>
      <path d="M7 15a6.472 6.472 0 015 0 6.47 6.47 0 005 0" />
    </svg>
  )
}

// icon:box | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
//MIT
// import * as React from "react";

function IconBox(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z" />
    </svg>
  )
}

export default IconBox

// export default IconMilk;

// export default IconBowl;

// export default IconSpoon

// export default MySvgComponent
