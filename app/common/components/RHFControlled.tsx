import { FieldError } from "react-hook-form";


interface RHFControlledInputProps {
  label: string;
  register: any;
  error: FieldError | undefined;
}

export function RHFControlledInput({ label, register, error }: RHFControlledInputProps) {
  return (
    <label className="flex flex-col gap-2 w-full items-start">
      <span className="font-bold text-sm">
        {label}
        <span className="text-pink-700">*</span>
      </span>
      <input
        {...register}
        placeholder={`${label}을 입력해 주세요`}
        className={`p-4 border border-gray-200 rounded-md w-full ${error ? 'outline outline-red-500' : ''}`}
        type="text"
      />
      {error ? <span className="text-red-500 text-xs">{error.message}</span> : null}
    </label>
  );
}

interface RHFControlledTextAreaProps {  
  label: string;
  register: any;
  error: FieldError | undefined;
}

export function RHFControlledTextArea({ label, register, error }: RHFControlledTextAreaProps) {
  return (
    <label className="flex flex-col gap-2 w-full items-start">
      <span className="font-bold text-sm">
        {label}
        <span className="text-pink-700">*</span>
      </span>
      <textarea
        {...register}
        placeholder={`${label}을 입력해 주세요`}
        className="p-4 border border-gray-200 rounded-md w-full"
      />
      {error ? <span className="text-red-500 text-xs">{error.message}</span> : null}
    </label>
  );
}
