import React from "react";

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" fill="white" />
      <polygon points="15,15 35,15 55,85 35,85" fill="#246497" />
      <polygon points="15,65 35,85 55,85" fill="#144670" />
      <polygon points="35,85 55,85 65,40 52,15" fill="#1B4D7A" />
      <polygon points="52,15 72,15 62,45" fill="#246497" />
      <polygon points="62,40 72,15 90,15 76,70 60,85" fill="#246497" />
      <polygon points="72,15 90,15 76,55" fill="#144670" />
      <polygon points="65,85 90,85 90,25" fill="#D09848" />
      <polygon points="65,85 90,85 80,70" fill="#B37E33" />
    </svg>
  );
}
