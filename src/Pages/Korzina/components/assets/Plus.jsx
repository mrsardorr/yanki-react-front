import * as React from "react";

function Plus(props) {
  return (
    <button className="cnbtn">
      <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#prefix__clip0_267_431)">
          <path
            d="M8.286 8.286V4h1.428v4.286H14v1.428H9.714V14H8.286V9.714H4V8.286h4.286z"
            fill="#E0BEA2"
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0_267_431">
            <path fill="#fff" d="M0 0h18v18H0z" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default Plus;