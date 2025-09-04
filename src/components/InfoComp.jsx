import { useForm } from "react-hook-form";

export const Info = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onNext(data);
    // console.log(data)
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-Ubuntu font-bold text-gray-700">
        Personal info
      </h2>
      <p className="text-gray-400 mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          {errors.name && (
            <span className="absolute right-0 top-0 text-xs text-red-500">
              {errors.name.message}
            </span>
          )}
          <input
            type="text"
            placeholder="e.g. Stephen King"
            {...register("name", {
              required: "This field is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm outline-none
              ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          {errors.email && (
            <span className="absolute right-0 top-0 text-xs text-red-500">
              {errors.email.message}
            </span>
          )}
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: "Enter a valid email",
              },
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm outline-none
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          {errors.phone && (
            <span className="absolute right-0 top-0 text-xs text-red-500">
              {errors.phone.message}
            </span>
          )}
          <input
            type="tel"
            placeholder="e.g. +123 4567 890"
            {...register("phone", {
              required: "This field is required",
              minLength: { value: 6, message: "Too short" },
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm outline-none
              ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};
