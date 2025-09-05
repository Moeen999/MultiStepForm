import { useForm } from "react-hook-form";
import { Input } from "./Input";

export const Info = ({ onNext, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleFormSubmit = (data) => {
    onNext(data);
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
        <Input
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          register={register}
          rules={{
            required: "This field is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
          }}
          error={errors.name}
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          register={register}
          rules={{
            required: "This field is required",
            pattern: {
              message: "Enter a valid email",
            },
          }}
          error={errors.email}
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="e.g. +123 4567 890"
          register={register}
          rules={{
            required: "This field is required",
            minLength: { value: 6, message: "Too short" },
            pattern: {
              value : /^[0-9+\s-]+$/,
              message:"Enter a valid Phone Number"
            },
          }}
          error={errors.phone}
        />

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
