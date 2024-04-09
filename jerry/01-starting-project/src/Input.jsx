import React, { forwardRef } from "react";
const Input = forwardRef(({ type, placeholder }, ref) => (
  <input
    ref={ref}
    type={type}
    placeholder={placeholder}
    className="border p-2 mt-2"
  />
));
export default Input;
