"use client";

import { useField } from "formik";

interface LabelProps {
  name: string;
  placeholder?: string;
  type?: string;
  border?: boolean;
}

const CustomInput: React.FC<LabelProps> = ({ name, border, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <section>
      <input
        {...field}
        {...props}
        className={`
      bg-white
      rounded-md
      p-2
      text-xs
      font-extralight
      w-full
      ${border ? "border-0" : "border-2"}
      ${meta.touched && meta.error ? "" : ""}
      `}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </section>
  );
};

export default CustomInput;
