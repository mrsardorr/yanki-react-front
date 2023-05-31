import * as React from "react";

function Fifth(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_389_681)">
        <path
          d="M15 30C6.715 30 0 23.285 0 15S6.715 0 15 0s15 6.715 15 15-6.715 15-15 15zM9.75 18v3h3.75v3h3v-3H18a3.75 3.75 0 100-7.5h-6a.75.75 0 110-1.5h8.25V9H16.5V6h-3v3H12a3.75 3.75 0 100 7.5h6a.75.75 0 110 1.5H9.75z"
          fill="#E0BEA2"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_389_681">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Fifth;