
import React from "react";

export const Play = ({ className }) => {
  return (
    <svg
      className={`play ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1.33271 3.748L6.86222 10.6799C6.95368 10.7943 7.14706 10.7943 7.23851 10.6799L12.7686 3.74752C12.8345 3.66461 12.8539 3.54103 12.8184 3.43345C12.8111 3.41106 12.8029 3.39374 12.7961 3.38098C12.7539 3.30276 12.6727 3.25391 12.5838 3.25391L1.51694 3.25391C1.42838 3.25391 1.34679 3.30264 1.30491 3.38098C1.29769 3.3941 1.28963 3.41142 1.28265 3.43224C1.24715 3.5409 1.26652 3.66485 1.33271 3.748Z"
        fill="white"
      />
    </svg>
  );
};
