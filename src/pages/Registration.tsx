import RegistrationForm from "@/components/modules/Authentication/RegistrationForm";
import registerData from "../assets/json/register.json";
import Lottie from "lottie-react";
const Registration = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
      <div>
        <Lottie animationData={registerData} loop={true} />
      </div>

      <div>
        <RegistrationForm />
      </div>
      </div>
    </section>
  );
};

export default Registration;
