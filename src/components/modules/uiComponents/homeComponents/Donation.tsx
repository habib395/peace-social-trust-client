import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const Donation = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      aadhaar: "",
      name: "",
      email: "",
      phone: "",
      amount: "",
      fund: "",
      gateway: "",
      transactionId: "",
    },
  });
  return (
    <div className="flex relative items-center justify-center p-4 rounded-3xl sm:-top-32 z-20">
      <div className="border border-emerald-600 bg-gray-50 dark:bg-slate-900 rounded-3xl shadow-base overflow-hidden sm:w-11/12 mx-auto">
        <div className="relative p-8 md:p-12 text-center">
          <h3 className="font-extrabold text-4xl text-emerald-600 mb-2">
            Make a Donation
          </h3>
          <p className="text-gray-600 py-2">
            Your generous donation helps us achieve our goals.
          </p>
          <form className="flex flex-col sm:gap-6 w-full">
            <div className="flex flex-col sm:gap-6 md:flex-row md:items-start">
              {/* Aadhaar input */}
              <div className="flex-1">
                <label
                  htmlFor="aadhaar"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left"
                >
                  <p className="py-2 sm:ml-1 sm:text-lg">
                    Aadhaar Number <span className="text-red-500">*</span>
                  </p>
                  <input
                    id="name"
                    type="number"
                    placeholder="Aadhaar Number"
                    {...register("aadhaar", {
                      required: "Aadhaar Number is required",
                    })}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 outline-none transition-all duration-300"
                  />
                </label>
                {errors.aadhaar && (
                  <p className="text-red-500">{errors?.aadhaar?.message}</p>
                )}
              </div>
              {/* Full Name input */}
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left"
                >
                  <p className="py-2 sm:ml-1 sm:text-lg">
                    Name <span className="text-red-500">*</span>
                  </p>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 outline-none transition-all duration-300"
                  />
                </label>
                {errors.name && (
                  <p className="text-red-500">{errors?.name?.message}</p>
                )}
              </div>
              {/* Phone number input */}
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left"
                >
                  <p className="py-2 sm:ml-1 sm:text-lg">
                    Phone <span className="text-red-500">*</span>
                  </p>
                  <input
                    id="phone"
                    type="number"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 outline-none transition-all duration-300"
                  />
                </label>
                {errors.phone && (
                  <p className="text-red-500">{errors?.phone?.message}</p>
                )}
              </div>
              {/* Email input */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left"
                >
                  <p className="py-2 sm:ml-1 sm:text-lg">Email</p>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-800 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-600 outline-none transition-all duration-300"
                  />
                </label>
                {errors.email && (
                  <p className="text-red-500">{errors?.email?.message}</p>
                )}
              </div>
              <div className="flex-none sm:pt-12">
                <Button className="">Next Steps</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;
