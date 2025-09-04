import { useState } from "react";

export const Info = ({ onNext }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext(formData);
    }
  };
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-Ubuntu font-bold text-gray-700">
        Personal info
      </h2>
      <p className="text-gray-400 mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          {errors.name && (
            <span className="absolute right-0 top-0 text-xs text-red-500">
              {errors.name}
            </span>
          )}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
              {errors.email}
            </span>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
              {errors.phone}
            </span>
          )}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
