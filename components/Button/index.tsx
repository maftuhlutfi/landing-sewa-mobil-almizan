import { AosEventType } from "aos";
import React from "react";

type Props = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "xl";
  [key: string]: any;
};

const Button = ({
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
  variant = "primary",
  size = "medium",
  ...restProps
}: Props) => {
  const baseStyle =
    "font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  let styleClass = "";
  let sizeClass = "";
  switch (variant) {
    case "primary":
      styleClass =
        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800";
      break;
    case "secondary":
      styleClass =
        "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-500";
      break;
    case "outlined":
      styleClass =
        "border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800 active:border-gray-500 active:text-gray-900";
      break;
    default:
      styleClass =
        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800";
      break;
  }
  switch (size) {
    case "small":
      sizeClass = "px-4 py-3 text-sm";
      break;
    case "medium":
      sizeClass = "px-4 py-4 text-base";
      break;
    case "xl":
      sizeClass = "px-5 py-3 text-xl";
      break;
    default:
      sizeClass = "px-4 py-2 text-base";
      break;
  }

  return (
    <button
      className={`${baseStyle} ${styleClass} ${sizeClass} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
