import Lottie from "lottie-react";
import loginData from "../assets/json/login.json";
import LoginForm from "@/components/modules/Authentication/LoginForm";
const Login = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
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
