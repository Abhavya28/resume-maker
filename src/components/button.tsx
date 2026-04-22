"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  radius?: string;
  padding?: string;
  fontSize?: string;
};

export default function Button({
  children,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-700",
  radius = "rounded-lg",
  padding = "px-3 py-3",
  fontSize = "text-lg",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${bgColor} ${hoverColor} ${textColor} ${radius} ${padding} ${fontSize} transition-all duration-200 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}