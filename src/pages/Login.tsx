import { useState } from "react";

interface IForm {
    email: string;
    password: string
}

const initialFormState : IForm = {
    email: "",
    password: "",
};

const LoginForm = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState(initialFormState);
    console.log(formData)


  return <div>this is login form</div>;
};

export default LoginForm;
