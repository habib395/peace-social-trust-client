import Lottie from "lottie-react";
import loginData from "../assets/json/login.json";
import LoginForm from "@/components/modules/Authentication/LoginForm";
const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div>
          <Lottie animationData={loginData} loop={true} />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
