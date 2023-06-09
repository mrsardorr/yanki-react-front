import * as React from "react";

function One(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_389_663)">
        <path
          d="M13.682 0l14.277 2.04L30 16.32 16.74 29.578a1.442 1.442 0 01-2.04 0L.422 15.298a1.442 1.442 0 010-2.039L13.682 0zm4.079 12.24a2.883 2.883 0 004.924-2.041 2.884 2.884 0 10-4.924 2.04z"
          fill="#E0BEA2"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_389_663">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default One;