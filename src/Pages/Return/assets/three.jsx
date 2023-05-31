import * as React from "react";

function Three(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_389_672)">
        <path
          d="M20 0c.789 0 1.429.64 1.429 1.429v1.427l7.142.001v8.572l-2.885-.002 3.952 10.852a5.714 5.714 0 11-10.886 3.436h-6.075a5.717 5.717 0 01-11.142-.326A2.854 2.854 0 010 22.857v-7.143h12.857c0 .733.552 1.337 1.262 1.42l.167.009h2.857c.732 0 1.336-.552 1.419-1.262l.01-.167V2.857h-4.286V0H20zM7.143 21.429a2.857 2.857 0 100 5.714 2.857 2.857 0 000-5.714zm17.143 0a2.857 2.857 0 100 5.714 2.857 2.857 0 000-5.714zM11.429 2.857c.789 0 1.428.64 1.428 1.429v10H0v-10c0-.79.64-1.429 1.429-1.429h10zm14.285 2.857H21.43v2.857h4.285V5.714zM10 5.714H2.857v1.429H10V5.714z"
          fill="#E0BEA2"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_389_672">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Three;