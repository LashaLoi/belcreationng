import { ComponentProps } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type CheckboxProps<T extends FieldValues> = {
  label: string;
  id: string;
  register: UseFormRegister<T>;
  registerName: string;
} & ComponentProps<"input">;

export function Checkbox<T extends FieldValues>({
  label,
  id,
  register,
  registerName,
  ...props
}: CheckboxProps<T>) {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={id}
      >
        <input
          {...props}
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-[#F3A3B0] before:opacity-0 before:transition-opacity checked:border-[#FECC17] checked:bg-[#FECC17] checked:before:bg-gray-900 hover:before:opacity-10"
          id={id}
          {...register(registerName as Path<T>, { required: props.required })}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="mt-px font-light text-gray-700 cursor-pointer select-none"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
