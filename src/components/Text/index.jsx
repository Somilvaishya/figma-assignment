import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium44: "font-medium font-poppins",
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
