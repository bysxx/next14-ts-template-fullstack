import type { FieldError } from 'react-hook-form';

interface RHFControlledInputProps {
  label: string;
  register: any;
  error: FieldError | undefined;
}

export function RHFControlledInput({ label, register, error }: RHFControlledInputProps) {
  return (
    <label className="flex w-full flex-col items-start gap-2">
      <span className="text-sm font-bold">
        {label}
        <span className="text-pink-700">*</span>
      </span>
      <input
        {...register}
        placeholder={`${label}을 입력해 주세요`}
        className={`w-full rounded-md border border-gray-200 p-4 ${error ? 'outline outline-red-500' : ''}`}
        type="text"
      />
      {error ? <span className="text-xs text-red-500">{error.message}</span> : null}
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
    <label className="flex w-full flex-col items-start gap-2">
      <span className="text-sm font-bold">
        {label}
        <span className="text-pink-700">*</span>
      </span>
      <textarea
        {...register}
        placeholder={`${label}을 입력해 주세요`}
        className="w-full rounded-md border border-gray-200 p-4"
      />
      {error ? <span className="text-xs text-red-500">{error.message}</span> : null}
    </label>
  );
}
