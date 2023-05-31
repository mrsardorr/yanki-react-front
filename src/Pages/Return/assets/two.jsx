import * as React from "react";

function Two(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_389_666)">
        <path
          d="M15 30C6.715 30 0 23.285 0 15S6.715 0 15 0s15 6.715 15 15-6.715 15-15 15zm1.5-15V7.5h-3V18h9v-3h-6z"
          fill="#E0BEA2"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_389_666">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Two;