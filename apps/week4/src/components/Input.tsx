import { useFormContext } from "react-hook-form";
import { tw } from "@/utils";

type InputProps = {
  id?: string;
  name: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  type = "text",
  id,
  name,
  label,
  onChange,
  ...props
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={id ?? name} className="block text-sm/6 text-gray-700">
        {label}
      </label>
      <div className="mt-1.5 rounded-sm border border-blue-300 focus-within:outline-1">
        <input
          {...register(name)}
          type={type}
          id={id ?? name}
          name={name}
          onChange={onChange}
          className={tw(
            "sm-text-sm/6 block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none",
            error && "border-red-500",
          )}
          {...props}
        />
        {errors[name] && <p>{errors[name]?.message as string}</p>}
      </div>
    </div>
  );
}
