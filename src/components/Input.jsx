export const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  rules,
  error,
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      {error && (
        <span className="absolute right-0 top-0 text-xs text-red-500">
          {error.message}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm outline-none
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
      />
    </div>
  );
};
