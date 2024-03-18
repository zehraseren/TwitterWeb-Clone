/* eslint-disable react/prop-types */
import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";

export default function Button({ size, children, variant }) {
  return createElement(
    "button",
    {
      className: classNames(
        "rounded-full flex items-center justify-center font-bold transition-colors",
        {
          "px-4 h-8 text-sm": size === "small",
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
          "bg-[#1d9bf0] text-white hover:bg-[#1a8cd8]": variant === "primary",
          "bg-[#eff3f4] text-black hover:bg-[#d7dbdc]": variant === "white",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary", "white"]),
};

Button.defaultProps = {
  size: "normal",
  variant: "primary",
};
