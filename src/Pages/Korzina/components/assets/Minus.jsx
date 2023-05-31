import * as React from "react";

function Minus(props) {
  return (
    
    <button className="cnbtn">
      <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#prefix__clip0_267_434)">
          <path d="M14 8.286H4v1.428h10V8.286z" fill="#E0BEA2" />
        </g>
        <defs>
          <clipPath id="prefix__clip0_267_434">
            <path fill="#fff" d="M0 0h18v18H0z" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default Minus;