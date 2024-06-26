import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props },ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col">
      <label className="text-sm font-bold uppercase text-stone-600 ">
        {label}
      </label>
      {isTextarea ? (
        <textarea className={classes} {...props} ref={ref}/>
      ) : (
        <input className={classes} {...props} ref={ref}/>
      )}
    </p>
  );
});

export default Input;
