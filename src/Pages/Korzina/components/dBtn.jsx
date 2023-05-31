import * as React from "react";

function DBtn(props) {
  return (
    <button className="dbtn">
        <svg
          width={25}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_267_438)">
            <path
              d="M18.75 5H25v2.5h-2.5v16.25A1.25 1.25 0 0121.25 25H3.75a1.25 1.25 0 01-1.25-1.25V7.5H0V5h6.25V1.25A1.25 1.25 0 017.5 0h10a1.25 1.25 0 011.25 1.25V5zM20 7.5H5v15h15v-15zM8.75 11.25h2.5v7.5h-2.5v-7.5zm5 0h2.5v7.5h-2.5v-7.5zm-5-8.75V5h7.5V2.5h-7.5z"
              fill="#E0BEA2"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_267_438">
              <path fill="#fff" d="M0 0h25v25H0z" />
            </clipPath>
          </defs>
        </svg>
    </button>
  );
}

export default DBtn;