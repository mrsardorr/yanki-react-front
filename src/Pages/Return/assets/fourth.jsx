import * as React from "react";

function Fourth(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_389_675)">
        <path
          d="M27 30H3a1.5 1.5 0 01-1.5-1.5v-27A1.5 1.5 0 013 0h24a1.5 1.5 0 011.5 1.5v27A1.5 1.5 0 0127 30zM9 7.5v3h12v-3H9zm0 6v3h12v-3H9zm0 6v3h7.5v-3H9z"
          fill="#E0BEA2"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_389_675">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Fourth;