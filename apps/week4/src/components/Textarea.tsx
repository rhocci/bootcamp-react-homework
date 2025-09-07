import { useFormContext, RegisterOptions } from "react-hook-form";
import { tw } from "@/utils";

type Props = {
  id?: string;
  name: string;
  label?: string;
  rules?: RegisterOptions;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ id, name, label, rules, ...props }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && (
        <label
          htmlFor={id ?? name}
          className="m-2 block font-[400] text-slate-400"
        >
          {label}
        </label>
      )}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
      <textarea
        {...register(name, rules)}
        id={id ?? name}
        name={name}
        {...props}
        className={tw(
          "sm-text-sm/6 flex w-full grow resize-none gap-x-2 rounded-md bg-indigo-50 px-4 py-3 text-base font-light text-gray-800 placeholder:text-gray-500 focus:outline-1 focus:outline-offset-1 focus:outline-indigo-600",
          errors[name] &&
            "outline outline-offset-1 outline-red-500 focus-within:outline-red-500",
        )}
      />
    </div>
  );
}
