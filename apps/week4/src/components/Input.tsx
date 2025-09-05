import { useFormContext, RegisterOptions } from "react-hook-form";
import { tw } from "@/utils";

type Props = {
  id?: string;
  name: string;
  label?: string;
  rules?: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  type = "text",
  id,
  name,
  label,
  rules,
  ...props
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        {label && (
          <label
            htmlFor={id ?? name}
            className="block font-[400] text-slate-400"
          >
            {label}
          </label>
        )}
        {errors[name] && (
          <p className="mt-1 text-sm text-red-500">
            {errors[name]?.message as string}
          </p>
        )}
      </div>
      <div
        className={tw(
          "rounded-md bg-indigo-50 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline-indigo-600",
          errors[name] &&
            "outline outline-offset-1 outline-red-500 focus-within:outline-red-500",
        )}
      >
        <input
          {...register(name, rules)}
          type={type}
          id={id ?? name}
          name={name}
          {...props}
          className="sm-text-sm/6 w-full grow px-4 py-3 text-base font-light text-gray-800 placeholder:text-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
}
