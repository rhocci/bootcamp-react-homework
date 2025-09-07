import { useState } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { tw } from "@/utils";
import { Eye, EyeOff } from "lucide-react";

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

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

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
          "flex gap-x-2 rounded-md bg-indigo-50 px-4 py-3 focus-within:outline-1 focus-within:outline-offset-1 focus-within:outline-indigo-600",
          errors[name] &&
            "outline outline-offset-1 outline-red-500 focus-within:outline-red-500",
        )}
      >
        <input
          {...register(name, rules)}
          type={showPassword ? "text" : type}
          id={id ?? name}
          name={name}
          {...props}
          className="sm-text-sm/6 w-full grow text-base font-light text-gray-800 placeholder:text-gray-500 focus:outline-none"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
            title={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
            className="text-gray-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
}
